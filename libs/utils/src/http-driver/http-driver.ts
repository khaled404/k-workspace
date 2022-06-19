/* eslint-disable @typescript-eslint/no-explicit-any */
import { getItem, LOCAL_STORAGE_KEYS } from '../local-storage/local-storage';
import { THttpDriver } from './http-driver-types';

const httpDriver = async (path = '', options?: THttpDriver): Promise<any> => {
  try {
    const response = await fetch(process.env['baseUrl'] + path, {
      ...options,
      headers: {
        Authorization:
          `Bearer ${getItem(LOCAL_STORAGE_KEYS.GET_USER)?.token}` || '',
      },
    });
    const responseJson = await response.json();
    const data = responseJson ? responseJson : responseJson;
    return { data, status: response?.status };
  } catch (error) {
    console.log(error);
  }
};

export { httpDriver };
