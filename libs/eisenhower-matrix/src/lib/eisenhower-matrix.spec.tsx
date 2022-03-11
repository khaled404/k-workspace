import { render } from '@testing-library/react';

import EisenhowerMatrix from './eisenhower-matrix';

describe('EisenhowerMatrix', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EisenhowerMatrix />);
    expect(baseElement).toBeTruthy();
  });
});
