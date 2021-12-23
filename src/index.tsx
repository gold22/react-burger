import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// @ts-ignore
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import ApiClient from './services/api-client';
import { rootReducer } from './services/reducers';
// eslint-disable-next-line import/extensions,import/no-unresolved
import reportWebVitals from './reportWebVitals';

const API_URL = 'https://norma.nomoreparties.space/api';
const apiClient = new ApiClient({ url: API_URL });

const enhancer = composeWithDevTools(applyMiddleware(thunk.withExtraArgument(apiClient)));
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
