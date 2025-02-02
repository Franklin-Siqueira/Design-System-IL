// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="TextInput placeholder..." />
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="TextInput placeholder (without TextInput.Icon)..." />
    )
  },
  // argTypes: {
  //   children: {
  //     table: {
  //       disable: true,
  //     }
  //   },
  //   asChild: {
  //     table: {
  //       disable: true,
  //     }
  //   }
  // }
}