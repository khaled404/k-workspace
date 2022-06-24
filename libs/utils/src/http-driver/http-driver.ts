/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCurrentUser } from '../local-storage/global-get-items';
import { THttpDriver } from './http-driver-types';

const httpDriver = async (path = '', options?: THttpDriver): Promise<any> => {
  try {
    const response = await fetch(process.env['baseUrl'] + path, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCurrentUser()?.token}` || '',
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
