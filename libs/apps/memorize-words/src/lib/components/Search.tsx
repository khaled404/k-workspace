import type { FC } from 'react';
import type { IWordsData } from '@k-workspace/types';
import { useState } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Combobox } from '@headlessui/react';
import { classNames } from '@k-workspace/utils';
interface ISearch {
  words: IWordsData[];
  selectedWord: IWordsData;
  handelSelectedWord: (value: IWordsData) => void;
}
const Search: FC<ISearch> = ({ words, selectedWord, handelSelectedWord }) => {
  const [query, setQuery] = useState('');

  const filteredWords =
    query === ''
      ? words
      : words?.filter((person) => {
          return person?.word?.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selectedWord} onChange={handelSelectedWord}>
      <Combobox.Label className="block text-5xl font-bold text-gray-700 uppercase text-center py-16">
        Search for word
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-2xl border capitalize border-gray-300 bg-white py-8 pl-6 pr-8 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xl"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          displayValue={(words: { word: string }) => words?.word}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredWords?.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredWords?.map((word) => (
              <Combobox.Option
                key={word?.id}
                value={word}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <img
                        src={word?.image}
                        alt=""
                        className="h-8 w-8 flex-shrink-0 rounded-full"
                      />
                      <span
                        className={classNames(
                          'ml-3 truncate font-medium text-lg capitalize',
                          selected && 'font-semibold'
                        )}
                      >
                        {word?.word}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default Search;
