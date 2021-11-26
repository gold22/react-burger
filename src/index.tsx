import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { ApiContext } from './services/api-context';
import reportWebVitals from './reportWebVitals';

const API_URL = 'https://norma.nomoreparties.space/api';

ReactDOM.render(
  <React.StrictMode>
      <ApiContext.Provider value={API_URL}>
          <App />
      </ApiContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
