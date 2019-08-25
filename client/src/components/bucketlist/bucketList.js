import React from 'react';
import EditableBucketList from './editableBucketlist';
import {Container, Row, Col} from 'reactstrap';

const BucketList = ({list, update, delet}) => {

    if(!list || list.length === 0)
        return(
            <div> No content </div>
        )
    return (
        <div> 
            <Container> 
                <Row> 
                    {
                        list.map(item => 
                            <Col key = {item._id} xs='12' md={ {size: 8, offset: 2} } className='bucketlist' > 
                                <EditableBucketList
                                 bucketlist= {item} 
                                 update = {update}
                                 delet = {delet}
                                 />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default BucketList;