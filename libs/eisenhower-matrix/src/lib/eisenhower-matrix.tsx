import {
  DragDropContext,
  Droppable,
  DropResult,
  ResponderProvided,
  resetServerContext,
} from 'react-beautiful-dnd';
import { useState } from 'react';
import { TData } from '../types';
import TasksList from './components/TasksList';
import TasksCell from './components/TasksCell';
import { getItem, saveItem } from '@k-workspace/utils';
import { INIT_DATA, TASKS_LIST } from './constant';

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
  droppableSource: DropResult['source'],
  droppableDestination: DropResult['source']
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
  const [data, setData] = useState<TData[]>(getItem(TASKS_LIST, INIT_DATA));

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
      saveItem(TASKS_LIST, newState);
    } else {
      const result = move(data[sInd], data[dInd], source, destination);
      const newState = [...data];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setData(newState);

      saveItem(TASKS_LIST, newState);
    }
  };

  const handleChange = (task: string) => {
    const newState = data;
    const id = `${task.slice(0, 3)}_${new Date().getTime()}`;
    newState[0].push({ task, id });
    setData(newState);
    saveItem(TASKS_LIST, newState);
  };

  return (
    <div className="relative p-5 pl-[22%]  h-[100vh] grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-2">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {data.map((items, index) => (
          <Droppable key={index} droppableId={`${index}`}>
            {(provided, snapshot) =>
              index === 0 ? (
                <TasksList
                  ref={provided.innerRef}
                  provided={provided}
                  isDraggingOver={snapshot.isDraggingOver}
                  handleChange={handleChange}
                  data={items}
                />
              ) : (
                <TasksCell
                  ref={provided.innerRef}
                  provided={provided}
                  isDraggingOver={snapshot.isDraggingOver}
                  data={items}
                  index={index}
                />
              )
            }
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default EisenhowerMatrix;
