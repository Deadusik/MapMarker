import { useState } from 'react';
// components
import { BottomNavigation, BottomNavigationAction, Container } from '@mui/material'
// styles
import './styles/App.css'
// icons
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
// router
import AppRouter from './router/AppRouter'
import { useNavigate } from 'react-router-dom';
import { ABOUT, MAP, SETTINGS } from './router/paths';

function App() {
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState('/')

  return (
    <>
      <Container sx={{
        height: "100vh",
        padding: "20px 20px 70px",
        overflowY: "auto"
      }}>
        <AppRouter />
        {/* navbar */}
        <BottomNavigation
          value={activePage}
          sx={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "secondary.main"
          }}
          showLabels
          onChange={(_, newPath) => {
            navigate(newPath)
            setActivePage(newPath)
          }}>
          <BottomNavigationAction
            value={MAP}
            label="Map"
            icon={<MapIcon />} />
          <BottomNavigationAction
            value={ABOUT}
            label="About"
            icon={<InfoIcon />} />
          <BottomNavigationAction
            value={SETTINGS}
            label="Settings"
            icon={<SettingsIcon />} />
        </BottomNavigation>
      </Container>
    </>
  )
}

export default App
