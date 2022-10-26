// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import ReactDOM from 'react-dom'
//
import { App } from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)