import { render } from '@testing-library/react';

import ToggleTheme from './toggle-theme';

describe('ToggleTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToggleTheme />);
    expect(baseElement).toBeTruthy();
  });
});
