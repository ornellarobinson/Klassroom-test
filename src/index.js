import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import rootReducer from './redux-files/reducers';
import './styles/index.sass';
import './fontAwesomeLibrary';
import Dashboard from './pages/dashboard';
import { loadState, saveState } from './localStorage';
import * as serviceWorker from './serviceWorker';

const persistedState = loadState();

let store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Dashboard />
    </Router>
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
