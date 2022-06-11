/* eslint-disable @typescript-eslint/no-explicit-any */
import { THttpDriver } from './http-driver-types';

const httpDriver = async (path = '', options?: THttpDriver): Promise<any> => {
  const response = await fetch(process.env['baseUrl'] + path, options);
  const { data } = await response.json();
  return { data, status: response?.status };
};

export { httpDriver };
