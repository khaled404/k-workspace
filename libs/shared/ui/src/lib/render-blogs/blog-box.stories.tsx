import { Story, Meta } from '@storybook/react';
import { BlogBox, BlogBoxProps } from './blog-box';

export default {
  component: BlogBox,
  title: 'BlogBox',
} as Meta;

const Template: Story<BlogBoxProps> = (args) => <BlogBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
