import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App  />,
  document.getElementById('root')
);

registerServiceWorker();
