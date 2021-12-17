export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const registerUser = (user) => async (dispatch, getState, apiClient) => {
    dispatch({
        type: REGISTER_USER_REQUEST,
    });
    try {
        const result = await apiClient.registerUser(user);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            user: result.user,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_ERROR,
            message: error.message,
        });
    }
};
