export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export const registerUser = (user) => async (dispatch, getState, apiClient) => {
    dispatch({
        type: REGISTER_USER_REQUEST,
    });
    try {
        const result = await apiClient.registerUser(user);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            user: result,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_ERROR,
            message: error.message,
        });
    }
};

export const logInUser = (user) => async (dispatch, getState, apiClient) => {
    dispatch({
        type: LOGIN_USER_REQUEST,
    });
    try {
        const result = await apiClient.logInUser(user);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            user: result,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_USER_ERROR,
            message: error.message,
        });
    }
};

export const logOutUser = () => async (dispatch, getState, apiClient) => {
    dispatch({
        type: LOGOUT_USER_REQUEST,
    });
    try {
        await apiClient.logOutUser();
        dispatch({
            type: LOGOUT_USER_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: LOGOUT_USER_ERROR,
            message: error.message,
        });
    }
};

export const getUser = () => async (dispatch, getState, apiClient) => {
    dispatch({
        type: GET_USER_REQUEST,
    });
    try {
        const user = await apiClient.getUser();
        dispatch({
            type: GET_USER_SUCCESS,
            user,
        });
    } catch (error) {
        dispatch({
            type: GET_USER_ERROR,
            message: error.message,
        });
    }
};

export const updateUser = (user) => async (dispatch, getState, apiClient) => {
    dispatch({
        type: UPDATE_USER_REQUEST,
    });
    try {
        const result = await apiClient.updateUser(user);
        dispatch({
            type: UPDATE_USER_SUCCESS,
            user: result,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_USER_ERROR,
            message: error.message,
        });
    }
};
