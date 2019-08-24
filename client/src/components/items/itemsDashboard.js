import React, {useState, useEffect} from 'react';
import ItemList from './itemlist';
import './style.css'
import ToggleableForm from '../bucketlist/toggleableForm';
import {Container, Row, Col} from 'reactstrap';
import SearchField from '../includes/searchField';

const list = [
    {_id: 'llfdkkg', name: 'Goto france', createdAt: new Date(), done: 'jjfkkf', updatedAt: new Date()},
    {_id: 'llfvkkg', name: 'Eat frog',createdAt: new Date(), done: 'tr', updatedAt: new Date()},
    {_id: 'lslfkkg', name: 'Bucket1', createdAt: new Date(), done: 'false', updatedAt: new Date()},
    {_id: 'llbfkkg', name: 'Bucket1 ia', createdAt: new Date(), done: 'true', updatedAt: new Date()}
]
const ItemsDashboard = (props) => {
    const[items, setItems] = useState([]);
    //const bucklistId = props.params.match.bucklistId;

    useEffect( () => {

    }, [])
    return (
        <div> 
            <Container>
                <div className = 'bucketlist-details'> 
                    <h3> Bucket4 </h3>
                    <p> #<b>hhjjduhd </b> </p>
                    <span> created: 25 june </span>
                    <span> last updated: 28 june </span>
                </div>
                <SearchField />
                <br />
                <ToggleableForm />
            
                <ItemList items ={list} />
            </Container>
        </div>
    )
}
export default ItemsDashboard;   