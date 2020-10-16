import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Nav from './components/Nav';
import SignIn from './components/SignIn'
import Movies from './components/Movies'
import NotFound from './components/NotFound'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/movies' component={Movies} />
        <Route path='/404' component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
}

export default App;
