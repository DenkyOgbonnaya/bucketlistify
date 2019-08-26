import axios from 'axios';

    const bearerToken = localStorage.getItem('bearerToken');
    axios.defaults.headers.common = {'Authorization': `Bearer ${bearerToken}`}
    axios.defaults.validateStatus = status => status < 500;

    export const createItem = async (id, data) => {
        const confiq = {
            headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
        }
        try{
            return await axios.post(`/api/v1//bucketlists/${id}/items`, data, confiq)
        }catch(err){
            console.log(err);
            
        }
    }
    export const getItems = async (id, page, limit) => {
        const confiq = {
            headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
        }
        try{
            return await axios.get(`/api/v1//bucketlists/${id}/items?page=${page}&limit=${limit}`, confiq)
        }catch(err){
            console.log(err);
            
        }
    }
    export const searchItems = async (id, search) => {
        const confiq = {
            headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
        }
        try{
            return await axios.get(`/api/v1//bucketlists/${id}/items?q=${search}`, confiq)
        }catch(err){
            console.log(err);
            
        }
    }
    export const getSingleItem = async (bucketlistsId, itemId) => {
        const confiq = {
            headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
        }
        try{
            return await axios.get(`/api/v1//bucketlists/${bucketlistsId}/items/${itemId}`, confiq)
        }catch(err){
            console.log(err);
            
        }
    }
    export const updateItem = async (bucketlistsId, itemId, data) => {
        const confiq = {
            headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
        }
        try{
            return await axios.put(`/api/v1//bucketlists/${bucketlistsId}/items/${itemId}`, data, confiq)
        }catch(err){
            console.log(err);
            
        }
    }
    export const deleteItem = async (bucketlistsId, itemId) => {
        const confiq = {
            headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
        }
        try{
            return await axios.delete(`/api/v1//bucketlists/${bucketlistsId}/items/${itemId}`, confiq)
        }catch(err){
            console.log(err);
            
        }
    }
