// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { ReactNode } from 'react';
// import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface BaseProps {
  children: ReactNode;
}

export function Base({}: BaseProps) {
  // const CompBool = asChild ? Slot : 'button';
  return (
    <div className={clsx('')}>
    </div>
  )
}