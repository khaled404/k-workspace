import { render } from '@testing-library/react';

import MainSearch from './main-search';

describe('MainSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainSearch />);
    expect(baseElement).toBeTruthy();
  });
});
