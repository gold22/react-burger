import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const ingredientType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired,
    imageMobile: PropTypes.string.isRequired,
});
