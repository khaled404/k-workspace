import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Headers } from './headers';

export default {
  component: Headers,
  title: 'Headers',
} as ComponentMeta<typeof Headers>;

const Template: ComponentStory<typeof Headers> = (args) => (
  <Headers {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
