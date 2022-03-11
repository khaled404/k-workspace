import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TData } from '../types';

interface ITasks {
  data: TData;
  provided: any;
  style: any;
}
const Tasks = React.forwardRef((props: ITasks, ref: any) => {
  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: 2 * 2,
    margin: `0 0  2px 0`,

    // change background colour if dragging
    opacity: isDragging ? 0 : 1,

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <div ref={ref} {...props.provided.droppableProps} style={props.style}>
      {props.data.map((item: TData[0], index: number) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                {item.label}
              </div>
            </div>
          )}
        </Draggable>
      ))}
      {props.provided.placeholder}
      <form className="mt-5 sm:flex sm:items-center">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Save
        </button>
      </form>
    </div>
  );
});

export default Tasks;
