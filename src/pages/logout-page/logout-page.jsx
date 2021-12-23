import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DialogPage from '../../components/dialog-page/dialog-page';
import ErrorMessage from '../../components/error-message/error-message';
import { logOutUser } from '../../services/actions/auth';

const LogoutPage = () => {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    React.useEffect(
        () => { dispatch(logOutUser()); },
        [dispatch],
    );

    if (auth.logoutError) {
        return (
            <DialogPage>
                <ErrorMessage message={auth.logoutError} />
            </DialogPage>
        );
    }
    if (auth.user) {
        return (
            <DialogPage>
                <p className="text text_type_main-medium">
                    Выход...
                </p>
            </DialogPage>
        );
    }

    return <Redirect to="/login" />;
};

export default LogoutPage;
