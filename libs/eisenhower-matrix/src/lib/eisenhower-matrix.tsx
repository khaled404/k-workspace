import {
  DragDropContext,
  Droppable,
  DropResult,
  ResponderProvided,
  resetServerContext,
} from 'react-beautiful-dnd';
import { useState } from 'react';
import { TData } from '../types';
import Tasks from './components/Tasks';

/* eslint-disable-next-line */
export interface EisenhowerMatrixProps {}

const reorder = (list: TData, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  source: TData,
  destination: TData,
  droppableSource: any,
  droppableDestination: any
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export function EisenhowerMatrix(props: EisenhowerMatrixProps) {
  resetServerContext();

  const [data, setData] = useState<TData[]>([
    [{ id: '1', label: 'khaled 1' }],
    [
      { id: '2', label: 'khaled 2' },
      { id: '0', label: 'khaled 2' },
    ],
    [{ id: '3', label: 'khaled 3' }],
    [{ id: '4', label: 'khaled 4' }],
    [{ id: '5', label: 'khaled 5' }],
  ]);

  const handleOnDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items: TData = reorder(data[sInd], source.index, destination.index);
      const newState = [...data];
      newState[sInd] = items;
      setData(newState);
    } else {
      const result: any = move(data[sInd], data[dInd], source, destination);
      const newState = [...data];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setData(newState);
    }
  };

  const getListStyle = (isDraggingOver: boolean) => ({});

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {data.map((items, index) => (
          <Droppable key={index} droppableId={`${index}`}>
            {(provided, snapshot) =>
              index === 0 ? (
                <Tasks
                  ref={provided.innerRef}
                  provided={provided}
                  style={getListStyle(snapshot.isDraggingOver)}
                  data={items}
                />
              ) : (
                <div ref={provided.innerRef}></div>
              )
            }
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default EisenhowerMatrix;
