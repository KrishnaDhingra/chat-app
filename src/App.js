import React, { useState, createContext } from 'react'
import './App.css'
import Home from './pages/home'
import Settings from './pages/settings'
import Navbar from './components/navbar'
import SigninContainer from './components/signin/signin-container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { authentication } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

// making global contexts

// this context will determine that which screen is active right now 'friends/notifications/chats'
export const ScreenContext = createContext()

export const ChatContext = createContext()

export const App = () => {
  const [user, setUser] = useState(null)
  const [screen, setScreen] = useState('friends')
  const [theme, setTheme] = useState('theme-dark')
  const [chat, setChat] = useState(null)

  const toggleTheme = () => {
    if (theme == 'theme-dark') {
      return setTheme('theme-light')
    }
    setTheme('theme-dark')
  }
  onAuthStateChanged(authentication, (user) => {
    if (user) {
      return setUser(user)
    }
    setUser(null)
  })
  if (user) {
    return (
      <ChatContext.Provider value={{ chat, setChat }}>
        <ScreenContext.Provider value={{ screen, setScreen }}>
          <Router>
            <div
              className={`${theme} main-container lg:max-h-[92vh] max-w-[1340px] h-screen w-screen rounded-md shadow-xl`}
            >
              <Navbar />

              <Switch>
                <Route path="/" exact>
                  <Home toggleTheme={toggleTheme} />
                </Route>

                <Route path="/settings" exact>
                  <Settings />
                </Route>
              </Switch>
            </div>
          </Router>
        </ScreenContext.Provider>
      </ChatContext.Provider>
    )
  }
  return <SigninContainer theme={theme} />
}
