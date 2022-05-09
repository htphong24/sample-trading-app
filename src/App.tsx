import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { AppBarComponent, SideBar, Menu } from './components'
import { BLOTTER, MAIN, ROUTELIST, TRADETICKET } from './routes'
import { Blotter, Dashboard, TradeTicket } from './features'
import { Route, Routes, useNavigate } from 'react-router'
import { store } from './store'

export const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark')
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false)
  const navigate = useNavigate()

  const theme = createTheme({
    palette: {
      mode: themeMode
    },
    typography: {
      fontSize: 14
    }
  })

  const handleDrawerToggle = React.useCallback(() => {
    setSideBarToggle(!sideBarToggle)
  }, [sideBarToggle])

  const onThemeChange = React.useCallback(() => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
  }, [themeMode])

  const menuClickHandler = React.useCallback(
    (link: any) => {
      navigate(link)
      setSideBarToggle(!sideBarToggle)
    },
    // [navigate, sideBarToggle]
    [history, sideBarToggle]
  )

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBarComponent
          handleDrawerToggle={handleDrawerToggle}
          onThemeChange={onThemeChange}
          isDarkMode={themeMode === 'dark'}
          isDrawerOpen={sideBarToggle}
        />
        <SideBar isOpen={sideBarToggle} handleDrawerToggle={handleDrawerToggle}>
          <Menu links={ROUTELIST} menuClickHandler={menuClickHandler} />
        </SideBar>
        <Routes>
          <Route path={MAIN} element={<Dashboard />} />
          <Route path={BLOTTER} element={<Blotter />} />
          <Route path={TRADETICKET} element={<TradeTicket />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App
