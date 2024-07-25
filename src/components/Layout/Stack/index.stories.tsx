import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '.'
import { Box } from '..'

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

// Stories
export const Default: Story = {
  render: (args) => (
    <Stack className="gap-4 p-4 bg-gray-300" {...args}>
      <Box className="w-[100px] h-[100px] bg-purple-400" />
      <Box className="w-[100px] h-[100px] bg-orange-400" />
      <Box className="w-[100px] h-[100px] bg-emerald-400" />
    </Stack>
  ),
}
