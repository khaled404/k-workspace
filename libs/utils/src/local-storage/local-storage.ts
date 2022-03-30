import { TLocalStorage, TStorage } from './local-storage-types';

const store: TStorage =
  typeof window !== 'undefined' ? localStorage : undefined;

const saveItem = (key: string, data: TLocalStorage) => {
  const toString = JSON.stringify(data);
  store?.setItem(key, toString);
  return true;
};

const getItem = (key: string, initData?: TLocalStorage) => {
  const data = store?.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return initData || false;
};

export { saveItem, getItem };
