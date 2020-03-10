import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AragonHighLevel from './components/AragonHighLevel';
import AragonPerVote from './components/AragonPerVote';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path='/' component={AragonHighLevel} />
      <Route exact path='/vote' component={AragonPerVote} />
    </App>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
