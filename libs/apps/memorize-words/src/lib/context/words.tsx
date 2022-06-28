/* eslint-disable react-hooks/exhaustive-deps */

import { FC, IWordsData, TProvider, TState } from '@k-workspace/types';
import { createContext, useContext, useMemo, useState } from 'react';
import { INITIAL_WORD_VALUES } from '../constant';
import path from '../constant/path';

type TPages = typeof path[keyof typeof path];

type WordsContextType = {
  words: IWordsData[];
  setWords: TState;
  selectedWord: IWordsData;
  handelSelectedWord: (word: IWordsData) => void;
  currentPage: TPages;
  navigate: (pageName: TPages, reset?: boolean) => void;
  addNewWordHandler: (word: IWordsData) => void;
};

const WordsContext = createContext<WordsContextType | null>(null);

const WordsProvider = ({ children }: FC): TProvider => {
  const [words, setWords] = useState<IWordsData[]>([]);
  const [currentPage, setCurrentPage] = useState<TPages>(path.ADD_WORD);
  const [selectedWord, setSelectedWord] =
    useState<IWordsData>(INITIAL_WORD_VALUES);

  const handelSelectedWord = (word: IWordsData) => {
    setSelectedWord(word);
    setCurrentPage(path.WORD_DETAILS);
  };
  const navigate = (pageName: TPages, reset?: boolean) => {
    setCurrentPage(pageName);
    if (reset)
      setTimeout(() => {
        setSelectedWord(INITIAL_WORD_VALUES);
      }, 200);
  };

  const addNewWordHandler = (word: IWordsData) => {
    setWords((old) => [...old, word]);
    setCurrentPage(path.ADD_WORD);
  };

  const value = useMemo(
    () => ({
      words,
      setWords,
      selectedWord,
      handelSelectedWord,
      currentPage,
      addNewWordHandler,
      navigate,
    }),
    [words, currentPage, selectedWord]
  );

  return (
    <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
  );
};

const useWords = (): WordsContextType => {
  const context = useContext(WordsContext);
  if (!context) throw Error('useWords should be used within <WordsProvider />');
  return context;
};

export { useWords, WordsProvider };
