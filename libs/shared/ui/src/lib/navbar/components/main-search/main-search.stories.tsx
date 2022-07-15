import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainSearch } from './main-search';

export default {
  component: MainSearch,
  title: 'MainSearch',
} as ComponentMeta<typeof MainSearch>;

const Template: ComponentStory<typeof MainSearch> = (args) => (
  <MainSearch {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
