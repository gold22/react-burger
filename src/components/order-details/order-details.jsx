import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../modal/modal';
import { OrderContext } from '../../services/order-context';
import donePath from '../../images/done.gif';

const OrderDetails = ({ visible, onClose }) => {
    const [order] = React.useContext(OrderContext);

    return (
        <Modal title="" visible={visible} onClose={onClose}>
            <p className="text text_type_digits-large mt-4">{order.number}</p>
            <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
            <img src={donePath} alt="Заказ оформлен" />
            <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mb-15">Дождитесь готовности на орбитальной станции</p>
        </Modal>
    );
};

OrderDetails.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default OrderDetails;
