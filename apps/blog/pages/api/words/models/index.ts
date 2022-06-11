import { Schema, model, models } from 'mongoose';

const SentencesScheme = new Schema({
  sentence: String,
  translations: String,
});

const WordsScheme = new Schema({
  word: String,
  image: String,
  sentences: [SentencesScheme],
});

const words =
  models && models.words ? models.words : model('words', WordsScheme);
export default words;
