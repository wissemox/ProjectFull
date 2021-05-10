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
        case  LOGIN_USER:
            localStorage.setItem('token',payload.token)
            return{
                ...state, 
                isLoading:false, 
                isAuth:true , 
                ...payload
            }
            case  REGISTER_USER:
                localStorage.setItem('token',payload.token)
                return{
                    ...state, 
                    isLoading:false, 
                    isAuth:true , 
                    ...payload
                }
                case  GET_AUTH_USER:
                    localStorage.setItem('token',payload.token)
                    return{
                        ...state, 
                        isLoading:false, 
                        isAuth:true , 
                        ...payload
                    }
        default:
            return state;
    }
}
export default authReducer; 