const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
	users: [
		
	],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
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
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}
		default: return state;
	}
}


const followAC = (userId) => ({type: FOLLOW, userId})
const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
const setUserAC = (users) => ({type: SET_USERS, users})
const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export {setIsFetchingAC}
export {setUsersTotalCountAC}
export {setCurrentPageAC}
export {setUserAC}
export {followAC}
export {unfollowAC}
export default userReducer
