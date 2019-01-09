import React, { Component } from 'react'
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import WhatIDo from './components/WhatIDo'
import WhoIAm from './components/WhoIAm'
import NavBar from './components/NavBar'
import Camping from './components/whoiam/Camping'
import Music from './components/whoiam/Music'
import Gaming from './components/whoiam/Gaming'
import Books from './components/whoiam/Books'
import Photoshop from './components/whatido/Photoshop'
import Graphic from './components/whatido/Graphic'
// import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/graphic" component={Graphic} />
              <Route exact path="/photoshop" component={Photoshop} />
              <Route exact path='/books' component={Books} />
              <Route exact path='/gaming' component={Gaming} />
              <Route exact path='/music' component={Music} />
              <Route exact path='/camping' component={Camping} />
              <Route exact path='/whatido' component={WhatIDo} />
              <Route exact path='/whoiam' component={WhoIAm} />
              <Route path='/' component={HomePage} />
            </Switch>
          </div>
        </Routes>
      </div>
    )
  }
}

export default App
