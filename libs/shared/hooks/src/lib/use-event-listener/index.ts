/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

interface UseEventListener {
  eventName: string;
  handelEventListener: (event: { key: string }) => void;
  element?: typeof window;
}

export const useEventListener = ({
  eventName,
  handelEventListener,
  element = window,
}: UseEventListener) => {
  useEffect(() => {
    const eventListener = (event: any) => handelEventListener(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};
