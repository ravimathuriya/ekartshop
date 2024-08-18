import reducer from "./reducer";
import { combineReducers } from 'redux'

const rootreducer =  combineReducers({
    reducer: reducer,
})

export default rootreducer