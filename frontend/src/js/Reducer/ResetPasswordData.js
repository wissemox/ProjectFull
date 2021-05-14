import {
    REST_PASSWORD
    
} from '../constant/Actiontype'



const ResetPassword01={
  
    data:null ,
    
}

const authReducer =(state=ResetPassword01 , {type , payload}) =>{
    switch (type) {
        case   REST_PASSWORD:
            
            return{
                ...state, 
            
                ...payload
            }
          
             
        default:
            return state;
    }
}
export default authReducer; 