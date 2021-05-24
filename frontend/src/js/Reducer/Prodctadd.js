import {
    ADDPRDUCT,
    ErroreProduct
} from '../constant/Actiontype'



const Product={
  
    data:null ,
    
}

const authReducer =(state=Product , {type , payload}) =>{
    switch (type) {
        case   ADDPRDUCT:
            
            return{
                ...state, 
            
                ...payload
            }
          
            case   ErroreProduct:

                return{
                    ...state, 
                
                    ...payload
                }
              
        default:
            return state;
    }
}
export default authReducer; 