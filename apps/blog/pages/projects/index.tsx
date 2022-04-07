import { ProjectBox, TProject } from '@k-workspace/shared/ui';
import { getProjects } from '../../utils/get-projects';
import { GetStaticPaths, GetStaticProps } from 'next';

export interface ProjectsProps {
  projects: TProject[];
}

export function Projects({ projects }: ProjectsProps) {
  return <ProjectBox projects={projects} />;
}

export default Projects;

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  return {
    props: {
      projects: getProjects(),
    },
  };
};
