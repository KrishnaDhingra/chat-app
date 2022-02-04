import React, { useState } from 'react'
import "./index.css"
import Home from './pages/home'
import Settings from './pages/settings'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  const [ visibility, setVisibility ] = useState(false)
  const [ screen , setScreen ] = useState('friends')

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }
  const changeScreen = (screenType) => {
    setScreen(screenType)
  }

  return(
    <Router>

      {/* <Navbar changeScreen={changeScreen} onSelect={toggleVisibility}/> */}

      <Switch>
        <Route className="" path="/" exact>
          <Home visibility={visibility} screen={screen} changeScreen={changeScreen} toggleVisibility={toggleVisibility}/>
        </Route>

        <Route path="/settings" exact>
          <Settings/>
        </Route>
      </Switch>

    </Router>
  )
}

export default App;
