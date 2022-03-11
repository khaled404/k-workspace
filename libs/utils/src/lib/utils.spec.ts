import { classNames } from './utils';

describe('utils', () => {
  it('class names handler', () => {
    expect(classNames('class1', 'class2')).toEqual('class1 class2');
  });
});
