import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './typography';

export default {
  component: Typography,
  title: 'Typography',
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
