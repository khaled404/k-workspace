import { TProject } from '@k-workspace/shared/ui';
import {
  getSingleProject,
  getProjects,
} from '../../utils/data-provider/data-provider';

import { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';

const EisenhowerMatrix = dynamic(
  async () => (await import('@k-workspace/eisenhower-matrix')).EisenhowerMatrix
);

interface IProjectDetails {
  project: TProject;
}
const ProjectDetails = ({ project }: IProjectDetails) => {
  const projects = {
    1: EisenhowerMatrix,
  };
  const ProjectCom = projects[project.id];

  return <ProjectCom />;
};
export default ProjectDetails;

export const getStaticProps: GetStaticProps<IProjectDetails> = async ({
  params,
}) => {
  const project = getSingleProject(+params.id);
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const paths = getProjects().map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
