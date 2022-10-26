// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Lorem ipsum Button...',
    size: 'md',
  },
  argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

// export const CustomComponent: StoryObj<ButtonProps> = {
//   args: {
//     asChild: true,
//     children: (
//       <p>Testing...</p>
//     )
//   },
//   argTypes: {
//     children: {
//       table: {
//         disable: true,
//       }
//     },
//     asChild: {
//       table: {
//         disable: true,
//       }
//     }
//   }
// }