import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './Home'
import About from './About'
import Contact from './Contact'
import NavBar from './NavBar'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
            <Switch>
              <Route 
                exact path="/"
                component={Home}
              />
              <Route 
                exact path="/About"
                component={About}
              />
              <Route 
                exact path="/Contact"
                component={Contact}
              />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;