import { PlusIcon } from '@heroicons/react/solid';
import { useWords } from '../context/words';

const AddWord = () => {
  const { navigate } = useWords();
  return (
    <div className="text-center py-24 pb-[27rem]">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-lg font-medium text-gray-900">
        word is not there?
      </h3>
      <p className="mt-1 text-base text-gray-500">
        Get started by adding a new word.
      </p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center px-8 py-3 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => navigate('addWordForm')}
        >
          <PlusIcon className="-ml-1 mr-2 h-6 w-6" aria-hidden="true" />
          New word
        </button>
      </div>
    </div>
  );
};

export default AddWord;
