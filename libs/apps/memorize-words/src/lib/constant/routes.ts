const APP_PATH = '/words/';

export default {
  GET_WORDS: APP_PATH + 'get-words',
  ADD_WORD: APP_PATH + 'add-word',
  DELETE_WORD: APP_PATH + 'delete-word',
} as const;
