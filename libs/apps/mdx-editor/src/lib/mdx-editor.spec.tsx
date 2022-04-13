import { render } from '@testing-library/react';

import MdxEditor from './mdx-editor';

describe('MdxEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MdxEditor />);
    expect(baseElement).toBeTruthy();
  });
});
