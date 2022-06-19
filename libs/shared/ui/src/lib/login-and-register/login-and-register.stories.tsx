import { Story, Meta } from '@storybook/react';
import { LoginAndRegister, LoginAndRegisterProps } from './login-and-register';

export default {
  component: LoginAndRegister,
  title: 'LoginAndRegister',
} as Meta;

const Template: Story<LoginAndRegisterProps> = (args) => (
  <LoginAndRegister {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
