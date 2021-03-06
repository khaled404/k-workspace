/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable-next-line */

import { useModal } from '@k-workspace/shared/components';
import { getCurrentUser } from '@k-workspace/utils';
import { useRouter } from 'next/router';
import { LoginAndRegister } from '../login-and-register/login-and-register';

export type TProject = {
  id: number;
  imagePath: string;
  slug: string;
  name: string;
  description: string;
  published: boolean;
  version: string;
  developer: string;
  tags: string[];
  requireAuthentication: boolean;
};

export interface ProjectBoxProps {
  projects: TProject[];
}

export function ProjectBox({ projects }: ProjectBoxProps) {
  const router = useRouter();
  const { newModal } = useModal();

  const pushToApplication = ({ requireAuthentication, slug }: TProject) => {
    const user = getCurrentUser();
    if (requireAuthentication && !user) {
      newModal({
        type: 'custom',
        renderCustom: (setOpen) => (
          <LoginAndRegister
            type={'login'}
            setOpen={(value: any) => {
              setOpen(value);
              getCurrentUser() && router.push(`projects/${slug}`);
            }}
          />
        ),
      });
      return;
    }

    router.push(`projects/${slug}`);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-between space-x-4">
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {projects.map((project: TProject) => (
            <div key={project.id} className="relative group">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={project.imagePath}
                  alt={project.name}
                  className="object-center object-cover"
                />
                <div
                  className="flex items-end opacity-0 p-4 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                    View Project
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                <h3>
                  <button onClick={() => pushToApplication(project)}>
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </button>
                </h3>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
