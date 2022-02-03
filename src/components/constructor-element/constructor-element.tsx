import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import {
    ConstructorElement as ConstructorElementComponent,
    DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { isBun } from '../../utils/ingredients';
import {
    addIngredient,
    moveIngredient,
    removeIngredient,
    setBun,
} from '../../services/actions/constructor';
import { TIngredient, TIngredientDragItem } from '../../services/types';
import { useDispatch } from '../../services/hooks';
import styles from './constructor-element.module.css';

type TConstructorElementProps = {
    ingredient: TIngredient;
    type: 'top' | 'bottom' | 'center';
    index: number;
};

const ConstructorElement: React.FC<TConstructorElementProps> = ({ ingredient, type, index }) => {
    const dispatch = useDispatch();

    const [, dragRef] = useDrag<TIngredientDragItem, unknown, unknown>({
        type: 'ingredient',
        item: { index },
    });

    const [, dropRef] = useDrop<TIngredientDragItem, unknown, unknown>({
        accept: 'ingredient',
        drop(item) {
            if (typeof item.index !== 'undefined') {
                if (item.index !== index) {
                    dispatch(moveIngredient(item.index, index));
                }
            }
            if (typeof item.ingredient !== 'undefined') {
                if (isBun(item.ingredient)) {
                    dispatch(setBun(item.ingredient));
                } else {
                    dispatch(addIngredient(item.ingredient, index));
                }
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

export default ConstructorElement;
