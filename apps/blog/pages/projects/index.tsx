import { httpDriver } from '@k-workspace/utils';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface ProjectsProps {}

export function Projects({ ...projects }: ProjectsProps) {
  const fetchComments = async () => {
    const data = await httpDriver('projects');
    console.log(data);
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return <div>Projects</div>;
}

export default Projects;
