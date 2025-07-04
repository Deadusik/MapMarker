import React, { useEffect, useState } from 'react';
// router
import AppRouter from './router/AppRouter'
import { useLocation, useNavigate } from 'react-router-dom';
import { ABOUT, MAP, SETTINGS } from './router/paths';
// styled 
import { AppContainer, BottomNavbar } from './styled/styledApp';
// material
import { BottomNavigationAction, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
// icons
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
// utils
import { SCREEN_SIZES } from './utils/constants';
import { dark, dark_light, gray_light, white } from './utils/colors';
import { useAppSelector } from './hooks/redux';
// i18n
import './i18n'
import { useTranslation } from 'react-i18next';
import { getSettings } from './utils/functions';
import { settingsSlice } from './store/reducers/SettingsSlice';
import { useDispatch } from 'react-redux';
import { NAVBAR } from './utils/translation';

function App() {
  const { i18n, t } = useTranslation()
  // redux
  const dispatch = useDispatch()
  const themeName = useAppSelector(state => state.settingsReducer.theme)
  const languageCode = useAppSelector(state => state.settingsReducer.language)
  const { setLanguage, setTheme } = settingsSlice.actions
  // constants
  const navigate = useNavigate()
  const location = useLocation()
  const isDarkTheme = themeName === 'dark'
  // states
  const [activePage, setActivePage] = useState(location.pathname)

  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
      secondary: {
        main: isDarkTheme ? dark : gray_light,
        light: isDarkTheme ? dark_light : white,
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
  }), [themeName])

  useEffect(() => {
    const [theme, language] = getSettings()
    dispatch(setTheme(theme))
    dispatch(setLanguage(language))
  }, [])

  useEffect(() => {
    i18n.changeLanguage(languageCode)
  }, [languageCode])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <AppRouter />
          {/* navbar */}
          <BottomNavbar value={activePage} showLabels
            onChange={(_, newPath) => {
              navigate(newPath)
              setActivePage(newPath)
            }}>
            <BottomNavigationAction value={MAP} label={t(NAVBAR.map)} icon={<MapIcon />} />
            <BottomNavigationAction value={ABOUT} label={t(NAVBAR.about)} icon={<InfoIcon />} />
            <BottomNavigationAction value={SETTINGS} label={t(NAVBAR.settings)} icon={<SettingsIcon />} />
          </BottomNavbar>
        </AppContainer>
      </ThemeProvider>
    </>
  )
}

export default App
