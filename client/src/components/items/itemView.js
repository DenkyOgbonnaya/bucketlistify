import React from 'react';
import {Container, Table} from 'reactstrap';

const ItemView = () => {
    return (
        <Container> 
            <h4> Bucketlist Item </h4>
            <Table> 
                <tbody> 
                    <tr>
                        <td>Name </td>
                        <td>A trip to france </td>
                     </tr>
                     <tr>
                        <td>Date added </td>
                        <td>23, sept </td>
                     </tr>
                     <tr>
                        <td>Last modified </td>
                        <td>25, Aug </td>
                     </tr>
                     <tr>
                        <td>Done </td>
                        <td>False </td>
                     </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default ItemView;