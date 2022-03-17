import { FC, Fragment, useState } from 'react';
import { classNames } from '@k-workspace/utils';
import { Draggable } from 'react-beautiful-dnd';
import { TTasks } from '../../types';
import useSound from 'use-sound';
import { Menu, Transition } from '@headlessui/react';
import {
  TrashIcon,
  DotsVerticalIcon,
  PencilIcon,
} from '@heroicons/react/solid';
import { useTasks } from '../context/use-tasks';

interface ITaskBox {
  item: TTasks[0];
  index: number;
  rowIndex: number;
}

const getItemStyle = (draggableStyle: React.CSSProperties | undefined) =>
  ({
    userSelect: 'none',
    padding: 2 * 2,
    margin: `0 0  2px 0`,
    ...draggableStyle,
  } as React.CSSProperties);

const TaskBox: FC<ITaskBox> = ({ item, rowIndex, index }) => {
  const { editTask, removeTask } = useTasks();
  const [isEditMode, setIsEditMode] = useState(false);
  const [task, setTask] = useState(item.task);
  const [play] = useSound('/audio/bell.wav');
  const menuActions = [
    {
      icon: PencilIcon,
      title: 'Edit',
      action: () => {
        setIsEditMode(true);
      },
    },
    {
      icon: TrashIcon,
      title: 'Remove',
      action: () => {
        removeTask(item.id, rowIndex);
      },
    },
  ];

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (task) {
      editTask(item.id, rowIndex, 'task', task);
      setIsEditMode(false);
    }
  };

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
            'py-5 cursor-pointer pb-2'
          )}
        >
          <div className="relative flex items-start py-4">
            {!isEditMode && (
              <div className="flex items-center h-5 mr-2">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => {
                    play();
                    editTask(item.id, rowIndex, 'checked', e.target.checked);
                  }}
                  className="focus:ring-indigo-500 h-[17px] w-[17px] text-indigo-600 border-gray-300 rounded"
                />
              </div>
            )}
            {!isEditMode && (
              <p className="text-sm text-gray-600 line-clamp-2">{item.task}</p>
            )}
            {isEditMode ? (
              <form
                onSubmit={onSubmit}
                className="sm:flex sm:items-center w-full"
              >
                <div className="w-full">
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="  w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save
                </button>
              </form>
            ) : (
              <Menu
                as="div"
                className={classNames(
                  snapshot.isDragging ? 'opacity-0' : '',
                  'inline-block text-left ml-auto transition-all'
                )}
              >
                <div>
                  <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                    <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-44 z-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {menuActions.map((menuItem, i) => (
                        <Menu.Item key={i}>
                          {({ active }) => (
                            <button
                              onClick={menuItem.action}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'flex px-4 py-2 text-sm'
                              )}
                            >
                              <menuItem.icon
                                className="mr-3 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>{menuItem.title}</span>
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default TaskBox;
