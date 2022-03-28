import { Story, Meta } from '@storybook/react';
import { ProjectBox, ProjectBoxProps } from './project-box';

export default {
  component: ProjectBox,
  title: 'ProjectBox',
} as Meta;

const Template: Story<ProjectBoxProps> = (args) => <ProjectBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  projects: [
    {
      id: 1,
      version: '1.2.0',
      developer: 'khaled mahmoud',
      name: 'eisenhower matrix',
      description:
        'The Eisenhower Matrix is a task management tool that helps you organize and prioritize tasks by urgency and importance. Using the tool, you’ll divide your tasks into four boxes based on the tasks you’ll do first, the tasks you’ll schedule for later, the tasks you’ll delegate, and the tasks you’ll delete. In this piece, we’ll explain how to set up an Eisenhower Matrix and provide tips for task prioritization',
      imagePath:
        'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
      published: false,
      tags: ['application', 'tasks', 'time management', 'tools'],
    },
  ],
};
