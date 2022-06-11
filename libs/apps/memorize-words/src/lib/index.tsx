import { NotificationsProvider } from '@k-workspace/shared/components';
import App from './app';
import { WordsProvider } from './context/words';

const MemorizeWords = () => {
  return (
    <NotificationsProvider>
      <WordsProvider>
        <App />
      </WordsProvider>
    </NotificationsProvider>
  );
};

export default MemorizeWords;
