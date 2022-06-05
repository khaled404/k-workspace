import { rootPath } from '@k-workspace/utils';
import fs from 'fs';

const PATH = rootPath('/data/');
const SERVER_PATH = '/data/';

const getFileParser = <T>(
  dir: string,
  fileName: string,
  isServer?: boolean
): T => {
  const file: any = fs.readFileSync(
    `${isServer ? SERVER_PATH : PATH}${dir}/` + fileName + '.json'
  );
  const data: T = JSON.parse(file);
  return data;
};

export { getFileParser };
