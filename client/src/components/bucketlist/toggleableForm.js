import React, {useState, Fragment} from 'react';
import {Button} from 'reactstrap';
import Form from './form';

const ToggleableForm = ( {create}) => {
    const[isOpen, setIsOpen] = useState(false)

    const closeForm = () => {
        setIsOpen(!isOpen);
    }
    if(!isOpen)
        return(
            <Fragment> 
                <Button color='warning' outline onClick = { () => setIsOpen(!isOpen)} >New </Button>
            </Fragment>
        )
    return (
        <Form handleSubmit = {create} closeForm={closeForm} />
    )
}

export default  ToggleableForm;



     