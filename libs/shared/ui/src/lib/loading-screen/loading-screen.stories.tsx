import { Story, Meta } from '@storybook/react';
import { LoadingScreen, LoadingScreenProps } from './loading-screen';

export default {
  component: LoadingScreen,
  title: 'LoadingScreen',
} as Meta;

const Template: Story<LoadingScreenProps> = (args) => (
  <LoadingScreen {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
