import { TProject } from '@k-workspace/shared/ui';
import { rootPath } from '@k-workspace/utils';
import { readFileSync } from 'fs';

const PATH = rootPath('/data/');

const getFileParser = <T>(fileName: string): T => {
  const file: any = readFileSync(PATH + fileName + '.json');
  const data: T = JSON.parse(file);
  return data;
};

const getProjects = (): TProject[] => {
  const data = getFileParser<TProject[]>('projects');
  return data.filter((item) => item.published);
};

const getSingleProject = (id?: number): TProject => {
  return getProjects().filter((item) => item.id === id)[0];
};

export { getProjects, getSingleProject, getFileParser };