type TState<T = unknown> = Dispatch<SetStateAction<T | undefined>>;
type TInput = React.ChangeEvent<HTMLInputElement>;
type TSubmit = React.FormEvent<HTMLFormElement>;
type TBody = { [key: string]: unknown };

export { TState, TInput, TSubmit, TBody };
