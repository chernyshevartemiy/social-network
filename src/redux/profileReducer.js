import userAPI, { profileAPI } from "../api/api"

const addPost = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    newPostsData: [
        {id: 0, message: "I'm gonna make website today"},
        {id: 1, message: "I learnt React"},
        {id: 2, message: "Hello I'm gonna make you happy"},
    ],
    postsData: [
        {id: 1, message: "Hello my name is Jordan"},
        {id: 2, message: "31.05.2022 I played basketball only with myself does anyone want to play with me?"},
        {id: 3, message: "I like raining"},
        {id: 4, message: "Ilon Mask is my favorite  millionaire"},
        {id: 5, message: "I'm gonna watch Game of Thrones btw my favorite serial"},
        {id: 6, message: "Today 1 June of 2022 Elnur and I played Fortnite It was funny"},
    ],

	profile: null,
	status: "",
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: 
            let newPost = {
                id: 5, message: action.newPostText
			}
			state.newPostsData = [...state.newPostsData]
			newPost.id = state.newPostsData.length
			return {
				...state,
				newPostsData: [...state.newPostsData, newPost],
			}
			//stateCopy.newPostsData = [...state.newPostsData]
			//newPost.id = stateCopy.newPostsData.length
			//stateCopy.newPostsData.push(newPost);
			//   state.newPostText[0].message = "";
			//  return stateCopy;
		case SET_USER_PROFILE:
			return {...state, profile: action.profile}
		case SET_STATUS:
			return {...state, status: action.status}
        default: return state
    }
}

const setStatus = (status) => {
	return (
		{
			type: SET_STATUS,
			status
		}
	)
}

const addPostActionCreator = (newPostText) => {
    return (
        {
            type: addPost,
			newPostText
        }
    )
}


const setUserProfile = (profile) => {
	return (
		{
			type: SET_USER_PROFILE,
			profile: profile
		}
	)
}

const getUserProfile = (userId) => (dispatch) => {
	userAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data));
	})
}

const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setStatus(response.data))
	})
}

const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(response => {
		if(response.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}

export {updateStatus}
export {getStatus}
export {setStatus}
export {getUserProfile}
export {setUserProfile}
export {addPostActionCreator}
export default profileReducer
