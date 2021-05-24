import {
    AUTH_ERROS
} from '../constant/Actiontype'



const ERROS={
  
    errors:null ,
    
}

const Errore =(state=ERROS , {type , payload}) =>{
    switch (type) {
        case   AUTH_ERROS:
            
            return{
                ...state, 
            
                ...payload
            }
          
              
        default:
            return state;
    }
}
export default Errore; 