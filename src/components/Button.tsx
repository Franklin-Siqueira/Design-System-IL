// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  asChild?: boolean;
  children: ReactNode;
  className?: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const CompBool = asChild ? Slot : 'button';
  return (
    <CompBool className={clsx('text-sm text-black font-semibold py-3 px-4 bg-cyan-500 rounded w-full transition-colors hover:bg-cyan-300 focus:ring-white', className)} {...props}>
      {children}
    </CompBool>
  )
}