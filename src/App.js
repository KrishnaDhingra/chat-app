import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar.js'
import OtherUsersContainer from './components/other-users/other-users-container.js'
import MainChatsContainer from './components/chats/main-chats-container';
import FriendsContainer from './components/friends/friends-container'
import SigninContainer from './components/signin/signin-container.js'
import ConfirmationPopup from './components/confirmation-popup'
import { motion, AnimatePresence } from 'framer-motion'
import { authentication } from './firebase.js'
import { onAuthStateChanged } from 'firebase/auth'

function App() {

  const [ theme, setTheme ] = useState('theme-dark')
  const [ visibility, setVisibility ] = useState(false)
  const [ user, setUser ] = useState(null)
  const toggleTheme = () => {
    if(theme == 'theme-dark'){return setTheme('theme-light')}
    setTheme('theme-dark')
  }
  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  onAuthStateChanged(authentication, (user) => {
    if(user){
        return setUser(user)
    }
    setUser(null)
  })
  if(user){
    return (
      <motion.div 
        className={`${theme} relative main-container lg:max-h-[92vh] max-w-[1340px] w-screen h-screen bg-secondary grow self-stretch rounded-md shadow-xl`}>
        <Navbar onSelect={toggleVisibility}/>
        <OtherUsersContainer/>
        {/* <MainChatsContainer onSelect={toggleTheme}/> */}
        <FriendsContainer onSelect={toggleTheme}/>
        <AnimatePresence>
          {visibility && 
              <ConfirmationPopup onSelect={toggleVisibility}/>
          }
        </AnimatePresence>
      </motion.div>
    )
  }
  return (
    <SigninContainer theme={theme}/>
  )
}

export default App;
