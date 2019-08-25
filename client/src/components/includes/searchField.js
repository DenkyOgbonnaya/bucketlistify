import React, {useState} from 'react';
import propTypes from 'prop-types';
import {Input, InputGroup, InputGroupAddon, Button} from 'reactstrap';


const SearchField = ({ handleSearch}) => {
    const[search, setSearch] = useState('');

    return (
        <div> 
            <InputGroup>
                <Input placeholder = 'Search here..'  onChange = { e => setSearch(e.target.value)}  />
                <InputGroupAddon addonType='append' ><Button color='success' onClick = {() => handleSearch(search)} >Search</Button></InputGroupAddon>
            </InputGroup>
        </div>
    )
}
SearchField.propTypes = {
    setSearch: propTypes.func,
    handleSearch: propTypes.func
}
export default SearchField;