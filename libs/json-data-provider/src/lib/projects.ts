import type { TProject } from '@k-workspace/shared/ui';
import { getFileParser } from './get-file-parser';

const DIR = 'projects';

const getProjects = (): TProject[] => {
  const data = getFileParser<TProject[]>(DIR, 'projects');
  return data.filter(
    (item) => item.published || process.env.NODE_ENV === 'development'
  );
};

const getSingleProject = (slug: string) => {
  return getProjects().filter((item) => item.slug === slug)[0];
};

export { getProjects, getSingleProject };
