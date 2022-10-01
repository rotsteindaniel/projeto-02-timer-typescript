import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { createContext, useState } from 'react'
import { CyclescontextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclescontextProvider>
          <Router />
        </CyclescontextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
