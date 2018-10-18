// const arr = [1, 2, 3];
// const result = () => console.log(...arr);
// result();
import 'babel-polyfill';  
import React from 'react';  
import bsStyles from "bootstrap/dist/css/bootstrap.min.css";
import appStyles from "./styles/styles.scss";
import "bootstrap";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Nav from './components/Nav';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={Nav} />
        <Route path='/user/list' component={App} />
        <Route path='/user/edit/:id' component={Edit} />
        <Route path='/user/create' component={Create} />
        <Route path='/user/show/:id' component={Show} />
      </div>
  </Router>,
  document.getElementById('app')
);

