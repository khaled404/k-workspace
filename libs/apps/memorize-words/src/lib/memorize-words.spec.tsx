import { render } from '@testing-library/react';

import MemorizeWords from './index';

describe('MemorizeWords', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MemorizeWords />);
    expect(baseElement).toBeTruthy();
  });
});
