import axios from 'axios';

    const bearerToken = localStorage.getItem('bearerToken');
    axios.defaults.headers.common = {'Authorization': `Bearer ${bearerToken}`}
    axios.defaults.validateStatus = status => status < 500;

    export const createItem = async (id, data) => {
        try{
            return await axios.post(`/api/v1//bucketlists/${id}/items`, data)
        }catch(err){
            console.log(err);
            
        }
    }
    export const getItems = async (id, page, limit) => {
        try{
            return await axios.get(`/api/v1//bucketlists/${id}/items?page=${page}&limit=${limit}`)
        }catch(err){
            console.log(err);
            
        }
    }
    export const searchItems = async (id, search) => {
        try{
            return await axios.get(`/api/v1//bucketlists/${id}/items?q=${search}`)
        }catch(err){
            console.log(err);
            
        }
    }
    export const getSingleItem = async (bucketlistsId, itemId) => {
        try{
            return await axios.get(`/api/v1//bucketlists/${bucketlistsId}/items/${itemId}`)
        }catch(err){
            console.log(err);
            
        }
    }
    export const updateItem = async (bucketlistsId, itemId, data) => {
        try{
            return await axios.put(`/api/v1//bucketlists/${bucketlistsId}/items/${itemId}`, data)
        }catch(err){
            console.log(err);
            
        }
    }
    export const deleteItem = async (bucketlistsId, itemId) => {
        try{
            return await axios.delete(`/api/v1//bucketlists/${bucketlistsId}/items/${itemId}`)
        }catch(err){
            console.log(err);
            
        }
    }
