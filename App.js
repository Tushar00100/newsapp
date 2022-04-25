import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component {
  
  render() {
    const path="sports";
    const bus="business";
    return (
      <>
        <Router>
      <Navbar/>
      <div>
      <Switch>
          <Route exact path="/" ><News key="" country="in" category="general"/></Route>
          <Route exact path="/general"><News country="in" category="general"/></Route>
          <Route exact path="/sports"><News key={path} country="in" category="sports"/></Route>
          <Route exact path="/business"><News key={bus} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment"country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News key="health"country="in" category="health"/></Route>
          <Route exact path="/technology"><News key="technolog"country="in" category="technology"/></Route>
          <Route exact path="/science"><News key="science"country="in" category="science"/></Route>
        
      </Switch>
      </div>
    </Router>
    </>
    
    )
  }
}
