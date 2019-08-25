import React, {useState, useEffect} from 'react';
import BucketList from './bucketList';
import ToggleableForm from './toggleableForm';
import {Container} from 'reactstrap';
import SearchField from '../includes/searchField';
import {getBucketlists, searchBucketlists, createBucketlists, updateBucketlists, deleteBucketlists} from './api'
import Spinnar from '../includes/spinner';
import Paginate from '../includes/pagination';
import {useGlobal} from 'reactn';

const BucketlistDasboard = () => {
    const[bucketlists, setBucketlists] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[page, setPage] = useState(1);
    const[pages, setPages] = useState('');
    const[currentUser] = useGlobal('currentUser');


    useEffect( () => {
        handlePageChange(1);
    }, [])
    const create = (e, name)  => {
        e.preventDefault();

        createBucketlists({name, created_by: currentUser._id})
        .then(res => {
            if(res.status === 201){
                setBucketlists(bucketlists.concat(res.data.bucketList));
            }
            alert(res.data.message);
        })
        
    }
    const search  = (searchTerm) => {
        const created_by = currentUser._id;
        setIsLoading(true);
        searchBucketlists(created_by, searchTerm)
        .then(res => {
            if(res.status === 200){
                setBucketlists(res.data.bucketList);
                setPage(res.data.page);
                setPages(res.data.pages);
                setIsLoading(false);
            }else
                if(res.status === 204){
                    setBucketlists([]);
                    setPages(0);
                    setIsLoading(false)
                }
        })
    }
    const handlePageChange = page => {
        setIsLoading(true);
        const created_by = currentUser._id;
        getBucketlists(created_by, page, 20,)
        .then(res => {
            if(res.status === 200){
                setBucketlists(res.data.bucketList);
                setPage(res.data.page);
                setPages(res.data.pages);
                setIsLoading(false);
            }
        })
    }
    const update = data => {
        updateBucketlists(data._id, {name: data.name})
        .then(res => {
            if(res.status === 200){
                const{data} = res;
                setBucketlists(
                    bucketlists.map(item => item._id === data.bucketList._id ?
                    Object.assign({}, item, data.bucketList) : item))
            }
            alert(res.data.message);
        })
    }
    const delet = id => {
        setBucketlists(bucketlists.filter(item => item._id !== id));
        deleteBucketlists(id)
        .then(res => {
            if(res.status === 200){
            }
            alert(res.data.message);
        })

    }
    return (
        <div> 
            <Container>
                <SearchField handleSearch ={search} />
                    <br />
                <ToggleableForm create ={create} />
                {
                    isLoading ? <Spinnar /> : 
                    <BucketList 
                        list= {bucketlists} 
                        update={update} 
                        delet = {delet} 
                    />
                }
                <Paginate 
                pages = {pages}
                currentPage = {page}
                handlePageChange = {handlePageChange}
            />
            </Container>
        </div>
    )
}

export default BucketlistDasboard;