import { THttpDriver } from './http-driver-types';

const httpDriver = async <T = unknown>(
  path: string,
  options?: THttpDriver
): Promise<T> => {
  const response = await fetch(process.env['baseUrl'] + path, options);
  return await response.json();
};

export { httpDriver };
