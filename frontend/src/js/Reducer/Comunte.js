import {
    GETALLCOMMUNTE
     
 } from '../constant/Actiontype'
 
 
 
 const GetAllComunte={
   
     Comunte:[] ,
     
 }
 
 const ComunteReducer =(state=GetAllComunte , {type , payload}) =>{
     switch (type) {
         case  GETALLCOMMUNTE:
             
             return{
                 ...state, 
                 Comunte:payload
             }
           
              
         default:
             return state;
     }
 }
 export default ComunteReducer; 