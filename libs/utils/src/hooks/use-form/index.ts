/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TInput, TSubmit } from '@k-workspace/types';
import { useState, useCallback } from 'react';

type TValue = { [key: string]: any };

export interface IUseForm<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
}

export const useForm = <T = TValue>({
  initialValues,
  onSubmit,
}: IUseForm<T>) => {
  const [values, setValues] = useState<typeof initialValues>(initialValues);

  const handelChange = useCallback(({ target }: TInput) => {
    const { name, value } = target;
    setValues((old) => ({ ...old, [name]: value }));
  }, []);

  const handelChangeArray = useCallback(
    ({ target }: TInput, formArrayKey: string, index: number) => {
      const { name, value } = target;

      const changeArrayValue = (item: any, i: number) =>
        i === index ? { ...item, [name]: value } : item;

      setValues((old: any) => ({
        ...old,
        [formArrayKey]: old[formArrayKey].map(changeArrayValue),
      }));
    },
    []
  );

  const addFieldArray = (formArrayKey: string, values: TValue) => {
    setValues((old: any) => ({
      ...old,
      [formArrayKey]: [...old[formArrayKey], values],
    }));
  };

  const removeFieldArray = (formArrayKey: string, index: number) => {
    const filterArray = (_: any, i: number) => i !== index;
    setValues((old: any) => ({
      ...old,
      [formArrayKey]: old[formArrayKey].filter(filterArray),
    }));
  };

  const handelSubmit = (event: TSubmit) => {
    event.preventDefault();
    onSubmit(values);
  };

  return {
    values,
    handelChange,
    handelChangeArray,
    handelSubmit,
    addFieldArray,
    removeFieldArray,
  };
};
