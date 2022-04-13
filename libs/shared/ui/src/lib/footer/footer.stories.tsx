import { Story, Meta } from '@storybook/react';
import { Footer } from './footer';
import footer from '../../data/footer';

export default {
  component: Footer,
  title: 'Footer',
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = footer;
