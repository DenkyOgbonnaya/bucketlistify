import React from 'react';
import BucketList from './bucketList';
import ToggleableForm from './toggleableForm';
import {Container, Row, Col} from 'reactstrap';
import SearchField from '../includes/searchField';

const list = [
    {_id: 'llfdkkg', name: 'Bucket1', items: [1,2,2,3,4],createdAt: new Date(), created_by: 'jjfkkf', updatedAt: new Date()},
    {_id: 'llfvkkg', name: 'Bucket1', items: [1,2,2,3,4],createdAt: new Date(), created_by: 'jjfkkf', updatedAt: new Date()},
    {_id: 'lslfkkg', name: 'Bucket1', items: [1,2,2,3,4],createdAt: new Date(), created_by: 'jjfkkf', updatedAt: new Date()},
    {_id: 'llbfkkg', name: 'Bucket1', items: [1,2,2,3,4],createdAt: new Date(), created_by: 'jjfkkf', updatedAt: new Date()}
]
const BucketlistDasboard = () => {

    return (
        <div> 
            <Container>
                <SearchField />
                    <br />
                <ToggleableForm />
                <BucketList list= {list} />
            </Container>
        </div>
    )
}

export default BucketlistDasboard;