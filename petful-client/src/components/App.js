import React, { Component } from 'react';
import './App.css';
import Dashboard from '../components/dashboard';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path="/" component={Dashboard} />
      </div>
    );
  }
}

export default App;
