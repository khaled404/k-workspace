import { render } from '@testing-library/react';

import LoginAndRegister from './login-and-register';

describe('LoginAndRegister', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginAndRegister />);
    expect(baseElement).toBeTruthy();
  });
});
