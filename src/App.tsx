import 'App.css'

import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from './page/AssetsPage/Not-Found'
import GamePage from './page/GamePage/GamePage'
import InitialPage from './page/InitialPage/InitialPage'
import Tutorial from './page/Tutorial/Tutorial'
import WinPage from './page/WinPage/WinPage'

const rootElement =
  document.getElementById('root') ?? document.createElement('div')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/win" element={<WinPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
