const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
import userImg from '../img/profile.png'


let initialState = {
	users: [
		
	]
}

const userReducer = (state =  initialState, action) => {
	switch(action.type) {
		case FOLLOW: 
			return {
				...state,
				users: state.users.map((e) => {
					if (e.id === action.userId) {
						return {...e, followed: true} 
					}
					return e
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((e)  => {
					if (e.id === action.userId) {
						return {...e, followed: false}
					}
					return e
				})
			}
		case SET_USERS: {
			return {...state, users: [...state.users, ...action.users]}
		}
		default: return state;
	}
}


const followAC = (userId) => ({type: FOLLOW, userId})
const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
const setUserAC = (users) => ({type: SET_USERS, users})

export {setUserAC}
export {followAC}
export {unfollowAC}
export default userReducer
