import axios from 'axios';

const api = () => {
    const bearerToken = localStorage.getItem('bearerToken');
    axios.defaults.headers.common = {'Authorization': `Bearer ${bearerToken}`}
    axios.defaults.validateStatus = status => status < 500;
    
   export const createBucketlist = async (bucketlist) => {
       try{
            return response = await axios.post('/api/v1/bucketlist', bucketlist);
       }catch(err){
           console.log(err); 
       }
   }
   export const getBucketlist = async () => {
       try{
           return response = await axios.get('/api/v1/bucketlists');
       }catch(err){
           console.log(err);
           
       }
   }
   export const getSingleBucketlist = async (id) => {
        try{
            return response = await axios.get(`/api/v1/bucketlists/${id}'`);
        }catch(err){
            console.log(err); 
        }
    }
    export const updateucketlist = async (id, data) => {
        try{
            return response = await axios.put(`/api/v1/bucketlists/${id}', data`);
        }catch(err){
            console.log(err); 
        }
    }
    export const deleteBucketlist = async (id) => {
        try{
            return response = await axios.delete(`/api/v1/bucketlists/${id}'`);
        }catch(err){
            console.log(err); 
        }
    }
}