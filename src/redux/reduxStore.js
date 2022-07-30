import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./userReducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import {reducer  as  formReducer} from "redux-form"

let reducersBunch = combineReducers({
    postsPage: profileReducer,
	dialogsPage: dialogsReducer,
	userPage: userReducer,
	auth: authReducer,
	form: formReducer,
})

let store = createStore(reducersBunch, applyMiddleware(thunkMiddleware));

window.store = store

export default store
