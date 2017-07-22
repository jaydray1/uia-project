import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import HomeView from './views/HomeView.js';
import About from './views/About.js';
import Contact from './views/Contact.js';
import Donate from './views/Donate.js';

import './App.css';




class App extends Component {
  render() {
    return (
      <div>
         <Switch>
              <Route exact path="/" component={HomeView}/>
               <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/donate" component={Donate}/> 
          </Switch>
      </div>
    );
  }
}

export default App;
