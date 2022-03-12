import { FC } from 'react';
import { classNames } from '@k-workspace/utils';
import { Draggable } from 'react-beautiful-dnd';
import { TData } from '../../types';
interface ITaskBox {
  item: TData[0];
  index: number;
}

const getItemStyle = (draggableStyle: React.CSSProperties | undefined) =>
  ({
    userSelect: 'none',
    padding: 2 * 2,
    margin: `0 0  2px 0`,
    ...draggableStyle,
  } as React.CSSProperties);

const TaskBox: FC<ITaskBox> = ({ item, index }) => {
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
