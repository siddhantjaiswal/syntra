import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './components/signup/signupComponent'
import Login from './components/login/loginComponent'
import Search from './components/search/searchComponent'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/=:data' component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
