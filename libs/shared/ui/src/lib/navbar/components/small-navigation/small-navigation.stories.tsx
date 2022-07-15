import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SmallNavigation } from './small-navigation';

export default {
  component: SmallNavigation,
  title: 'SmallNavigation',
} as ComponentMeta<typeof SmallNavigation>;

const Template: ComponentStory<typeof SmallNavigation> = (args) => (
  <SmallNavigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
