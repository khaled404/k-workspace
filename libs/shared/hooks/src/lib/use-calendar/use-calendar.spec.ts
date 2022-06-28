import { act, renderHook } from '@testing-library/react-hooks';
import useCalendar from './use-calendar';

describe('useCalendar', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCalendar());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
