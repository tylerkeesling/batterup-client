import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ Welcome }></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App
