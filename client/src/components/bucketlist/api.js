import axios from 'axios';

    const bearerToken = localStorage.getItem('bearerToken');
    axios.defaults.headers.common = {'Authorization': `Bearer ${bearerToken}`}
    axios.defaults.validateStatus = status => status < 500;
    
   export const createBucketlists = async (bucketlist) => {
       try{
            return  await axios.post('/api/v1/bucketlists', bucketlist);
       }catch(err){
           console.log(err); 
       }
   }
   export const getBucketlists = async (created_by, page, limit) => {
       try{
           return await axios.get(`/api/v1/bucketlists?created_by=${created_by}&page=${page}&limit=${limit}`);
       }catch(err){
           console.log(err);
           
       }
   }
   export const searchBucketlists = async (created_by, search) => {
    try{
        return await axios.get(`/api/v1/bucketlists?created_by=${created_by}&q=${search}`);
    }catch(err){
        console.log(err);
        
    }
}
   export const getSingleBucketlists = async (id) => {
        try{
            return await axios.get(`/api/v1/bucketlists/${id}`);
        }catch(err){
            console.log(err); 
        }
    }
    export const updateBucketlists = async (id, data) => {
        try{
            return await axios.put(`/api/v1/bucketlists/${id}`, data);
        }catch(err){
            console.log(err); 
        }
    }
    export const deleteBucketlists = async (id) => {
        try{
            return await axios.delete(`/api/v1/bucketlists/${id}`);
        }catch(err){
            console.log(err); 
        }
    }