import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogNavigation } from './blog-navigation';

export default {
  component: BlogNavigation,
  title: 'BlogNavigation',
} as ComponentMeta<typeof BlogNavigation>;

const Template: ComponentStory<typeof BlogNavigation> = (args) => (
  <BlogNavigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
