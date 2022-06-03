import { TProject } from '@k-workspace/shared/ui';
import { getProjects, getSingleProject } from '@k-workspace/json-data-provider';

import { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';

const EisenhowerMatrix = dynamic(
  async () => (await import('@k-workspace/eisenhower-matrix')).EisenhowerMatrix
);

const MemorizeWords = dynamic(
  async () => (await import('@k-workspace/memorize-words')).MemorizeWords
);

interface IProjectDetails {
  project: TProject;
}
const ProjectDetails = ({ project }: IProjectDetails) => {
  const projects = {
    EisenhowerMatrix,
    MemorizeWords,
  };
  const ProjectComponent = projects[project.slug];

  return <ProjectComponent />;
};
export default ProjectDetails;

export const getStaticProps: GetStaticProps<IProjectDetails> = async ({
  params,
}) => {
  const project = getSingleProject(params.slug as string);
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  const paths = getProjects().map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
