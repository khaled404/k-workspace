import type { IWordsData } from '@k-workspace/types';
import { getFileParser } from './get-file-parser';
import fs from 'fs';
import { rootPath } from '@k-workspace/utils';

const DIR = 'words';
const PATH = rootPath('/data/words/words.json');

const getAllWords = () => {
  const data = getFileParser<IWordsData[]>(DIR, 'words');

  return data;
};

const addNewWord = (newWord: IWordsData) => {
  const allWords = getAllWords();
  const id = allWords[allWords.length - 1]?.id + 1;

  const data = [
    ...allWords,
    {
      ...newWord,
      id: id,
      sentences: newWord?.sentences?.map((item, index: number) => ({
        ...item,
        id: index + 1,
      })),
    },
  ];

  fs.writeFileSync(PATH, JSON.stringify(data));
};

export { getAllWords, addNewWord };
