import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar.js'
import OtherUsersContainer from './components/other-users/other-users-container.js'
import MainChatsContainer from './components/chats/main-chats-container';
import SignupContainer from './components/signup/signup-container.js'
import ConfirmationPopup from './components/confirmation-popup'
import { motion, AnimatePresence } from 'framer-motion'
function App() {

  const [ theme, setTheme ] = useState('theme-dark')
  const [ visibility, setVisibility ] = useState(false)
  const toggleTheme = () => {
    if(theme == 'theme-dark'){return setTheme('theme-light')}
    setTheme('theme-dark')
  }
  const toggleVisibility = () => {
    setVisibility(!visibility)
  }
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div 
            className={`${theme} relative main-container lg:max-h-[92vh] max-w-[1340px] w-screen h-screen bg-secondary grow self-stretch rounded-md shadow-xl`}>
            <Navbar onSelect={toggleVisibility}/>
            <OtherUsersContainer/>
            <MainChatsContainer onSelect={toggleTheme}/>
            <AnimatePresence>
              {visibility && 
                  <ConfirmationPopup onSelect={toggleVisibility}/>
              }
            </AnimatePresence>
          </div>
        </Route>
        <Route path="/signup" exact>
          <SignupContainer theme={theme}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
