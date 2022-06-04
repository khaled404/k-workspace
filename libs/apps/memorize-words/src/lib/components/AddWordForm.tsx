/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusSmIcon, TrashIcon } from '@heroicons/react/outline';
import type { TState } from '@k-workspace/types';
import { httpDriver, useForm } from '@k-workspace/utils';
import type { FC } from 'react';
import { WORD_API_PATH } from '../constant';

interface IAddWordForm {
  setShowAddNew: TState;
  refetch: () => void;
}

const sentencesValues = {
  sentence: '',
  translations: '',
};

const initialValues = { word: '', image: '', sentences: [sentencesValues] };

const addWord = async (body: any) => {
  const data = await httpDriver(WORD_API_PATH, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
  return data;
};

const AddWordForm: FC<IAddWordForm> = ({ setShowAddNew, refetch }) => {
  const {
    handelChange,
    handelChangeArray,
    handelSubmit,
    values,
    addFieldArray,
    removeFieldArray,
  } = useForm<typeof initialValues>({
    initialValues: initialValues,
    onSubmit: (values) => {
      addWord(values);
      setShowAddNew(false);
      refetch();
    },
  });

  return (
    <form
      onSubmit={handelSubmit}
      className="space-y-8 divide-y divide-gray-200 py-16"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              New Word
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This word will be displayed publicly so be careful what you share.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="word"
                className="block text-sm font-medium text-gray-700"
              >
                Word
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="word"
                  id="word"
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  onChange={handelChange}
                  value={values.word}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <div className="mt-1">
                <input
                  type="url"
                  name="image"
                  id="image"
                  required
                  onChange={handelChange}
                  value={values.image}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Sentences
              </h3>
            </div>
            {values.sentences.map(
              (item: typeof sentencesValues, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6 col-span-6"
                >
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="sentence"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Sentence
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="sentence"
                        id="sentence"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={item.sentence}
                        onChange={(event) => {
                          handelChangeArray(event, 'sentences', index);
                        }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="translations"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Translation
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="translations"
                        id="translations"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={item.translations}
                        onChange={(event) => {
                          handelChangeArray(event, 'sentences', index);
                        }}
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-start">
                      {index !== 0 && (
                        <button
                          onClick={() => {
                            removeFieldArray('sentences', index);
                          }}
                          type="button"
                          className="inline-flex items-center p-1 border rounded-full shadow-sm text-white  border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <TrashIcon
                            className="h-5 w-5 text-gray-700"
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="pt-8">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  addFieldArray('sentences', sentencesValues);
                }}
                type="button"
                className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setShowAddNew(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddWordForm;
