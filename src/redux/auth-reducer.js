const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,

};

const authReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case SET_USER_DATA:
			return (
				{
					...state,
					...action.data,
					isAuth: true,
					
				}
			);
		default: return state
	}
}

const setUserData = (id, email, login) => {
	return (
		{
			type: SET_USER_DATA,
			data: {id, email, login}
		}
	)
}


export {setUserData}
export default authReducer;