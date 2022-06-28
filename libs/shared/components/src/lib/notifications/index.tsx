/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useMemo, useState } from 'react';
import Notifications from './notifications';
import { convertArrayToText } from '@k-workspace/utils';
import { FC, TProvider } from '@k-workspace/types';

type NotificationsContextType = {
  success: (massage: string, description?: string) => void;
  error: (massage: string, description?: string) => void;
};

type TStatus = 'success' | 'error';

export interface INotificationProps {
  massage?: string;
  type?: TStatus;
  description?: string;
}

const NotificationsContext = createContext<NotificationsContextType | null>(
  null
);

const NotificationsProvider = ({ children }: FC): TProvider => {
  const [notificationProps, setNotificationProps] =
    useState<INotificationProps | null>(null);
  const [show, setShow] = useState(false);

  const showNotification = (
    massage?: string,
    description?: string,
    type?: TStatus
  ) => {
    setNotificationProps({ massage, description, type });
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };
  const success = (massage: string, description?: string) => {
    showNotification(massage, description, 'success');
  };
  const error = (errors: any, description?: string) => {
    const massage = Array.isArray(errors) ? convertArrayToText(errors) : errors;
    showNotification(massage, description, 'error');
  };
  const value = useMemo(() => ({ success, error }), []);

  return (
    <NotificationsContext.Provider value={value}>
      {children}
      <Notifications {...{ show, setShow, ...notificationProps }} />
    </NotificationsContext.Provider>
  );
};

const useNotifications = (): NotificationsContextType => {
  const context = useContext(NotificationsContext);
  if (!context)
    throw Error(
      'useNotifications should be used within <NotificationsProvider />'
    );
  return context;
};

export { useNotifications, NotificationsProvider };
