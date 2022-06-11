export interface IWordsData {
  word: string;
  id?: number;
  image: string;
  sentences: TSentence[];
}

type TSentence = {
  sentence: string;
  id?: number;
  translations: string;
};

export { TSentence, IWordsData };
