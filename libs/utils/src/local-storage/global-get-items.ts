import { getItem, LOCAL_STORAGE_KEYS } from './local-storage';
import { TUser } from './local-storage-types';

const getCurrentUser = (): TUser => {
  const user = getItem(LOCAL_STORAGE_KEYS.GET_USER);
  return user;
};

export { getCurrentUser };
