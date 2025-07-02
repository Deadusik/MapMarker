import { useState } from 'react';
// router
import AppRouter from './router/AppRouter'
import { useLocation, useNavigate } from 'react-router-dom';
import { ABOUT, MAP, SETTINGS } from './router/paths';
// styled 
import { AppContainer, BottomNavbar } from './styled/styledApp';
// material
import { BottomNavigationAction } from '@mui/material'
// icons
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  // constants
  const navigate = useNavigate()
  const location = useLocation()
  // states
  const [activePage, setActivePage] = useState(location.pathname)

  return (
    <>
      <AppContainer>
        <AppRouter />
        {/* navbar */}
        <BottomNavbar value={activePage} showLabels
          onChange={(_, newPath) => {
            navigate(newPath)
            setActivePage(newPath)
          }}>
          <BottomNavigationAction value={MAP} label="Map" icon={<MapIcon />} />
          <BottomNavigationAction value={ABOUT} label="About" icon={<InfoIcon />} />
          <BottomNavigationAction value={SETTINGS} label="Settings" icon={<SettingsIcon />} />
        </BottomNavbar>
      </AppContainer>
    </>
  )
}

export default App
