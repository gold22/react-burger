import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/app/app';
import ApiClient from './services/api-client';
import { ApiContext } from './services/api-context';
import { rootReducer } from './services/reducers';
import reportWebVitals from './reportWebVitals';

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

const API_URL = 'https://norma.nomoreparties.space/api';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ApiContext.Provider value={new ApiClient({url: API_URL})}>
              <App />
          </ApiContext.Provider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
