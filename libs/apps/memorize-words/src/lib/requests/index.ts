import { httpDriver } from '@k-workspace/utils';
import routes from '../constant/routes';

export const getAllWords = async <T = unknown>(): Promise<T> => {
  const data = await httpDriver(routes.WORD_API_PATH);
  return data;
};

export const addNewWord = async <T = unknown>(body: T): Promise<T> => {
  const data = await httpDriver(routes.WORD_API_PATH, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return data;
};

export const deleteWord = async (body: { id: string }): Promise<unknown> => {
  const data = await httpDriver(routes.WORD_API_PATH, {
    method: 'DELETE',
    body: JSON.stringify(body),
  });
  return data;
};
