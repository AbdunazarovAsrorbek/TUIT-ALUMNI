import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
    return !!localStorage.getItem('authAlumni');
};

const PrivateRoute = ({lang, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated()
                    ? <Component {...props} />
                    : <Redirect to={`/${lang}/login`} />
            }
        />
    );
};

export default PrivateRoute;