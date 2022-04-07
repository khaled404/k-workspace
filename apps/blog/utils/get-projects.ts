import { TProject } from '@k-workspace/shared/ui';
import { rootPath } from '@k-workspace/utils';
import { readFileSync } from 'fs';

const getProjects = (): TProject[] => {
  const file: any = readFileSync(rootPath('/data/projects.json'));
  const data: TProject[] = JSON.parse(file);

  return data.filter((item) => item.published);
};

const getSingleProject = (id?: number): TProject => {
  return getProjects().filter((item) => item.id === id)[0];
};
export { getProjects, getSingleProject };
