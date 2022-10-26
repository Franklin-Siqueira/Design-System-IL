<!--
 Copyright 2022 Franklin Siqueira.
 SPDX-License-Identifier: Apache-2.0
-->

# Design System

## Stack and Dependencies

Figma

Vite

TypeScript

Tailwind

Phosphor

Radix

React

Storybook

Github CLI

## Setup

```shell
npm create vite@latest
npm i
npm i axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i --save clsx
npm i phosphor-react
npm i @radix-ui/react-slot
npm i @radix-ui/react-checkbox
npx storybook init
npm i @storybook/jest
npm i @storybook/addon-a11y
npm i @storybook/storybook-deployer --save-dev
npm i msw msw-storybook-addon -D
npx msw init public/
```

## Run Locally

### At first shell window

```shell
npm run dev
```

### At second shell window

```shell
npm run storybook
```

### Github CLI (install) and Repo Creation

```shell
brew install gh
gh auth login
gh repo create
git remote add origin git@github.com:Franklin-Siqueira/design-system-il.git
````
