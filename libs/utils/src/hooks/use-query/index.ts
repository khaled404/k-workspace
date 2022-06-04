/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

export type TQuery<T> = {
  isLoading: boolean;
  isError: boolean;
  status: string;
  errorMessage?: string;
  data?: T;
  refetch: () => void;
};
type TOptions = {
  enabled?: boolean;
  onSuccess?: <T>(data: TQuery<T>['data']) => void | undefined;
};

type TStatus = 'stale' | 'loading' | 'error' | 'done';

const defaultOptions: TOptions = {
  enabled: true,
  onSuccess: undefined,
};

export const useQuery = <T>(
  fetcher: () => Promise<T>,
  options?: TOptions
): TQuery<T> => {
  const ref = useRef<() => Promise<T>>();

  const [status, setStatus] = useState<TStatus>('stale');
  const [data, setData] = useState<T>();
  const [refetchData, setRefetchData] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { enabled, onSuccess } = { ...defaultOptions, ...options };

  ref.current = fetcher;

  useEffect(() => {
    if (enabled) {
      setStatus('loading');
      ref
        .current?.()
        .then((data) => {
          setData(data);
          onSuccess?.(data);
          setStatus('done');
        })
        .catch((error) => {
          setErrorMessage(error);
          setStatus('error');
        });
    }
  }, [enabled, refetchData]);

  const refetch = () => {
    setRefetchData((old) => old + 1);
  };

  return {
    isLoading: status === 'loading',
    isError: status === 'error',
    status,
    errorMessage,
    data,
    refetch,
  };
};
