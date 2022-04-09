import { Story, Meta } from '@storybook/react';
import { NavbarProps, Navbar } from './navbar';

export default {
  component: Navbar,
  title: 'Navbar',
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hi, Iʼm khaled!',
  description: 'I’m a frontend developer',
  links: [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/' },
    { name: 'Projects', href: '/' },
    { name: 'About', href: '/' },
  ],
};
