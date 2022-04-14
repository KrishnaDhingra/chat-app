import React, { useState } from 'react'
import OtherUsersContainer from '../components/other-users/other-users-container.js'
import MainChatsContainer from '../components/chats/main-chats-container'
import FriendsContainer from '../components/friends/friends-container'
import NotificationContainer from '../components/notifications/notification-container'

const Home = ({ screen, changeScreen, toggleTheme }) => {
  const [chat, setChat] = useState(null)

  const selectedUser = (user) => {
    setChat(user)
  }
  return (
    <div className="home-container w-full h-full bg-secondary rounded-md">
      <OtherUsersContainer
        selectedUser={selectedUser}
        changeScreen={changeScreen}
      />

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
