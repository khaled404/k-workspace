/* eslint-disable @typescript-eslint/ban-types */
type TState<T = unknown> = Dispatch<SetStateAction<T | undefined>>;
type TInput = React.ChangeEvent<HTMLInputElement>;
type TSubmit = React.FormEvent<HTMLFormElement>;
type TBody = { [key: string]: unknown };
type TProvider = JSX.Element | null;

interface FC {
  children?: React.ReactNode;
}

export { TState, TInput, TSubmit, TBody, FC, TProvider };
