import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import CustomNav from './components/CustomNav'
import Brand from './components/Brand'
import About from './components/About'
import ReactGA from 'react-ga'
import Team from './components/Team'
import CustomFooter from './components/CustomFooter'
import SignInForm from './components/SignInForm'
import {
  HashRouter as Router, 
  Route, Link, Redirect, Switch
} from "react-router-dom"
/*function initializeReactGA() {
  ReactGA.initialize('UA-123791717-1')///change
  ReactGA.pageview('/homepage');
}*/
/**
 * ReactGA.event({
  category: 'User',
  action: 'Create an Account'
})
 */
const Home=()=>(
  <div>
    <CustomNav name="LAMDA"/>
    <Brand name="LAMDA"/>
    <About/>
    <Team/>
    <CustomFooter/>
  </div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/form/' exact component={SignInForm}/>
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
