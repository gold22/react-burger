import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderContext } from '../../services/order-context';
import styles from './constructor-elements.module.css';

const ConstructorElements = () => {
    const [order] = React.useContext(OrderContext);

    return (
        <div className={styles.main}>
            {order.bun &&
                <div className={`${styles.mainItem} pl-8`} key="top">
                    <ConstructorElement
                        type="top"
                        isLocked
                        text={`${order.bun.name} (верх)`}
                        price={order.bun.price}
                        thumbnail={order.bun.image_mobile}
                    />
                </div>
            }
            <div className={`${styles.optionalItems} custom-scroll`} key="middle">
                {order.components.map(component => (
                    <div className={`${styles.optionalItem} custom-scroll pr-1`} key={component._id}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={component.name}
                            price={component.price}
                            thumbnail={component.image_mobile}
                        />
                    </div>
                ))}
            </div>
            {order.bun &&
                <div className={`${styles.mainItem} pl-8`} key="bottom">
                    <ConstructorElement
                        type="bottom"
                        isLocked
                        text={`${order.bun.name} (низ)`}
                        price={order.bun.price}
                        thumbnail={order.bun.image_mobile}
                    />
                </div>
            }
        </div>
    );
};

export default ConstructorElements;
