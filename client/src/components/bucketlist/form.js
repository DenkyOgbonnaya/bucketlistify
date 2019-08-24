import React from 'react';
import {Form, Input, Button} from 'reactstrap';

const InputForm = () => {

    return (
        <div> 
            <Form > 
                <Input name = 'name' placeholder = 'name' required /> <br />
                <Button >Add </Button>
            </Form>
        </div>
    )
}

export default  InputForm;



     