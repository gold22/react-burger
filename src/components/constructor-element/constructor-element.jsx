import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import {
    ConstructorElement as ConstructorElementComponent,
    DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import { isBun } from '../../utils/ingredients';
import {
    addIngredient,
    moveIngredient,
    removeIngredient,
    setBun,
} from '../../services/actions/constructor';
import styles from './constructor-element.module.css';

const ConstructorElement = ({ ingredient, type, index }) => {
    const dispatch = useDispatch();

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: { index },
    });

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop(item) {
            if ('index' in item) {
                dispatch(moveIngredient(item.index, index));
            } else if (isBun(item.ingredient)) {
                dispatch(setBun(item.ingredient));
            } else {
                dispatch(addIngredient(item.ingredient, index));
            }
        },
    });

    const handleRemoveIngredient = () => {
        dispatch(removeIngredient(index));
    };

    if (type === 'center') {
        return (
            <div ref={dragRef}>
                <div className={`${styles.optional} pr-1`} ref={dropRef}>
                    <DragIcon type="primary" />
                    <ConstructorElementComponent
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.imageMobile}
                        handleClose={handleRemoveIngredient}
                    />
                </div>
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
    index: PropTypes.number.isRequired,
};

ConstructorElement.defaultProps = {
    type: 'center',
};

export default ConstructorElement;
