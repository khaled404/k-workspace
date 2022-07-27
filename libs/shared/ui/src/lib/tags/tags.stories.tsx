import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tags } from './tags';

export default {
  component: Tags,
  title: 'Tags',
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
