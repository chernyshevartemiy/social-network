import userAPI from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((e) => {
					if (e.id === action.userId) {
						return { ...e, followed: true };
					}
					return e;
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((e) => {
					if (e.id === action.userId) {
						return { ...e, followed: false };
					}
					return e;
				}),
			};
		case SET_USERS: {
			return { ...state, users: action.users };
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage };
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.count };
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching };
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [state.followingInProgress, action.userId]
					: state.followingInProgress.filter(
							(id) => id != action.userId
					  ),
			};
		}
		default:
			return state;
	}
};

const followSuccess = (userId) => ({ type: FOLLOW, userId });
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
const setTotalUsersCount = (totalUsersCount) => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount,
});
const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});
const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
});

const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		userAPI.getUsers(currentPage, pageSize).then((data) => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(100)); // data.totalCount
		});
	};
};

const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		userAPI.follow(userId).then((response) => {
			if (response.data.resultCode == 0) {
				dispatch(followSuccess(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		});
	};
};

const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		userAPI.unfollow(userId).then((response) => {
			if (response.data.resultCode == 0) {
				dispatch(unfollowSuccess(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		});
	};
};


export { unfollow }
export { follow };
export { getUsers };
export { setTotalUsersCount };
export { setCurrentPage };
export { setUsers };
export { followSuccess };
export { unfollowSuccess };
export default userReducer;
