import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import EditableItem from './editableItem';

const ItemList = ({items, update, delet, bucketlistId}) => {
    if(!items || items.length < 1)
        return(
            <div>No content </div>
        )
    return (
        <div> 
            <Container> 
                <Row> 
                    {
                        items.map(item => 
                            <Col key = {item._id} xs='12' md={ {size: 8, offset: 2} } className='bucketlist' > 
                                <EditableItem 
                                    item= {item} 
                                    update = {update}
                                    delet = {delet}
                                    bucketlistId= {bucketlistId}
                                />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}
export default ItemList;