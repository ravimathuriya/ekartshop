import { legacy_createStore as createStore } from 'redux';
// import reducer from "./Reducer";

import { applyMiddleware, } from "redux";
import { thunk } from "redux-thunk";
import rootreducer from './Reducer';


const store = createStore(rootreducer, {}, applyMiddleware(thunk))

export default store