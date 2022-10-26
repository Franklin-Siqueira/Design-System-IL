// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { ReactNode } from 'react';
// import { Slot } from '@radix-ui/react-slot'
import * as CheckBoxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'
import { clsx } from 'clsx'

export interface CheckBoxProps extends CheckBoxPrimitive.CheckboxProps {
  // children: ReactNode;
}

export function CheckBox(props: CheckBoxProps) {
  // const CompBool = asChild ? Slot : 'button';
  return (
    <CheckBoxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
      <CheckBoxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckBoxPrimitive.Indicator>
    </CheckBoxPrimitive.Root>
  )
}