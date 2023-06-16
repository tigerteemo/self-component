import React from 'react';
// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text'},
    big: { control: 'boolean'}
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Big: Story = {
  render: (args) => <Button {...args} />,
};

export const Small: Story = {
  args: {
    label: "small button",
    big: false,
  },
}