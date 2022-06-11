import { LoadingScreen } from '@k-workspace/shared/ui';
import AddWord from './components/AddWord';
import Search from './components/Search';
import WordDetails from './components/WordDetails';
import { useQuery } from '@k-workspace/shared/hooks';
import { getAllWords } from './requests';
import { useWords } from './context/words';
import { SwitchTransition } from '@k-workspace/shared/components';
import AddWordForm from './components/AddWordForm';

const App = () => {
  const { setWords, currentPage } = useWords();

  const { isLoading } = useQuery(getAllWords, {
    onSuccess: (data) => setWords(data),
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Search />
      <SwitchTransition name="addWord" currentPage={currentPage}>
        <AddWord />
      </SwitchTransition>
      <SwitchTransition name="addWordForm" currentPage={currentPage}>
        <AddWordForm />
      </SwitchTransition>
      <SwitchTransition name="wordDetails" currentPage={currentPage}>
        <WordDetails />
      </SwitchTransition>
    </>
  );
};

export default App;
