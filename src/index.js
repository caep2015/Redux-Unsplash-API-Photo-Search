import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './App';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
