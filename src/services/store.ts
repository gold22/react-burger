import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApiClient from './api-client';
import { rootReducer } from './reducers';

const API_URL = 'https://norma.nomoreparties.space/api';
const apiClient = new ApiClient({ url: API_URL });

const enhancer = composeWithDevTools(applyMiddleware(thunk.withExtraArgument(apiClient)));
// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, enhancer);
