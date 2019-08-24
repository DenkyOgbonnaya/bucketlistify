import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BucketlistDashboard from './bucketlist/bucketlistDashboard';
import ItemsDashboard from './items/itemsDashboard';
import ItemView from './items/itemView';
import LoginForm from './auth/loginForm';
import SignupForm from './auth/signupForm';

const Routes = () => {
    return(
        <Switch> 
            <Route exact path='/' component= {BucketlistDashboard } />
            <Route exact path='/bucketlist/:bucketlistId' component= { ItemsDashboard } />
            <Route exact path='/item/:itemId' component= { ItemView } />
            <Route exact path='/login' component= { LoginForm } />
            <Route exact path='/signup' component= { SignupForm } />
        </Switch>
    )
}

export default Routes;