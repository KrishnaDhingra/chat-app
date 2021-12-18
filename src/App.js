import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar.js'
import OtherUsersContainer from './components/other-users/other-users-container.js'
import MainChatsContainer from './components/chats/main-chats-container';
import SignupContainer from './components/signup/signup-container.js'

function App() {

  const [ theme, setTheme ] = useState('theme-dark')

  const toggleTheme = () => {
    if(theme == 'theme-dark'){return setTheme('theme-light')}
    setTheme('theme-dark')
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path="/" 
        element={<div className={`${theme} main-container lg:max-h-[92vh] max-w-[1340px] w-screen h-screen bg-secondary grow self-stretch rounded-md shadow-xl`}>
          <Navbar/>
          <OtherUsersContainer/>
          <MainChatsContainer onSelect={toggleTheme}/></div>}
        />
        <Route 
        path="/signup" 
        element={<SignupContainer theme={theme}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
