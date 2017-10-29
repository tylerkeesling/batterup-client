import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Dashboard from './Dashboard'
import GameStats from './GameStats'
import CreateRoster from './CreateRoster'
import InGame from './InGame'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ Welcome }></Route>
          <Route path='/dashboard' component={ Dashboard }></Route>
          <Route path='/gamestats' component={ GameStats }></Route>
          <Route path='/createroster' component={ CreateRoster }></Route>
          <Route path='/ingame' component={ InGame }></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App
