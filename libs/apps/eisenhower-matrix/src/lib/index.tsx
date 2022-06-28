import { TasksProvider } from './context/tasks';
import Calendar from './views/calendar';

const EisenhowerTasksApp = () => (
  <TasksProvider>
    <Calendar />
  </TasksProvider>
);

export default EisenhowerTasksApp;
