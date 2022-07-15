import { render } from '@testing-library/react';

import SmallNavigation from './small-navigation';

describe('SmallNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmallNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
