import {
  DragDropContext,
  Droppable,
  DropResult,
  ResponderProvided,
  resetServerContext,
} from 'react-beautiful-dnd';
import { TTasks } from '../types';
import TasksList from './components/TasksList';
import TasksCell from './components/TasksCell';
import { useTasks } from './context/use-tasks';

/* eslint-disable-next-line */
export interface EisenhowerMatrixProps {}

const reorder = (list: TTasks, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  source: TTasks,
  destination: TTasks,
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
  const { tasksOnChange, tasks } = useTasks();

  const handleOnDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items: TTasks = reorder(
        tasks[sInd],
        source.index,
        destination.index
      );
      const newState = [...tasks];
      newState[sInd] = items;
      tasksOnChange(newState);
    } else {
      const result = move(tasks[sInd], tasks[dInd], source, destination);
      const newState = [...tasks];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      tasksOnChange(newState);
    }
  };

  return (
    <div className="relative p-5 pl-[22%]  h-[100vh] grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-2">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {tasks.map((items, index) => (
          <Droppable key={index} droppableId={`${index}`}>
            {(provided, snapshot) =>
              index === 0 ? (
                <TasksList
                  ref={provided.innerRef}
                  provided={provided}
                  isDraggingOver={snapshot.isDraggingOver}
                  data={items}
                  index={index}
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
