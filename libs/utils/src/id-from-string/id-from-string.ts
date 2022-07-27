import { TIdFromString } from './id-from-string-types';

const idFromString = (text: string): TIdFromString => {
  return typeof text === 'string'
    ? text.toLocaleLowerCase().split(' ').join('-')
    : '';
};

export { idFromString };
