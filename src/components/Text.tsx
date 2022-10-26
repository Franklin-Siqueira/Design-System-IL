// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextProps {
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export function Text({ size = 'md', children, asChild, className }: TextProps) {
  const CompBool = asChild ? Slot : 'span';
  return (
    <CompBool className={clsx('text-gray-100 font-sans', { 'text-xs': size === 'sm',  'text-sm': size === 'md', 'text-md': size === 'lg' }, className)}>
      { children }
    </CompBool>
  )
}