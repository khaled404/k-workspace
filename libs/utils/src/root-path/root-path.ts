import { join } from 'path';
import { TRootPath } from './root-path-types';

const rootPath = (path: TRootPath): string => join(process.cwd(), path);

export { rootPath };
