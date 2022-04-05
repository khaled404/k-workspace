import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface ProjectsProps {}

export function Projects({ ...projects }: ProjectsProps) {
  const fetchComments = async () => {
    const response = await fetch('/api/projects');
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return <div>Projects</div>;
}

export default Projects;
