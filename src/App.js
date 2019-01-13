import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import CustomNav from './components/CustomNav'
import Brand from './components/Brand'
import About from './components/About'
import ReactGA from 'react-ga'
import Team from './components/Team'
import CustomFooter from './components/CustomFooter'
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNav name="LAMDA"/>
        <Brand name="LAMDA"/>
        <About/>
        <Team/>
        <CustomFooter/>
      </div>
    );
  }
}

export default App;
