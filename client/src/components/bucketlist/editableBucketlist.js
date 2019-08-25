import React, {useState, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Form from './form';
import moment from 'moment';
import {Card, CardBody, CardTitle, CardText, CardLink, CardFooter, Input, Label} from 'reactstrap';
import './style.css';

const EditableBucketlist = (props) => {
    const[isOpen, setIsOpen] = useState(false);
    const{bucketlist, update, delet} = props;

    const handleUpdateClick = e => {
        e.preventDefault();

        setIsOpen(!isOpen);
    }
    const onViewItemsClick = (e, bucketlistId) => {
        e.preventDefault();

        props.history.push(`/bucketlist/${bucketlistId}`);
    }
    const handleUpdate = (e, name) => {
        e.preventDefault();
        update({_id:bucketlist._id, name});
    }

    return (
        <div>
            <Card> 
                <span className='delete-bucketlist' onClick= { () => delet(bucketlist._id)}  > X </span>
                <CardBody> 
                    <CardTitle className='cardtitle'> <h4> {bucketlist.name} </h4> </CardTitle>
                    <CardText> 
                        <small className='text-muted'> Created: {moment(bucketlist.createdAt).fromNow(true)} </small>
                        {bucketlist.items && <small className='text-muted'> Items: { bucketlist.items.length} </small>}
                        <small className='text-muted'> Last updated: {moment(bucketlist.updatedAt).fromNow(true)} </small>
                    </CardText>
                </CardBody>
                <CardFooter className="text-muted cardfooter">
                    <CardLink onClick = {e => onViewItemsClick(e, bucketlist._id )} href="#" className='cardlink'>view items</CardLink>
                    <CardLink onClick= {handleUpdateClick} href="#" className='cardlink'> {isOpen ? 'Cancel' : 'Update'} </CardLink>
            
                </CardFooter>
            </Card>
            { isOpen && <Form name= {bucketlist.name} handleSubmit= {handleUpdate} /> }
         </div>
    )
}

export default withRouter(EditableBucketlist);