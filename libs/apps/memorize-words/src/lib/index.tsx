import { Transition } from '@headlessui/react';
import { LoadingScreen } from '@k-workspace/shared/ui';
import type { IWordsData } from '@k-workspace/types';
import { FC, useState } from 'react';
import AddWord from './components/AddWord';
import Search from './components/Search';
import WordDetails from './components/WordDetails';
import { INITIAL_WORD_VALUES } from './constant';
import { useQuery } from '@k-workspace/shared/hooks';
import { getAllWords } from './requests';

/* eslint-disable-next-line */
interface MemorizeWordsProps {}

const MemorizeWords: FC<MemorizeWordsProps> = () => {
  const [showWord, setShowWord] = useState(false);
  const [selectedWord, setSelectedWord] =
    useState<IWordsData>(INITIAL_WORD_VALUES);

  const {
    data: words,
    isLoading,
    setData,
  } = useQuery<IWordsData[]>(getAllWords);

  const handelSelectedWord = (value: IWordsData) => {
    setSelectedWord(value);
    setShowWord(true);
  };
  const handelBack = () => {
    setShowWord(false);
    setTimeout(() => {
      setSelectedWord(INITIAL_WORD_VALUES);
    }, 200);
  };
  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Search
        words={words}
        selectedWord={selectedWord}
        handelSelectedWord={handelSelectedWord}
      />

      <Transition
        show={!showWord}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <AddWord setData={setData} />
      </Transition>

      <Transition
        show={showWord}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <WordDetails selectedWord={selectedWord} handelBack={handelBack} />
      </Transition>
    </>
  );
};

export default MemorizeWords;
