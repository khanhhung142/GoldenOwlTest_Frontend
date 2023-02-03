import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import rootReducer from './app/store';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
