import React, {useState, Fragment} from 'react';
import {Button} from 'reactstrap';
import Form from './form';

const ToggleableForm = () => {
    const[isOpen, setIsOpen] = useState(false)

    if(!isOpen)
        return(
            <Fragment> 
                <Button color='warning' outline onClick = { () => setIsOpen(!isOpen)} >New </Button>
            </Fragment>
        )
    return (
        <Form />
    )
}

export default  ToggleableForm;



     