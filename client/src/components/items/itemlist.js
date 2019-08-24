import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import EditableItem from './editableItem';

const ItemList = (props) => {

    return (
        <div> 
            <Container> 
                <Row> 
                    {
                        props.items.map(item => 
                            <Col key = {item._id} xs='12' md={ {size: 8, offset: 2} } className='bucketlist' > 
                                <EditableItem item= {item} />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}
export default ItemList;