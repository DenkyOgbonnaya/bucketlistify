import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BucketlistDashboard from './bucketlist/bucketlistDashboard';
import ItemsDashboard from './items/itemsDashboard';
import ItemView from './items/itemView';
import LoginForm from './auth/loginForm';
import SignupForm from './auth/signupForm';
import PrivateRoute from './auth/privateRoute';

const Routes = () => {
    return(
        <Switch> 
            <PrivateRoute exact path='/' component= {BucketlistDashboard } />
            <PrivateRoute exact path='/bucketlist/:bucketlistId' component= { ItemsDashboard } />
            <PrivateRoute exact path='/items/:bucketlistId/:itemId' component= { ItemView } />
            <Route exact path='/login' component= { LoginForm } />
            <Route exact path='/signup' component= { SignupForm } />
        </Switch>
    )
}

export default Routes;