import { render } from '@testing-library/react';

import Headers from './headers';

describe('Headers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Headers />);
    expect(baseElement).toBeTruthy();
  });
});
