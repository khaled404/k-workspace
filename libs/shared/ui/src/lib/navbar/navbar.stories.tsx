import { Story, Meta } from '@storybook/react';
import { Navbar } from './navbar';
import navbar from '../../data/navbar';

export default {
  component: Navbar,
  title: 'Navbar',
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = navbar;
