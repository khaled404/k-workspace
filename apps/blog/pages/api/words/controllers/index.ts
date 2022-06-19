import { IWordsData } from '@k-workspace/types';
import { convertToSchema, sendError, TBody } from '@k-workspace/utils';
import Words from '../models';

export const getWords = async (): Promise<IWordsData[]> => {
  const data = await Words.find();
  return data.map(convertToSchema);
};

export const addNewWord = async (body: TBody) => {
  const isAlreadyExists = await Words.findOne({ word: body?.word });
  if (isAlreadyExists) return sendError('Word is already exists');
  const word = await new Words(body).save();
  return convertToSchema(word);
};
export const updateWords = () => {
  return 'update';
};
export const deleteWords = async (body: TBody) => {
  const { id } = body;
  try {
    await Words.findOneAndRemove({ _id: id });
    return 'successfully removed';
  } catch (error) {
    return sendError(error);
  }
};
