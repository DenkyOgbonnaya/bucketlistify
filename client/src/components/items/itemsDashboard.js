import React, {useState, useEffect} from 'react';
import ItemList from './itemlist';
import './style.css'
import ToggleableForm from '../bucketlist/toggleableForm';
import {Container, Row, Col} from 'reactstrap';
import SearchField from '../includes/searchField';
import { getSingleBucketlists } from '../bucketlist/api';
import Spinnar from '../includes/spinner';
import { getItems, createItem, searchItems, updateItem, deleteItem } from './api';
import Paginate from '../includes/pagination';

const ItemsDashboard = (props) => {
    const[bucketList, setBucketList] = useState({});
    const[isLoading, setIsLoading] = useState(true);
    const[items, setItems] = useState([]);
    const[page, setPage] = useState(1);
    const[pages, setPages] = useState('');

    const bucketlistId = props.match.params.bucketlistId;
    

    useEffect( () => {
        getBucketlist();
        getBucketlistItems();
        setIsLoading(false);
    }, [])
    const getBucketlist = async () =>{
        try{
            const res = await getSingleBucketlists(bucketlistId);
            if(res.status === 200){
                setBucketList(res.data.bucketList);
            }
        }catch(err){
            console.log(err);
        }
    }
    const getBucketlistItems = async () => {
        const res = await getItems(bucketlistId, 1, 20);
        if(res.status === 200){
            setItems(res.data.items);
            setPage(res.data.page);
            setPages(res.data.pages);
        }
    }
    const create = (e, name)  => {
        e.preventDefault();

        createItem(bucketlistId, {name})
        .then(res => {
            if(res.status === 201){
                setItems(items.concat(res.data.item));
                alert(res.data.message)
            }
            alert(res.data.message);
        })
        
    }
    const search  = (searchTerm) => {
        setIsLoading(true);
        searchItems(bucketlistId, searchTerm)
        .then(res => {
            if(res.status === 200){
                setItems(res.data.items);
                setPage(res.data.page);
                setPages(res.data.pages);
            }else
                if(res.status === 204){
                    setItems([]);
                    setPages(0);
                }
            setIsLoading(false)
        })
    }
    const handlePageChange = page => {
        setIsLoading(true);
        getItems(bucketlistId, page, 20,)
        .then(res => {
            if(res.status === 200){
                setItems(res.data.items);
                setPage(res.data.page);
                setPages(res.data.pages);
            }
            else if(res.status === 204){
                setItems([]);
                setPages(0);
            }
            setIsLoading(false);
        })
    }
    const update = data => {
        updateItem(bucketlistId, data._id, data)
        .then(res => {
            if(res.status === 200){
                const{data} = res;
                setItems(
                    items.map(item => item._id === data.item._id ?
                    Object.assign({}, item, data.item) : item)
                )
            }
            alert(res.data.message);
        })
    }
    const delet = id => {
        setItems(items.filter(item => item._id !== id));
        deleteItem(bucketlistId, id)
        .then(res => {
            if(res.status === 200){
                alert(res.data.message);
            }
            alert(res.data.message);
        })

    }
    if(isLoading)
        return(
            <Spinnar />
        )
    return (
        <div> 
            <Container>
                <div className = 'bucketlist-details'> 
                    <h3> {bucketList.name} </h3>
                    <p> #<b> {bucketList._id} </b> </p>
                    <span> created: {new Date(bucketList.createdAt).toDateString()} </span>
                    <span> last updated: {new Date(bucketList.updatedAt).toDateString()} </span>
                </div>
                <SearchField handleSearch ={search} />
                    <br />
                <ToggleableForm create ={create} />
                {
                    isLoading ? <Spinnar /> : 
                    <ItemList 
                        items ={items}
                        update={update} 
                        delet = {delet} 
                        bucketlistId= {bucketlistId}
                    />
                }
                <Paginate 
                    currentPage = {page}
                    pages = {pages}
                    handlePageChange = {handlePageChange}
                />
            </Container>
        </div>
    )
}
export default ItemsDashboard;   