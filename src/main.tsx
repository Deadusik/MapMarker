import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// components
import App from './App.tsx'
// material
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
// utils
import { gray_light, white } from './utils/colors.ts'
import { SCREEN_SIZES } from './utils/constants.ts'
// redux
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'

const theme = createTheme({
  palette: {
    secondary: {
      main: gray_light,
      light: white
    },
  },
  breakpoints: {
    values: {
      xs: SCREEN_SIZES.xs,
      sm: SCREEN_SIZES.sm,
      md: SCREEN_SIZES.md,
      lg: SCREEN_SIZES.lg,
      xl: SCREEN_SIZES.xl,
    }
  }
})

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
