import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import Modal from '../modal/modal';
import OrderInfo from '../order-info/order-info';
import ErrorDialog from '../error-dialog/error-dialog';
import { clearOrder, getOrder } from '../../services/actions/order-info';

type TOrderInfoDialogProps = {
    onClose: () => void;
};

type TOrderInfoDialogParams = {
    id: string;
};

const OrderInfoDialog: React.FC<TOrderInfoDialogProps> = ({ onClose }) => {
    const { id } = useParams<TOrderInfoDialogParams>();
    const { order, loadError } = useSelector((state) => state.orderInfo);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getOrder(id));
        return () => { dispatch(clearOrder()); };
    }, [id, dispatch]);

    if (loadError) {
        return <ErrorDialog visible message={loadError} onClose={onClose} />;
    }

    if (!order) {
        return null;
    }

    return (
        <Modal title={`#${order.number}`} visible onClose={onClose}>
            <OrderInfo order={order} />
        </Modal>
    );
};

export default OrderInfoDialog;
