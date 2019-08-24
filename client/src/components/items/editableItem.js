import React, {useState, Fragment} from 'react';
import Form from '../bucketlist/form';
import {withRouter} from 'react-router-dom';
import {Card, CardBody, CardTitle, CardText, CardLink, CardFooter, Input, Label} from 'reactstrap';

const EditableItem = (props) => {
    const[isOpen, setIsOpen] = useState(false);
    const{item} = props;

    const handleUpdateClick = e => {
        e.preventDefault();

        setIsOpen(!isOpen);
    }
    const onViewClick = (e, itemId) => {
        e.preventDefault();

        props.history.push(`/item/${itemId}`)
    }

    return (
        <div>
            <Card> 
                <span className='delete-item' > X </span>
                <CardBody> 
                    <CardTitle className='cardtitle'> {item.name} </CardTitle>
                    <CardText> 
                        <small className='text-muted'> Created: {new Date(item.createdAt).toDateString()} </small>
                        <small className='text-muted'> item: </small>}
                        <small className='text-muted'> Last updated: {new Date(item.updatedAt).toDateString() } </small>
                    </CardText>
                </CardBody>
                <CardFooter className="text-muted cardfooter">
                    <CardLink onClick= { e => onViewClick(e, item._id)} href="#" className='cardlink'>view</CardLink>
                    <CardLink onClick= {handleUpdateClick} href="#" className='cardlink'> {isOpen ? 'Cancel' : 'Update'} </CardLink>
                    <Label>
                        <Input className='checkbox' type='checkbox' /> {''} Done
                    </Label>
            
                </CardFooter>
            </Card>
            { isOpen && <Form /> }
         </div>
    )
}

export default withRouter(EditableItem);