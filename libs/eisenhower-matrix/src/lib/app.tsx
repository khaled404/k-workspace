import EisenhowerMatrix from './eisenhower-matrix';
import { TasksProvider } from './context/use-tasks';

const App = () => (
  <TasksProvider>
    <EisenhowerMatrix />
  </TasksProvider>
);

export default App;
