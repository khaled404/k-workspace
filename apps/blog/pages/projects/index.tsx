import { ProjectBox, TProject } from '@k-workspace/shared/ui';
import { readFileSync } from 'fs';
import { GetStaticProps } from 'next';
import { join } from 'path';

/* eslint-disable-next-line */
export interface ProjectsProps {
  projects: TProject[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      <ProjectBox projects={projects} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const PROJECTS_PATH = join(process.cwd(), process.env.projectsPath);

  const file: any = readFileSync(PROJECTS_PATH);
  const data = JSON.parse(file);
  return {
    props: {
      projects: data,
    },
  };
};

export default Projects;
