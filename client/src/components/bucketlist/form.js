import React, {useState} from 'react';
import {Form, Input, Button} from 'reactstrap';

const InputForm = (props) => {
    const[name, setName] = useState(props.name || '');

    return (
        <div> 
            <Form onSubmit = { e => props.handleSubmit(e, name)} > 
                <Input name = 'name' value={name} onChange= { e => setName(e.target.value)} placeholder = 'name' required /> <br />
                <Button color='success' > {props.name ? 'Save' : 'Add'} </Button>
            </Form> <br />
            {props.closeForm && <Button color="warning" onClick={() => props.closeForm()} > Cancel </Button> }
        </div>
    )
}

export default  InputForm;



     