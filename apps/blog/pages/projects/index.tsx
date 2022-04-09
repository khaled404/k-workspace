import { ProjectBox, TProject } from '@k-workspace/shared/ui';
import { getProjects } from '../../utils/data-provider/data-provider';
import { GetStaticProps } from 'next';

export interface ProjectsProps {
  projects: TProject[];
}

function Projects({ projects }: ProjectsProps) {
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
