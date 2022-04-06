import { ProjectBox, TProject } from '@k-workspace/shared/ui';
import { httpDriver, rootPath } from '@k-workspace/utils';
import { readFileSync } from 'fs';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';

export interface ProjectsProps {
  projects: TProject[];
}

export function Projects({ projects }: ProjectsProps) {
  return <ProjectBox projects={projects} />;
}

export default Projects;

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const file: any = readFileSync(rootPath('/data/projects.json'));

  const data: TProject[] = JSON.parse(file);

  return {
    props: {
      projects: data,
    },
  };
};
