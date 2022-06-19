/* eslint-disable react-hooks/exhaustive-deps */
import { TState } from '@k-workspace/types';
import { createContext, FC, useContext, useMemo, useState } from 'react';
import Modal from './modal';

export type TStatus = 'success' | 'warning' | 'info' | 'custom';

export interface IModalProps {
  massage?: string;
  type?: TStatus;
  description?: string;
  onAccept?: () => void;
  onCancel?: () => void;
  renderCustom?: (setOpen: TState) => JSX.Element;
}

type ModalContextType = {
  newModal: (props: IModalProps) => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider: FC = ({ children }): JSX.Element | null => {
  const [open, setOpen] = useState(false);
  const [modalProps, setModalProps] = useState<IModalProps>({
    type: 'success',
  });

  const newModal = (props: IModalProps) => {
    if (props.type !== 'custom' && !props.description && props.massage)
      throw Error('massage and description is required');
    if (props.type === 'custom' && !props.renderCustom)
      throw Error('renderCustom is required');
    setOpen(true);
    setModalProps(props);
  };
  const value = useMemo(
    () => ({
      newModal,
    }),
    [open]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal {...{ open, setOpen, ...modalProps }} />
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) throw Error('useModal should be used within <ModalProvider />');
  return context;
};

export { useModal, ModalProvider };
