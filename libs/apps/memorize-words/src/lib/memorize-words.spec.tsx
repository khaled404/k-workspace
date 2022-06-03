import { render } from '@testing-library/react';

import MemorizeWords from './memorize-words';

describe('MemorizeWords', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MemorizeWords />);
    expect(baseElement).toBeTruthy();
  });
});
