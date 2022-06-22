import { httpDriver } from '@k-workspace/utils';
import routes from '../constant/routes';

export const getAllWords = async <T = unknown>(): Promise<T> => {
  const data = await httpDriver(routes.GET_WORDS);
  return data;
};

export const addNewWord = async <T = unknown>(body: T): Promise<T> => {
  const data = await httpDriver(routes.ADD_WORD, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return data;
};

export const deleteWord = async (body: { id: string }): Promise<unknown> => {
  const data = await httpDriver(`${routes.DELETE_WORD}/${body.id}`, {
    method: 'DELETE',
  });
  return data;
};
