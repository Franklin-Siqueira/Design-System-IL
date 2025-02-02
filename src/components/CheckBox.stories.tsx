// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Meta, StoryObj } from '@storybook/react'
import { CheckBox, CheckBoxProps } from './CheckBox'
import { Text } from './Text'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          { Story() }
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ],
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}