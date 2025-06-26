import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// material
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
// utils
import { gray_light } from './utils/colors.ts'

const theme = createTheme({
  palette: {
    secondary: { main: gray_light }
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
