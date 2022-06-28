/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ExclamationIcon,
  InformationCircleIcon,
  CheckIcon,
} from '@heroicons/react/outline';
import type { FC, TState } from '@k-workspace/types';
import { IModalProps } from '.';

interface IModal extends IModalProps, FC {
  open: boolean;
  setOpen: TState;
  ref?: any;
}

const ModalContainer = forwardRef(
  ({ open, setOpen, children }: IModal, ref: React.Ref<any>) => {
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={ref as any}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto transition-all">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
);

const Modal = ({
  onAccept,
  onCancel,
  open,
  setOpen,
  type,
  renderCustom,
  description,
  massage,
}: IModal) => {
  const cancelButtonRef = useRef<any>(null);
  const isCustom = type === 'custom';

  const getStatus = () => {
    switch (type) {
      case 'info':
        return {
          icon: InformationCircleIcon,
          color: 'blue',
        };
      case 'success':
        return {
          icon: CheckIcon,
          color: 'green',
        };
      case 'warning':
        return {
          icon: ExclamationIcon,
          color: 'red',
        };
    }
    return null;
  };
  const Icon = getStatus()?.icon;
  const color = getStatus()?.color;

  return (
    <ModalContainer
      setOpen={setOpen}
      open={open}
      onCancel={onCancel}
      ref={cancelButtonRef}
    >
      {isCustom ? (
        renderCustom?.(setOpen)
      ) : (
        <>
          <span className="bg-red-100 text-red-600 bg-green-100 text-green-600 bg-blue-100 text-blue-600 bg-red-600 bg-red-700 ring-red-500 bg-green-600 bg-green-700 ring-green-500 bg-blue-600 bg-blue-700 ring-blue-500" />
          <div className="sm:flex sm:items-start">
            <div
              className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-${color}-100 sm:mx-0 sm:h-10 sm:w-10`}
            >
              {Icon && (
                <Icon
                  className={`h-6 w-6 text-${color}-600`}
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                {massage}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-${color}-600 text-base font-medium text-white hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 sm:ml-3 sm:w-auto sm:text-sm`}
              onClick={() => {
                setOpen(false);
                onAccept?.();
              }}
            >
              Accept
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={() => {
                setOpen(false);
                onCancel?.();
              }}
              ref={cancelButtonRef}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </ModalContainer>
  );
};

export default Modal;
