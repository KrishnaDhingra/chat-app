import React, { useState } from 'react'
import "./index.css"
import Home from './pages/home'
import Settings from './pages/settings'
import Navbar from './components/navbar'
import SigninContainer from './components/signin/signin-container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { authentication } from './firebase';
import { onAuthStateChanged } from 'firebase/auth'

const App = () => {

  const [ user, setUser ] = useState(null)
  const [ visibility, setVisibility ] = useState(false)
  const [ screen , setScreen ] = useState('friends')
  const [ theme, setTheme ] = useState('theme-dark')
  const [ heading, setHeading ] = useState('')
  const [ text, setText ] = useState('')

  const toggleTheme = () => {
    if(theme == 'theme-dark'){return setTheme('theme-light')}
    setTheme('theme-dark')
  }
  const toggleVisibility = () => {
    setVisibility(!visibility)
  }
  const changeScreen = (screenType) => {
    setScreen(screenType)
  }
  const setConfirmationPopupTextForSignOut = () => {
    setHeading('Confirm Logout')
    setText('Are you sure you want to logout? This action cannot be reversed')
  }
  onAuthStateChanged(authentication, (user) => {
    if(user){
        return setUser(user)
    }
    setUser(null)
  })
  if(user){
    return(
      <Router>
        <div className={`${theme} main-container lg:max-h-[92vh] max-w-[1340px] h-screen w-screen rounded-md shadow-xl`}>

          <Navbar changeScreen={changeScreen} onSelect={toggleVisibility} setConfirmationPopupText={setConfirmationPopupTextForSignOut}/>
          
          <Switch>  
            <Route path="/" exact>
              <Home visibility={visibility} screen={screen} changeScreen={changeScreen} toggleVisibility={toggleVisibility} toggleTheme={toggleTheme} heading={heading} text={text}/>
            </Route>
  
            <Route path="/settings" exact>
              <Settings/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
  return (
    <SigninContainer theme={theme}/>
  )
}

export default App;
