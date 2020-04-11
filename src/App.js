import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
