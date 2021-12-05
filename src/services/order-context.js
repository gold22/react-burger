import React from 'react';
import Order from '../model/order';

// eslint-disable-next-line import/prefer-default-export
export const OrderContext = React.createContext([new Order(), () => {}]);
