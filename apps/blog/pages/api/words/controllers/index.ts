import { IWordsData } from '@k-workspace/types';
import { convertToSchema, sendError } from '@k-workspace/utils';

import Words from '../models';

export const getWords = async (): Promise<IWordsData[]> => {
  const data = await Words.find();
  return data.map(convertToSchema);
};

export const addNewWord = async (body: string) => {
  const newWord = JSON.parse(body);

  const isAlreadyExists = await Words.findOne({ word: newWord?.word });
  if (isAlreadyExists) return sendError('Word is already exists');
  const word = await new Words(newWord).save();
  return convertToSchema(word);
};
export const updateWords = () => {
  return 'update';
};
