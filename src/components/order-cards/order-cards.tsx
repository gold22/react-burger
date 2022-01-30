import React from 'react';
import { useDispatch } from '../../services/hooks';
import { closeOrdersListConnection, openOrdersListConnection } from '../../services/actions/orders-list';

const OrderCards = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(openOrdersListConnection());
        return () => { dispatch(closeOrdersListConnection()); };
    }, [dispatch]);

    return (
        <p>Лента</p>
    );
};

export default OrderCards;
