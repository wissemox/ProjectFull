import {USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERROS,
    GET_AUTH_USER02
    
} from '../constant/Actiontype'



const initialState={
    toke:localStorage.getItem('token') ,
    data:null ,
    isAuth:false,
    access:null,
    errors:null,
    Acces02:false,
    isLoading:true 
}

const authReducer =(state=initialState , {type , payload}) =>{
    switch (type) {
        case  LOGIN_USER:
            localStorage.setItem('tokens',payload.data.tokens.refresh)
            
            return{
                ...state, 
                Acces02:true,
                isLoading:false, 
                isAuth:true , 
               
                ...payload
            }
            case  REGISTER_USER:
                localStorage.setItem('token',payload.token)
                localStorage.setItem('profile_pourcentage',payload.data.profile_pourcentage)
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
                    case  GET_AUTH_USER:
                        localStorage.setItem('token',payload.token)
                        return{
                            ...state, 
                            isLoading:false, 
                            isAuth:true , 
                            ...payload
                        }
                    case  GET_AUTH_USER02:
                       
                        return{
                            ...state, 
                            Acces02:true,
                            isLoading:false, 
                            isAuth:true , 
                            ...payload
                        }
        default:
            return state;
    }
}
export default authReducer; 