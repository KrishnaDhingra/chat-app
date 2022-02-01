import React, { useState } from 'react'
import './index.css'
import Navbar from './components/navbar.js'
import OtherUsersContainer from './components/other-users/other-users-container.js'
import MainChatsContainer from './components/chats/main-chats-container';
import FriendsContainer from './components/friends/friends-container'
import SigninContainer from './components/signin/signin-container.js'
import NotificationContainer from './components/notifications/notification-container';
import ConfirmationPopup from './components/confirmation-popup'
import { motion, AnimatePresence } from 'framer-motion'
import { authentication } from './firebase.js'
import { onAuthStateChanged } from 'firebase/auth'

const App = () => {

  // sets the theme of the app. Dark or Light 
  const [ theme, setTheme ] = useState('theme-dark')
  // sets the visibility of the modal
  const [ visibility, setVisibility ] = useState(false)
  // tells if the user is logged in now and if yes then tells tells the information of the user
  const [ user, setUser ] = useState(null)
  // tell that what chat is currently selected to which the user is chatting right now
  const [ chat, setChat ] = useState(null)
  // what section will be visible? friends, selectedChat, notifications panel?
  const [ screen , setScreen ] = useState('friends')

  const toggleTheme = () => {
    if(theme == 'theme-dark'){return setTheme('theme-light')}
    setTheme('theme-dark')
  }
  const toggleVisibility = () => {
    setVisibility(!visibility)
  }
  const selectedUser = (user) => {
    setChat(user)
  }
  const changeScreen = (screenType) => {
    setScreen(screenType)
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

        <Navbar changeScreen={changeScreen} onSelect={toggleVisibility}/>

        <OtherUsersContainer selectedUser={selectedUser} changeScreen={changeScreen}/>

        {screen == 'messages' && <MainChatsContainer onSelect={toggleTheme} otherUser={chat}/>}

        {((!chat && screen != 'notifications') || (screen == 'friends')) && <FriendsContainer onSelect={toggleTheme}/>}

        {screen == 'notifications' && <NotificationContainer onSelect={toggleTheme}/>}
        
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
