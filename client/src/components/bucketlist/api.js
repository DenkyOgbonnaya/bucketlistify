import axios from 'axios';

    const bearerToken = localStorage.getItem('bearerToken');
    axios.defaults.headers.common = {'Authorization': `Bearer ${bearerToken}`}
    axios.defaults.validateStatus = status => status < 500;
    
   export const createBucketlists = async (bucketlist) => {
    const confiq = {
        headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
    }
       try{
            return  await axios.post('/api/v1/bucketlists', bucketlist, confiq);
       }catch(err){
           console.log(err); 
       }
   }
   export const getBucketlists = async (created_by, page, limit) => {
    const confiq = {
        headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
    }
       try{
           return await axios.get(`/api/v1/bucketlists?created_by=${created_by}&page=${page}&limit=${limit}`, confiq);
       }catch(err){
           console.log(err);
           
       }
   }
   export const searchBucketlists = async (created_by, search) => {
    const confiq = {
        headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
    }
    try{
        return await axios.get(`/api/v1/bucketlists?created_by=${created_by}&q=${search}`, confiq);
    }catch(err){
        console.log(err);
        
    }
}
   export const getSingleBucketlists = async (id) => {
    const confiq = {
        headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
    }
        try{
            return await axios.get(`/api/v1/bucketlists/${id}`, confiq);
        }catch(err){
            console.log(err); 
        }
    }
    export const updateBucketlists = async (id, data) => {
        const confiq = {
            headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
        }
        try{
            return await axios.put(`/api/v1/bucketlists/${id}`, data, confiq);
        }catch(err){
            console.log(err); 
        }
    }
    export const deleteBucketlists = async (id) => {
        const confiq = {
            headers: {'Authorization': `Bearer ${localStorage.bearerToken}`}
        }
        try{
            return await axios.delete(`/api/v1/bucketlists/${id}`, confiq);
        }catch(err){
            console.log(err); 
        }
    }