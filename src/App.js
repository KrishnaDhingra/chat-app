import React, { useState } from 'react'
import './index.css'
import Navbar from './components/navbar.js'
import OtherUsersContainer from './components/other-users/other-users-container.js'
import MainChatsContainer from './components/chats/main-chats-container';

function App() {
  const [ theme, setTheme ] = useState('theme-dark')
  const toggleTheme = () => {
    if(theme == 'theme-dark'){return setTheme('theme-light')}
    setTheme('theme-dark')
    console.log(theme)
  }
  return (
    <div className={`${theme} main-container max-h-[92vh] max-w-[1340px] w-screen h-screen bg-secondary grow self-stretch rounded-md shadow-xl`}>
      <Navbar/>
      <OtherUsersContainer/>
      <MainChatsContainer onSelect={toggleTheme}/>
    </div>
  );
}

export default App;
