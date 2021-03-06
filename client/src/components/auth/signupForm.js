import React, {useState} from 'react';
import { Button, FormGroup, Form, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Alert} from 'reactstrap';
import Spinner from '../includes/spinner';
import './style.css';
import { signup } from './api';

const SignupForm = props => {
    const[username, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isError, setIsError] = useState(false);
    const[error, setError] =  useState('');
    const[signingUp, setSigningUp] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setSigningUp(true);
        signup({username, email, password})
        .then(res => {
            if(res.status === 201){
                localStorage.bearerToken = res.data.token;
                props.history.push('/');
            }else {
                setIsError(true);
                setError(res.data.message)
            }
            setSigningUp(false);
        })
    }
    return (
        <div className='auth' >
            <img src='/favicon.ico' alt='logo' />
        <div className = 'authForm'>
            <div className = 'form'>
            <Alert color='danger' isOpen={isError} > {error.message}  </Alert>
            <h5> Create an account </h5>
            {signingUp && <Spinner />}
                <Form onSubmit = {handleSubmit} >
                    <FormGroup>
                        <Label for ='userName'>User Name </Label> 
                        <Input type='text' name='username' required placeholder = 'Enter userName' onChange={e => setUserName(e.target.value)} /> 
                    </FormGroup>
                    <FormGroup>
                        <Label for ='email'> Email </Label>
                        <Input name='email' required type='email' placeholder = 'Enter email' onChange={e => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for ='password'> Password </Label>
                        <Input type = 'password' required name='password' placeholder = 'Enter password' onChange={e => setPassword(e.target.value)} />
                    </FormGroup >
                    <Button color='success'> Signup </Button> {" "} <Link to= '/login'> Already have an account? </Link>
                </Form>
            </div>
      </div>
      </div>
    )
}
export default withRouter(SignupForm);