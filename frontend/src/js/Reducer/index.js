import {combineReducers} from 'redux'
import authReducer from './authReducer' 
import ResetPassword01 from './ResetPasswordData'
import ComunteReducer from './Comunte'
import Prodctadd from './Prodctadd'
import Errore from './Errore'
import Produclist from './Produclist'

export default combineReducers({authReducer , ResetPassword01,ComunteReducer ,Prodctadd,Errore,Produclist })