import { classNames } from '@k-workspace/utils';
import { forwardRef, useState } from 'react';
import { DroppableProvided } from 'react-beautiful-dnd';
import { TRef, TData } from '../../types';
import TaskBox from './TaskBox';

interface ITasks {
  data: TData;
  provided: DroppableProvided;
  isDraggingOver: boolean;
  handleChange: (task: string) => void;
}
const TasksList = forwardRef<TRef, ITasks>((props, ref) => {
  const { data, handleChange, isDraggingOver, provided } = props;
  const [task, setTask] = useState('');

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleChange(task);
    setTask('');
  };

  return (
    <div
      className={classNames(
        isDraggingOver ? 'opacity-[.7]' : '',
        'flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white absolute left-0 top-0 bottom-0 h-[100vh] w-1/5'
      )}
    >
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-hidden">
        <div className="pb-5 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900 px-4">
            To-Do List
          </h3>
        </div>

        <ul
          ref={ref}
          {...provided.droppableProps}
          className="mt-1 flex-1 px-4 bg-white space-y-1 overflow-y-auto"
        >
          {data.map((item: TData[0], index: number) => (
            <TaskBox {...{ item, index }} />
          ))}
          {provided.placeholder}
        </ul>
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-start space-x-4">
          <div className="min-w-full flex-1">
            <form onSubmit={onSubmit}>
              <div className="border-b border-gray-200 focus-within:border-indigo-600">
                <label htmlFor="task" className="sr-only">
                  Add your Task
                </label>
                <input
                  name="task"
                  id="task"
                  className="block w-full border-0 border-b border-transparent p-0 pb-2 resize-none  outline-none sm:text-sm"
                  placeholder="Add your Task..."
                  value={task}
                  onChange={(e) => {
                    setTask(e.target.value);
                  }}
                />
              </div>
              <div className="pt-2 flex justify-between">
                <div className="flex items-center space-x-5"></div>
                <div className="flex-shrink-0">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TasksList;
