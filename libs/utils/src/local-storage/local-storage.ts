import { TLocalStorage, TStorage } from './local-storage-types';

const LOCAL_STORAGE_KEYS = {
  GET_USER: 'GET_USER',
  TASKS_LIST: 'TASKS_LIST',
} as const;

type TLocalStorageKeys =
  typeof LOCAL_STORAGE_KEYS[keyof typeof LOCAL_STORAGE_KEYS];

const store: TStorage =
  typeof window !== 'undefined' ? localStorage : undefined;

const saveItem = (key: TLocalStorageKeys, data: TLocalStorage) => {
  const toString = JSON.stringify(data);
  store?.setItem(key, toString);
  return true;
};

const getItem = (key: TLocalStorageKeys, initData?: TLocalStorage) => {
  const data = store?.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return initData || false;
};

export { saveItem, getItem, LOCAL_STORAGE_KEYS };
