import { classNames } from './utils';
import { saveItem, getItem } from './local-storage';

describe('utils', () => {
  it('class names handler', () => {
    expect(classNames('class1', 'class2')).toEqual('class1 class2');
  });

  it('local storage handler', () => {
    expect(saveItem('test', 'test saved items')).toEqual(true);
    expect(getItem('test')).toEqual('test saved items');
  });
});
