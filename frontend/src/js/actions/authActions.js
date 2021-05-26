import axios from 'axios'
import {USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERROS,
    REST_PASSWORD, 
    GET_AUTH_USER02,
    GETALLCOMMUNTE,
    ADDPRDUCT,
    ErroreProduct,
    PRODUCT_LIST,
    DELETEPRODUCT
} from '../constant/Actiontype'


 export const registerUser=(formData)=>async dispatch=>{
  try{
       const res = await axios.post('/auth/register/',formData)
         dispatch(
          
            {
            type:REGISTER_USER, 
          payload:res.data,
  
       })
    }catch(error){ 
     
         dispatch({
         type:AUTH_ERROS, 
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

 export const Getallcomunte=()=>async dispatch=>{
   try{
      const res = await axios.get('/auth/communate/all')
       dispatch({
          type:GETALLCOMMUNTE,
           payload: res.data
        })
    }catch(error){
        console.log(error)
    }
 } 


 export const PostProduc=(formDasta)=>async dispatch=>{
   try{
      const config = {
         headers: {
           'Authorization': 'Bearer ' + localStorage.getItem('tokenacces')
         }
       }
       const res = await axios.post('/produitupload/',formDasta,config)
       dispatch({
           type:ADDPRDUCT, 
           payload: res.data
       })
    }catch(error){
         
      console.dir(error)
      dispatch({
         type:ErroreProduct, 
        payload:error.response.data
      })
    }
 } 

 export const ProductList=()=>async dispatch=>{
   try{
      const config = {
         headers: {
           'Authorization': 'Bearer ' + localStorage.getItem('tokenacces')
         }
       }
      const res = await axios.get(`/produit`,config)
       dispatch({
          type: PRODUCT_LIST ,
           payload: res.data
        })
    }catch(error){
        console.log(error)
    }
 }



 //Delete 
 export const DeleteProduct=(formDasta)=>async dispatch=>{
   try{
      const config = {
         headers: {
           'Authorization': 'Bearer ' + localStorage.getItem('tokenacces')
         }
       }
       const res = await axios.delete(`/produitdelete/${formDasta}`,config)
       dispatch(ProductList())
    }catch(error){
         
      console.dir(error)
     
    }
 } 


 export const UpdateProduct=(slug,formData)=>async dispatch=>{
   try{
      const config = {
         headers: {
           'Authorization': 'Bearer ' + localStorage.getItem('tokenacces')
         }
       }
       const res = await axios.put(`/produitupdate/${slug}`,formData,config)
       dispatch(ProductList())
    }catch(error){
         
      console.dir(error)
     
    }
 } 
//  export const DeleteProduct = (formDasta)=>(dispatch)=>{
//    const config = {
//       headers: {
//         'Authorization': 'Bearer ' + localStorage.getItem('tokenacces')
//       }
//     }
//    axios.put(`/produitdelete/${formDasta}`,config)
//    .then(res => dispatch(ProductList()))
//    .catch(err=>console.log(err))
//  }
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