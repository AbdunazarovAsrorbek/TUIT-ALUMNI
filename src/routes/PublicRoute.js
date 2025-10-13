import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
    return !!localStorage.getItem('authAlumni');
};

const PublicRoute = ({ lang, component: Component, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() && restricted
                    ? <Redirect to={`${lang}/profile`} />
                    : <Component {...props} />
            }
        />
    );
};

export default PublicRoute;

