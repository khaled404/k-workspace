import App from './app';
import { TasksProvider } from './context/use-tasks';

const EisenhowerMatrix = () => (
  <TasksProvider>
    <App />
  </TasksProvider>
);

export default EisenhowerMatrix;
