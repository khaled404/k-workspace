import { ProjectBox, TProject } from '@k-workspace/shared/ui';
import { httpDriver, rootPath } from '@k-workspace/utils';
import { readFileSync } from 'fs';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';

export interface ProjectsProps {
  projects: TProject[];
}

export function Projects({ projects }: ProjectsProps) {
  const loadData = async () => {
    const data = await httpDriver<TProject[]>('projects');
    console.log(data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return <ProjectBox projects={projects} />;
}

export default Projects;

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const data: TProject[] = readFileSync(rootPath('/data/projects.json')) as any;

  return {
    props: {
      projects: data,
    },
  };
};
