/* eslint-disable react-hooks/exhaustive-deps */
import { getItem, saveItem, LOCAL_STORAGE_KEYS } from '@k-workspace/utils';
import { createContext, useContext, useMemo, useState } from 'react';
import { TTasks } from './../types';
import { INIT_DATA } from '../constant';
import { FC, TProvider } from '@k-workspace/types';

type TasksContextType = {
  tasks: TTasks[];
  tasksOnChange: (newTasks: TTasks[]) => void;
  addNewTask: (task: string) => void;
  editTask: (
    id: string,
    index: number,
    key: string,
    value: string | boolean
  ) => void;
  removeTask: (id: string, index: number) => void;
};

const TasksContext = createContext<TasksContextType | null>(null);

const TasksProvider = ({ children }: FC): TProvider => {
  const [tasks, setTasks] = useState<TTasks[]>(
    getItem(LOCAL_STORAGE_KEYS.TASKS_LIST, INIT_DATA)
  );

  const tasksOnChange = (newTasks: TTasks[]) => {
    setTasks([...newTasks]);
    saveItem(LOCAL_STORAGE_KEYS.TASKS_LIST, newTasks);
  };

  const addNewTask = (task: string) => {
    const newTasks = tasks;
    const id = `${task.slice(0, 3)}_${new Date().getTime()}`;
    newTasks[0].push({ task, id, checked: false });
    tasksOnChange(newTasks);
  };

  const editTask = (
    id: string,
    index: number,
    key: string,
    value: string | boolean
  ) => {
    const newTasks = tasks;
    const changedTask = newTasks[index].map((item) =>
      item.id === id ? { ...item, [key]: value } : item
    );
    newTasks[index] = changedTask;
    tasksOnChange(newTasks);
  };

  const removeTask = (id: string, index: number) => {
    const newTasks = tasks;
    const changedTask = newTasks[index].filter((item) => item.id !== id);
    newTasks[index] = changedTask;
    tasksOnChange(newTasks);
  };

  const value = useMemo(
    () => ({ tasks, tasksOnChange, addNewTask, editTask, removeTask }),
    [tasks]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

const useTasks = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (!context) throw Error('useTasks should be used within <TasksProvider />');
  return context;
};

export { useTasks, TasksProvider };
