import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import {
    ConstructorElement as ConstructorElementComponent,
    DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import { addIngredient, setBun } from '../../services/actions/constructor';
import styles from './constructor-element.module.css';

const ConstructorElement = ({ ingredient, type, id }) => {
    const dispatch = useDispatch();

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop(item) {
            if (item.ingredient.type === 'bun') {
                dispatch(setBun(item.ingredient));
            } else if (type === 'top') {
                dispatch(addIngredient(item.ingredient, 0));
            } else if (type === 'bottom') {
                dispatch(addIngredient(item.ingredient, -1));
            } else {
                dispatch(addIngredient(item.ingredient, id));
            }
        },
    });

    if (type === 'center') {
        return (
            <div className={`${styles.optional} pr-1`} ref={dropRef}>
                <DragIcon type="primary" />
                <ConstructorElementComponent
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.imageMobile}
                />
            </div>
        );
    }
    return (
        <div className={`${styles.main} pl-8`} ref={dropRef}>
            <ConstructorElementComponent
                type={type}
                isLocked
                text={`${ingredient.name} ${type === 'top' ? '(верх)' : '(низ)'}`}
                price={ingredient.price}
                thumbnail={ingredient.imageMobile}
            />
        </div>
    );
};

ConstructorElement.propTypes = {
    ingredient: ingredientType.isRequired,
    type: PropTypes.oneOf(['top', 'bottom', 'center']),
    id: PropTypes.number,
};

ConstructorElement.defaultProps = {
    type: 'center',
    id: null,
};

export default ConstructorElement;
