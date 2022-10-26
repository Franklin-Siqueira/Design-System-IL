// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

export interface TextInputElementProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className='w-full flex items-center h-12 gap-3 py-4 px-3 bg-gray-800 rounded focus-within:ring-2'>
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputElement(props: TextInputElementProps) {
  return (
    // React's Composition pattern
    <input className='flex-1 bg-transparent outline-none text-xs font-sans text-gray-100 placeholder:text-gray-400' {...props} />
  )
}

TextInputElement.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputElement,
  Icon: TextInputIcon,
}