import { join } from 'path';
import { rootPath } from './root-path';
describe('root-path', () => {
  it('paths handler', () => {
    expect(rootPath('folder')).toEqual(join(process.cwd(), 'folder'));
  });
});
