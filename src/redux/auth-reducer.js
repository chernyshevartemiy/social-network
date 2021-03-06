const SET_USER_DATA = "SET_USER_DATA";
import {authAPI} from "../api/api"

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true,
			};
		default:
			return state;
	}
};

const setAuthUserData = (id, email, login) => {
	return {
		type: SET_USER_DATA,
		data: { id, email, login },
	};
};

const getAuthUserData = () => (dispatch) => {
	return authAPI.me().then((response) => {
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data;
			dispatch(setAuthUserData(id, email, login));
		}
	});
};

export { getAuthUserData }
export default authReducer;
