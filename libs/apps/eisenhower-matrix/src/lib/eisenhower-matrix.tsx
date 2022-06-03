import App from './app';
import { TasksProvider } from './context/tasks';

const EisenhowerMatrix = () => (
  <TasksProvider>
    <App />
  </TasksProvider>
);

export default EisenhowerMatrix;
