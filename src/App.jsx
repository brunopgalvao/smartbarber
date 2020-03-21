import React from 'react';
import './App.css';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
        <Switch>
          <Route exact path="/" render={props => <Home />} />
        </Switch>
    </div>
  )
}

export default App