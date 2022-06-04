import type { FC } from 'react';
import type { IWordsData, TSentence, TState } from '@k-workspace/types';
import { ClipboardIcon } from '@heroicons/react/outline';

interface IWordDetails {
  selectedWord: IWordsData;
  handelBack: () => void;
}

const WordDetails: FC<IWordDetails> = ({ selectedWord, handelBack }) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div
            className="py-4 border-b border-gray-200 flex items-center space-x-3"
            onClick={() => {
              navigator.clipboard.writeText(selectedWord.word);
            }}
          >
            <ClipboardIcon className="w-8 h-8 text-gray-900" />
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl capitalize cursor-pointer">
              {selectedWord.word}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            {selectedWord.sentences.length !== 0 && (
              <h2 className="text-lg leading-6 font-medium text-gray-900 capitalize">
                Sentences
              </h2>
            )}
            <dl className="mt-4 space-y-6 capitalize">
              {selectedWord.sentences.map((item: TSentence) => (
                <>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      sentence
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {item.sentence}
                    </dd>
                  </div>

                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      translations
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {item.translations}
                    </dd>
                  </div>
                </>
              ))}
            </dl>
          </section>
        </div>

        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={selectedWord.image}
              alt={selectedWord.word}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <div className="mt-10">
              <a
                target="_blank"
                href={`https://ar.youglish.com/pronounce/${selectedWord.word}/english`}
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                rel="noreferrer"
              >
                Pronouncing The Word
              </a>
            </div>

            <button
              type="button"
              className="w-full mt-5 bg-white border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handelBack}
            >
              Cancel
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WordDetails;
