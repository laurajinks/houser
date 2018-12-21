import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        {routes}
      </div>
      </Router>
        
    );
  }
}

export default App;
