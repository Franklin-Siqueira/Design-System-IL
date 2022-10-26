// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
  const CompBool = asChild ? Slot : 'h2';
  return (
    <CompBool className={clsx('text-gray-100 font-bold font-sans', { 'text-lg': size === 'sm',  'text-xl': size === 'md', 'text-2xl': size === 'lg' }, className)}>
      { children }
    </CompBool>
  )
}