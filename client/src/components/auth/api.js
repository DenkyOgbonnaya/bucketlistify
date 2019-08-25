import axios from 'axios';

export const login = async (data) => {
    try{
        return await axios.post('/api/v1/auth/login', data)
    }catch(err){
        console.log(err);
        
    }
}
export const signup = async (data) => {
    try{
        return await axios.post('/api/v1/auth/signup', data)
    }catch(err){
        console.log(err);
        
    }
}