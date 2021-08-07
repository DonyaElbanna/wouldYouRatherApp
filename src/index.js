import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, middleware)

ReactDOM.render(
  <HashRouter>
      <Provider store={store}>
         <App />
      </Provider>
  </HashRouter>,
  document.getElementById('root')
);
