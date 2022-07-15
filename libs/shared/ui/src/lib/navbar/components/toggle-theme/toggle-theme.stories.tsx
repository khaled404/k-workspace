import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleTheme } from './toggle-theme';

export default {
  component: ToggleTheme,
  title: 'ToggleTheme',
} as ComponentMeta<typeof ToggleTheme>;

const Template: ComponentStory<typeof ToggleTheme> = (args) => (
  <ToggleTheme {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
