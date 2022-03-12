import { FC } from 'react';
import { classNames } from '@k-workspace/utils';
import { Draggable } from 'react-beautiful-dnd';
import { TData } from '../../types';

const TaskBox: FC<{ item: TData[0]; index: number }> = ({ item, index }) => {
  const getItemStyle = (draggableStyle: any) => ({
    userSelect: 'none',
    padding: 2 * 2,
    margin: `0 0  2px 0`,
    ...draggableStyle,
  });

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(provided.draggableProps.style)}
          className={classNames(
            snapshot.isDragging ? '' : 'border-b',
            'py-5 cursor-pointer  pb-2'
          )}
        >
          <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
              {item.task}
            </p>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default TaskBox;
