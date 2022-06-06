type TState<T = unknown> = Dispatch<SetStateAction<T | undefined>>;
type TInput = React.ChangeEvent<HTMLInputElement>;
type TSubmit = React.FormEvent<HTMLFormElement>;

export { TState, TInput, TSubmit };
