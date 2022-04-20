import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './home';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component = {Login}/>
		  <Route path="/home" component = {Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
