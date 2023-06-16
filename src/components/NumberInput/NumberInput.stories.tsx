import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, FC } from 'react';
import NumberInput from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  tags: ['autodocs'],
}

const NumberInputWithHook: FC = () => {
  const [value, setValue] = useState(0);

  return <NumberInput value={value} onChange={(num: number) => setValue(num)} />
}

export default meta; 

type Story = StoryObj<typeof NumberInput>;

export const Primary: Story = {
  render: () => <NumberInputWithHook />
}