import { render } from '@testing-library/react';

import Footer from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer social={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
