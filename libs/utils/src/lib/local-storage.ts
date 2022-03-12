const store: any = typeof window !== 'undefined' ? localStorage : undefined;

type TData<T = unknown> = {
  [key: string]: T;
}[][];

const saveItem = (key: string, data: TData) => {
  const toString = JSON.stringify(data);
  store?.setItem(key, toString);
  return true;
};

const getItem = (key: string, initData?: unknown) => {
  const data = store?.getItem(key);
  if (data) {
    const toObject = JSON.parse(data);
    return toObject;
  }
  return initData || false;
};

export { saveItem, getItem };
