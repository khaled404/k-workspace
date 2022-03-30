import { saveItem, getItem } from './local-storage';
describe('LocalStorage', () => {
  it('local storage handler', () => {
    expect(saveItem('test', 'test saved items')).toEqual(true);
    expect(getItem('test')).toEqual('test saved items');
  });
});
