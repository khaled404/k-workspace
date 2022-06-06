export interface IWordsData {
  word: string;
  _id: number;
  image: string;
  sentences: TSentence[];
}

type TSentence = {
  sentence: string;
  _id: number;
  translations: string;
};

export { TSentence, IWordsData };
