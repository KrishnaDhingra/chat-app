import React, { useState } from 'react'
import OtherUsersContainer from '../components/other-users/other-users-container.js'
import Navbar from '../components/navbar.js';
import MainChatsContainer from '../components/chats/main-chats-container';
import FriendsContainer from '../components/friends/friends-container'
import SigninContainer from '../components/signin/signin-container.js'
import NotificationContainer from '../components/notifications/notification-container';
import ConfirmationPopup from '../components/confirmation-popup'
import { motion, AnimatePresence } from 'framer-motion'
import { authentication } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth'

const Home = ({visibility, screen, changeScreen, toggleVisibility}) => {

  const [ theme, setTheme ] = useState('theme-dark')
  const [ user, setUser ] = useState(null)
  const [ chat, setChat ] = useState(null)

  const toggleTheme = () => {
    if(theme == 'theme-dark'){return setTheme('theme-light')}
    setTheme('theme-dark')
  }
  const selectedUser = (user) => {
    setChat(user)
  }
  onAuthStateChanged(authentication, (user) => {
    if(user){
        return setUser(user)
    }
    setUser(null)
  })
  if(user){
    return (
      <div className={`theme-dark relative main-container lg:max-h-[92vh] max-w-[1340px] w-screen h-screen bg-secondary grow self-stretch rounded-md shadow-xl bg-blue-300`}>

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
      </div>

    )
  }
  return (
    <SigninContainer theme={theme}/>
  )
}

export default Home;
