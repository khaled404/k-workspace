import { render } from '@testing-library/react';

import ProjectBox from './project-box';

describe('ProjectBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectBox />);
    expect(baseElement).toBeTruthy();
  });
});
