import React from 'react';
import ApiClient from './api-client';

// eslint-disable-next-line import/prefer-default-export
export const ApiContext = React.createContext(new ApiClient({ url: '' }));
