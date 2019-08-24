import axios from 'axios';

const api = () => {
    const bearerToken = localStorage.getItem('bearerToken');
    axios.defaults.headers.common = {'Authorization': `Bearer ${bearerToken}`}
    axios.defaults.validateStatus = status => status < 500;

    export const createItem = async (id, data) => {
        try{
            return response = await axios.post(`/api/v1//bucketlists/${id}/items`, data)
        }catch(err){
            console.log(err);
            
        }
    }
    export const getItems = async (id) => {
        try{
            return response = await axios.get(`/api/v1//bucketlists/${id}/items`)
        }catch(err){
            console.log(err);
            
        }
    }
    export const getSingleItem = async (bucketlistsId, itemId) => {
        try{
            return response = await axios.get(`/api/v1//bucketlists/${bucketlistsId}/items/${itemId}`)
        }catch(err){
            console.log(err);
            
        }
    }
    export const updateItem = async (bucketlistsId, itemId, data) => {
        try{
            return response = await axios.put(`/api/v1//bucketlists/${bucketlistsId}/items/${itemId}`, data)
        }catch(err){
            console.log(err);
            
        }
    }
    export const deleteItem = async (bucketlistsId, itemId) => {
        try{
            return response = await axios.delet(`/api/v1//bucketlists/${bucketlistsId}/items/${itemId}`)
        }catch(err){
            console.log(err);
            
        }
    }
}