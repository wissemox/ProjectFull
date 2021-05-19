import axios from 'axios'
import {USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERROS,
    REST_PASSWORD, 
    GET_AUTH_USER02
    
} from '../constant/Actiontype'


 export const registerUser=(formData)=>async dispatch=>{
  try{
       const res = await axios.post('/auth/register/',formData)
         dispatch({
            type:REGISTER_USER, 
          payload:res.data
       })
    }catch(error){ 
       console.dir(error)
       dispatch({
          type:REGISTER_USER, 
         payload:error.response.data
       })
     }
 }; 


 export const logiUser=(formData)=>async dispatch=>{
    try{
       const res = await axios.post('/auth/login/', formData)
        dispatch({
           type:LOGIN_USER, 
            payload: res.data
         })
     }catch(error){
      
      console.dir(error)
      dispatch({
         type:AUTH_ERROS, 
        payload:error.response.data
      })
      
     }
 }

 export const Test=()=>async dispatch=>{
  try{
     const res = await axios.get('/')
      dispatch({
         type: GET_AUTH_USER ,
          payload: res.data
       })
   }catch(error){
       console.log(error)
   }
}
export const ResetPassword01=(email , token)=>async dispatch=>{
   try{
      const res = await axios.get(`/auth/password-reset/${email}/${token}/`)
       dispatch({
          type:REST_PASSWORD ,
           payload: res.data
        })
    }catch(error){
        console.log(error)
    }
 } 
 export const GetUserRefresh=(token)=>async dispatch=>{
   try{
      const res = await axios.post('/auth/token/refresh/',token)
       dispatch({
          type:GET_AUTH_USER02,
           payload: res.data
        })
    }catch(error){
        console.log(error)
    }
 }
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