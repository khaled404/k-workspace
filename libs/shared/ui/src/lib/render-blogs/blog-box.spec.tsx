import { render } from '@testing-library/react';

import BlogBox from './blog-box';

describe('BlogBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogBox />);
    expect(baseElement).toBeTruthy();
  });
});
