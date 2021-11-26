import React from 'react';
import Order from '../model/order';

export const OrderContext = React.createContext([new Order(), () => {}]);
