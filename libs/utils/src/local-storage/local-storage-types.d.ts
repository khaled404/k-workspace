export type TLocalStorage<
  T = string | number | object | Array<unknown> | unknown
> = T;

export type TStorage = Storage | undefined;

export type TUser = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};
