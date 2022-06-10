import type { TProject } from '@k-workspace/shared/ui';
import { getProjects, getSingleProject } from '@k-workspace/json-data-provider';

import { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';
import { Head, TMeta } from '@k-workspace/shared/components';

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

  const meta: TMeta[] = [
    {
      name: 'author',
      content: project.developer,
    },
    {
      name: 'description',
      content: project.description,
    },
    {
      name: 'keywords',
      content: project.tags.join(' ,'),
    },
    {
      name: 'revised',
      content: project.version,
    },
    {
      property: 'og:image',
      content: project.imagePath,
    },
  ];

  return (
    <div className="container mx-auto">
      <Head meta={meta} title={project.slug} />
      <ProjectComponent />
    </div>
  );
};
export default ProjectDetails;

export const getStaticProps: GetStaticProps<
  IProjectDetails,
  { slug: string }
> = async ({ params }) => {
  const project = getSingleProject(params.slug);
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
