/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, FC, useContext, useMemo, useState } from 'react';
import { Notifications } from './notifications';

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

const NotificationsProvider: FC = ({ children }): JSX.Element | null => {
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
  const error = (massage: string, description?: string) => {
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
    throw Error('useWords should be used within <NotificationsProvider />');
  return context;
};

export { useNotifications, NotificationsProvider };
