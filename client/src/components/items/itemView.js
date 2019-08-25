import React, {useState, useEffect} from 'react';
import {Container, Table} from 'reactstrap';
import { getSingleItem } from './api';
import Spinnar from '../includes/spinner';

const ItemView = (props) => {
    const[item, setItem] = useState({});
    const[isLoding, setIsLoading] = useState(true);

    const itemId = props.match.params.itemId;
    const bucketlistId = props.match.params.bucketlistId;

    useEffect( ()=> {
        getSingleItem(bucketlistId, itemId)
        .then(res => {
            if(res.status === 200){
                setItem(res.data.item);
                setIsLoading(false);
            }
        })
    }, []);

    if(isLoding)
        return <Spinnar />
    return (
        <Container> 
            <h4> Bucketlist Item </h4>
            <Table> 
                <tbody> 
                    <tr>
                        <td>Name </td>
                        <td>{item.name} </td>
                     </tr>
                     <tr>
                        <td>Date added </td>
                        <td> {new Date(item.createdAt).toDateString()} </td>
                     </tr>
                     <tr>
                        <td>Last modified </td>
                        <td> {new Date(item.updatedAt).toDateString()} </td>
                     </tr>
                     <tr>
                        <td>Done </td>
                        <td> {item.done ? 'Yes' : 'No'} </td>
                     </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default ItemView;