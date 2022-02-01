import React from 'react';
import { TOrder } from '../../services/types';
// import styles from './order-info.module.css';

type TOrderInfoProps = {
    order: TOrder;
};

const OrderInfo: React.FC<TOrderInfoProps> = ({ order }) => {
    const { name } = order;
    return (
        <>
            <p className="text text_type_main-medium">{name}</p>
        </>
    );
};

export default OrderInfo;
