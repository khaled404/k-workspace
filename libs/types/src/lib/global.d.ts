type TState = <T>(oldState?: T | unknown) => T | unknown;
type TInput = React.ChangeEvent<HTMLInputElement>;
type TSubmit = React.FormEvent<HTMLFormElement>;

export { TState, TInput, TSubmit };
