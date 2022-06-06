import { act, renderHook } from '@testing-library/react-hooks';
import useForm from './use-form';

describe('useForm', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useForm());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
