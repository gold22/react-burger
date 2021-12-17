import React from 'react';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import DialogPage from '../../components/dialog-page/dialog-page';

const IngredientDetailsPage = () => {
    const ingredient = {
        id: '60666c42cc7b410027a1a9b1',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        imageMobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        imageLarge: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    };
    return (
        <DialogPage>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <IngredientDetails ingredient={ingredient} />
        </DialogPage>
    );
};

export default IngredientDetailsPage;
