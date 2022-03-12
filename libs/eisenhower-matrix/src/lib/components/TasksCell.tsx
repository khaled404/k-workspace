import { classNames } from '@k-workspace/utils';
import { forwardRef } from 'react';
import { DroppableProvided } from 'react-beautiful-dnd';
import { TTasks, TRef } from '../../types';
import TaskBox from './TaskBox';

interface ITasksCell {
  data: TTasks;
  provided: DroppableProvided;
  isDraggingOver: boolean;
  index: number;
}
const TasksCell = forwardRef<TRef, ITasksCell>((props, ref) => {
  const { data, index, isDraggingOver, provided } = props;

  const titles: any = {
    1: 'Urgent (Important)',
    2: 'Urgent (Not important)',
    3: 'Not Urgent (Important)',
    4: 'Not Urgent (Not Important)',
  };
  return (
    <div
      className={classNames(
        isDraggingOver ? 'opacity-[.7]' : '',
        index % 2 === 0 ? ' border-l border-r border-t' : 'border-l border-t',
        index === 3 || index === 4 ? 'border-b' : '',
        'flex-1 flex flex-col min-h-0  border-gray-200 bg-white bottom-0 h-full w-full'
      )}
    >
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-hidden ">
        <div className="pb-5 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900 px-4">
            {titles[index]}
          </h3>
        </div>

        <ul
          className="mt-1 flex-1 px-4 bg-white space-y-1 overflow-y-auto"
          ref={ref}
          {...provided.droppableProps}
        >
          {data.map((item: TTasks[0], taskIndex: number) => (
            <TaskBox
              {...{ item, index: taskIndex, rowIndex: index, key: item.id }}
            />
          ))}
          {provided.placeholder}
        </ul>
      </div>
    </div>
  );
});

export default TasksCell;
