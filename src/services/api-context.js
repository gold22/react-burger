import React from 'react';
import ApiClient from './api-client';

export const ApiContext = React.createContext(new ApiClient({url: ''}));
