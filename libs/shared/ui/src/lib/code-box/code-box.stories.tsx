import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CodeBox } from './code-box';

export default {
  component: CodeBox,
  title: 'CodeBox',
} as ComponentMeta<typeof CodeBox>;

const Template: ComponentStory<typeof CodeBox> = (args) => (
  <CodeBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
