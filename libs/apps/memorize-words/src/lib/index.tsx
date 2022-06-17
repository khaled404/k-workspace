import {
  ModalProvider,
  NotificationsProvider,
} from '@k-workspace/shared/components';
import App from './app';
import { WordsProvider } from './context/words';

const MemorizeWords = () => {
  return (
    <NotificationsProvider>
      <ModalProvider>
        <WordsProvider>
          <App />
        </WordsProvider>
      </ModalProvider>
    </NotificationsProvider>
  );
};

export default MemorizeWords;
