import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducersBunch = combineReducers({
    postsPage: profileReducer,
    dialogsPage: dialogsReducer,

})

let store = createStore(reducersBunch);


export default store