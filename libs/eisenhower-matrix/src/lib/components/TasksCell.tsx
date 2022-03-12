import { classNames } from '@k-workspace/utils';
import { forwardRef } from 'react';
import { TData } from '../../types';
import TaskBox from './TaskBox';

interface ITasks {
  data: TData;
  provided: any;
  isDraggingOver: any;
  index: number;
}
const TasksCell = forwardRef((props: ITasks, ref: any) => {
  const titles: any = {
    1: 'Urgent',
    2: 'Important',
    3: 'Not urgent',
    4: 'Not Important',
  };
  return (
    <div
      className={classNames(
        props.isDraggingOver ? 'opacity-[.7]' : '',
        props.index % 2 === 0
          ? ' border-l border-r border-t'
          : 'border-l border-t',
        props.index === 3 || props.index === 4 ? 'border-b' : '',
        'flex-1 flex flex-col min-h-0  border-gray-200 bg-white bottom-0 h-full w-full'
      )}
    >
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-hidden ">
        <div className="pb-5 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900 px-4">
            {titles[props.index]}
          </h3>
        </div>

        <ul
          className="mt-1 flex-1 px-4 bg-white space-y-1 overflow-y-auto"
          ref={ref}
          {...props.provided.droppableProps}
        >
          {props.data.map((item: TData[0], index: number) => (
            <TaskBox {...{ item, index }} />
          ))}
          {props.provided.placeholder}
        </ul>
      </div>
    </div>
  );
});

export default TasksCell;
