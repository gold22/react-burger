import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from '../actions/auth';

const initialState = {
    user: null,
    accessToken: null,
    isRegistering: false,
    registrationError: null,
};

// eslint-disable-next-line import/prefer-default-export
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case REGISTER_USER_REQUEST: {
        return {
            ...state,
            isRegistering: true,
        };
    }
    case REGISTER_USER_SUCCESS: {
        localStorage.setItem('refreshToken', action.refreshToken);
        return {
            ...state,
            user: action.user,
            accessToken: action.accessToken,
            isRegistering: false,
            registrationError: null,
        };
    }
    case REGISTER_USER_ERROR: {
        localStorage.removeItem('refreshToken');
        return {
            ...initialState,
            registrationError: action.message,
        };
    }
    default: {
        return state;
    }
    }
};
