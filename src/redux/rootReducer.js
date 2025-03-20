//take all the slices that we are creating (combined all the reducers)
import { combineReducers } from "redux"; 
import storage from "redux-persist/lib/storage";
import appReducer from './slices/app'
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

//slices

//create root configuration (how data store and how read out data from store)
const rootPersistConfig = {
    key:'root',
    storage,
    keyPrefix: 'redux-'
    // whitelist:[],
    // blacklist:[]
}

//create combine reducer
const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    users: userReducer,

});

export {rootPersistConfig, rootReducer}