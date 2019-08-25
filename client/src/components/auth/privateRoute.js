import React from 'react';
import {useGlobal} from 'reactn';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const[isAuthenticated] = useGlobal('isAuthenticated');
    return(
        <Route {...rest} render = {(props) => (
            isAuthenticated ? <Component {...props} /> : <Redirect to = {{
                pathname: '/login',
                state: {from: props.location}
            }} />
        )} />
    )
}

export default PrivateRoute;