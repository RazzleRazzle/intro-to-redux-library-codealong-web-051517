import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
//import and create store - pass as props
const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());;

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
