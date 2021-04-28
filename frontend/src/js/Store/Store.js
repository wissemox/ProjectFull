import {createStore , compose , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "../Reducer/index"


const middelwares =[thunk]

const store = createStore(
    rootReducer, 
    compose( 
        applyMiddleware(...middelwares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
); 

export default store