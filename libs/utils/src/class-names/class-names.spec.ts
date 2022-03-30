import { classNames } from './class-names';

describe('class-names', () => {
  it('class names handler', () => {
    expect(classNames('class1', 'class2')).toEqual('class1 class2');
  });
});
