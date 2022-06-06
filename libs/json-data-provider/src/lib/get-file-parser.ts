import { rootPath } from '@k-workspace/utils';
import fs from 'fs';

const PATH = rootPath('/data/');

const getFileParser = <T>(dir: string, fileName: string): T => {
  const file: any = fs.readFileSync(`${PATH}/${dir}/` + fileName + '.json');
  const data: T = JSON.parse(file);
  return data;
};

export { getFileParser };
