import { render } from '@testing-library/react';

import CodeBox from './code-box';

describe('CodeBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CodeBox />);
    expect(baseElement).toBeTruthy();
  });
});
