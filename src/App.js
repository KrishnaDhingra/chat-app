import React, { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Settings from './pages/settings'
import Navbar from './components/navbar'
import SigninContainer from './components/signin/signin-container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { authentication } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

const App = () => {
  const [user, setUser] = useState(null)
  const [screen, setScreen] = useState('friends')
  const [theme, setTheme] = useState('theme-dark')

  const toggleTheme = () => {
    if (theme == 'theme-dark') {
      return setTheme('theme-light')
    }
    setTheme('theme-dark')
  }
  const changeScreen = (screenType) => {
    setScreen(screenType)
  }
  onAuthStateChanged(authentication, (user) => {
    if (user) {
      return setUser(user)
    }
    setUser(null)
  })
  if (user) {
    return (
      <Router>
        <div
          className={`${theme} main-container lg:max-h-[92vh] max-w-[1340px] h-screen w-screen rounded-md shadow-xl`}
        >
          <Navbar changeScreen={changeScreen} />

          <Switch>
            <Route path="/" exact>
              <Home
                screen={screen}
                changeScreen={changeScreen}
                toggleTheme={toggleTheme}
              />
            </Route>

            <Route path="/settings" exact>
              <Settings />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
  return <SigninContainer theme={theme} />
}

export default App
