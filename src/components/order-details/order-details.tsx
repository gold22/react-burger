import React from 'react';
import { useSelector } from '../../services/hooks';
import Modal from '../modal/modal';
import donePath from '../../images/done.gif';

type TOrderDetailsProps = {
    visible: boolean;
    onClose: () => void;
};

const OrderDetails: React.FC<TOrderDetailsProps> = ({ visible, onClose }) => {
    const { order } = useSelector((state) => state);

    return (
        <Modal title="" visible={visible} onClose={onClose}>
            <p className="text text_type_digits-large mt-4" data-testid="order-number">{order.number}</p>
            <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
            <img src={donePath} alt="Заказ оформлен" />
            <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mb-15">Дождитесь готовности на орбитальной станции</p>
        </Modal>
    );
};

export default OrderDetails;
