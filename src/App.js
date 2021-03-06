import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store';
import Header from './components/Header'
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <Router>
      <div className="App">
        <Header />
        {routes}
      </div>
      </Router>
      </Provider>
        
    );
  }
}

export default App;
