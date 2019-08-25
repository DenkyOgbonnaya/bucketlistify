import React, {useState} from 'react';
import Form from '../bucketlist/form';
import {withRouter} from 'react-router-dom';
import {Card, CardBody, CardTitle, CardText, CardLink, CardFooter} from 'reactstrap';
import './style.css';
import moment from 'moment';
import RadioBtn from '../includes/radioBtns';

const EditableItem = (props) => {
    const[isOpen, setIsOpen] = useState(false);
    const{item} = props;

    const handleUpdateClick = e => {
        e.preventDefault();

        setIsOpen(!isOpen);
    }
    const onViewClick = (e, itemId) => {
        e.preventDefault();

        props.history.push(`/items/${props.bucketlistId}/${itemId}`)
    }
    const handleUpdate = (e, name) => {
        e.preventDefault();
        props.update({_id: item._id, name});
    }
    const onDoneClick = (done) => {
        props.update({_id: item._id,  done})
    }
    return (
        <div>
            <Card> 
                <span className='delete-item' onClick={ () => props.delet(item._id)} > X </span>
                <CardBody> 
                    <CardTitle size='md' className='cardtitle'> <h4> {item.name} </h4> </CardTitle>
                    <CardText className='cardtext'> 
                        <small className='text-muted'> Created: {moment(item.createdAt).fromNow(true)} </small>
                        <small className='text-muted'> Last updated: {moment(item.updatedAt).fromNow(true)} </small>
                    </CardText>
                </CardBody>
                <CardFooter className="text-muted cardfooter ">
                    <CardLink onClick= { e => onViewClick(e, item._id)} href="#" className='cardlink'>view</CardLink>
                    <CardLink onClick= {handleUpdateClick} href="#" className='cardlink'> {isOpen ? 'Cancel' : 'Update'} </CardLink>
                    <span> Done: <RadioBtn done={item.done} setDone= {onDoneClick} /> </span>
                </CardFooter>
            </Card>
            { isOpen && <Form name = {item.name} handleSubmit= {handleUpdate} /> }
         </div>
    )
}

export default withRouter(EditableItem);