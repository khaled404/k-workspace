import { render } from '@testing-library/react';

import BlogNavigation from './blog-navigation';

describe('BlogNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
