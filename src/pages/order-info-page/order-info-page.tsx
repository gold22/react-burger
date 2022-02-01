import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import DialogPage from '../../components/dialog-page/dialog-page';
import OrderInfo from '../../components/order-info/order-info';
import ErrorMessage from '../../components/error-message/error-message';
import { getOrder } from '../../services/actions/order-info';
import styles from './order-info-page.module.css';

type TOrderInfoPageParams = {
    id: string;
};

const OrderInfoPage = () => {
    const { id } = useParams<TOrderInfoPageParams>();
    const { order, loadError } = useSelector((state) => state.orderInfo);
    const dispatch = useDispatch();

    React.useEffect(
        () => { dispatch(getOrder(id)); },
        [id, dispatch],
    );

    if (loadError) {
        return (
            <DialogPage>
                <ErrorMessage message={loadError} />
            </DialogPage>
        );
    }
    if (!order) {
        return <DialogPage />;
    }

    return (
        <div className={styles.main}>
            <p className="text text_type_digits-default mt-10 mb-10">{`#${order.number}`}</p>
            <OrderInfo order={order} />
        </div>
    );
};

export default OrderInfoPage;
