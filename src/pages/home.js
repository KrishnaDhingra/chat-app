import React, { useState, useContext } from 'react'
import OtherUsersContainer from '../components/other-users/other-users-container.js'
import MainChatsContainer from '../components/chats/main-chats-container'
import FriendsContainer from '../components/friends/friends-container'
import NotificationContainer from '../components/notifications/notification-container'
import { ScreenContext, ChatContext } from '../App.js'
const Home = ({ toggleTheme }) => {
  const { chat, setChat } = useContext(ChatContext)

  const selectedUser = (user) => {
    setChat(user)
  }

  const { screen, setScreen } = useContext(ScreenContext)

  return (
    <div className="home-container w-full h-full bg-secondary rounded-md">
      <OtherUsersContainer />

      {screen == 'messages' && (
        <MainChatsContainer onSelect={toggleTheme} otherUser={chat} />
      )}

      {((!chat && screen != 'notifications') || screen == 'friends') && (
        <FriendsContainer onSelect={toggleTheme} />
      )}

      {screen == 'notifications' && (
        <NotificationContainer onSelect={toggleTheme} />
      )}
    </div>
  )
}

export default Home
