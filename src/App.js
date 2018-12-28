import React, { Component } from 'react'
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import WhatIDo from './components/WhatIDo'
import WhoIAm from './components/WhoIAm'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Switch>
            <Route exact path='/whatido' component={WhatIDo} />
            <Route exact path='/whoiam' component={WhoIAm} />
            <Route path='/' component={HomePage} />
          </Switch>
        </Routes>
      </div>
    )
  }
}

export default App
