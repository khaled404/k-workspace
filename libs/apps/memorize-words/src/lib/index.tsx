import App from './app';
import { WordsProvider } from './context/words';

const MemorizeWords = () => {
  return (
    <WordsProvider>
      <App />
    </WordsProvider>
  );
};

export default MemorizeWords;
