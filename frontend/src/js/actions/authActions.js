import axios from 'axios'
import {USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERROS,
    
} from '../constant/Actiontype'

// //Register User 
 export const registerUser=(formData)=>async dispatch=>{
  try{ 
        const res = await axios.post('/auth/register/',formData)
        dispatch({
            type:REGISTER_USER, 
          payload:res.data
       })
     }catch(error){ 
      console.log(error)
     }
 }; 


// export const logiUser=(formData)=>async dispatch=>{
//     try{
//         const res = await axios.post('/api/auth/login', formData)
//         dispatch({
//             type:LOGIN_USER, 
//             payload: res.data
//         })
//     }catch(error){
//         console.log(error)
//     }
// }

// export const getAuthUser=()=>async dispatch=>{ 
//     try{
//         const Config = {headers:{'x-auth-token':localStorage.getItem('token')}}
//         const res = await axios.get('/api/auth/user',Config)
//         dispatch({
//             type:GET_AUTH_USER, 
//             payload:res.data
//         })
//     }
//     catch(error){
//         console.log(error)
//     }