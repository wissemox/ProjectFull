import {USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERROS,
    
} from '../constant/Actiontype'



const initialState={
    toke:localStorage.getItem('token') ,
    user:null ,
    isAuth:false,
    isLoading:true 
}

const authReducer =(state=initialState , {type , payload}) =>{
    switch (type) {
        case REGISTER_USER:
          
        default:
            return state;
    }
}
export default authReducer; 