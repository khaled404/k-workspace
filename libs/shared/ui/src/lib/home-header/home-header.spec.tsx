import { render } from '@testing-library/react';

import HomeHeader from './home-header';

describe('HomeHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeHeader />);
    expect(baseElement).toBeTruthy();
  });
});
