import React, {useState, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import Form from './form';
import {Card, CardBody, CardTitle, CardText, CardLink, CardFooter, Input, Label} from 'reactstrap';
import './style.css';

const EditableBucketlist = (props) => {
    const[isOpen, setIsOpen] = useState(false);
    const{bucketlist} = props;

    const handleUpdateClick = e => {
        e.preventDefault();

        setIsOpen(!isOpen);
    }
    const onViewItemsClick = (e, bucketlistId) => {
        e.preventDefault();

        props.history.push(`/bucketlist/${bucketlistId}`);
    }

    return (
        <div>
            <Card> 
                <span className='delete-bucketlist' > X </span>
                <CardBody> 
                    <CardTitle className='cardtitle'> {bucketlist.name} </CardTitle>
                    <CardText> 
                        <small className='text-muted'> Created: {new Date(bucketlist.createdAt).toDateString()} </small>
                        {bucketlist.items && <small className='text-muted'> Items: { bucketlist.items.length} </small>}
                        <small className='text-muted'> Last updated: {new Date(bucketlist.updatedAt).toDateString() } </small>
                    </CardText>
                </CardBody>
                <CardFooter className="text-muted cardfooter">
                    <CardLink onClick = {e => onViewItemsClick(e, bucketlist._id )} href="#" className='cardlink'>view items</CardLink>
                    <CardLink onClick= {handleUpdateClick} href="#" className='cardlink'> {isOpen ? 'Cancel' : 'Update'} </CardLink>
            
                </CardFooter>
            </Card>
            { isOpen && <Form /> }
         </div>
    )
}

export default withRouter(EditableBucketlist);