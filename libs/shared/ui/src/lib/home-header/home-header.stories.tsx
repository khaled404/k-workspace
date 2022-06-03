import { Story, Meta } from '@storybook/react';
import { HomeHeader } from './home-header';

export default {
  component: HomeHeader,
  title: 'HomeHeader',
} as Meta;

const Template: Story = (args) => <HomeHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
