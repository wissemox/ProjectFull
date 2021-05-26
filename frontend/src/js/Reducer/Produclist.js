import {
    PRODUCT_LIST
    
} from '../constant/Actiontype'



const ResetPassword01={
  
    results:[] ,
    
}

const Produclist =(state=ResetPassword01 , {type , payload}) =>{
    switch (type) {
        case   PRODUCT_LIST:
            
            return{
                ...state, 
            
                results:payload
            }
          
             
        default:
            return state;
    }
}
export default Produclist; 