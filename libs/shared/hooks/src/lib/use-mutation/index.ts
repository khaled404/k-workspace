/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import type { TState } from '@k-workspace/types';
import { useState } from 'react';

export type TMutation<T> = {
  isLoading: boolean;
  isError: boolean;
  status: string | null;
  errorMessage?: string;
  data?: T;
  setData: TState<T>;
  mutate: () => void;
};
type TOptions = {
  onSuccess?: <T>(data: TMutation<T>['data']) => void | undefined;
  onError?: (arg?: any) => void | undefined;
};

type TStatus = 'loading' | 'error' | 'done' | null;

const defaultOptions: TOptions = {
  onSuccess: undefined,
  onError: undefined,
};

export const useMutation = <T>(
  action: (body?: any) => Promise<T>,
  options?: TOptions
): TMutation<T> => {
  const [status, setStatus] = useState<TStatus>(null);
  const [data, setData] = useState<T>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { onSuccess, onError } = { ...defaultOptions, ...options };

  const mutate = (body?: any) => {
    setStatus('loading');
    action?.(body)
      .then((data: any) => {
        if (data?.status !== 200) {
          onError?.(data);
          setStatus('error');
          setErrorMessage(data?.error);
          return;
        }
        setData(data?.data);
        onSuccess?.(data?.data);
        setStatus('done');
      })
      .catch((error) => {
        setErrorMessage(error);
        setStatus('error');
        onError?.(error);
      });
  };

  return {
    isLoading: status === 'loading',
    isError: status === 'error',
    status,
    errorMessage,
    data,
    setData,
    mutate,
  };
};
