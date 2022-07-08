import Users from "./Users"
import {connect} from "react-redux"
import {followAC, setUserAC, unfollowAC} from "../../redux/userReducer"

let mapStateToProps = (state) => {
	return (
		{
			users: state.userPage.users
		}
	)
}

let mapStateToDispatch = (dispatch) => {
	return (
		{
			follow: (userId) => {
				dispatch(followAC(userId));
			},
			unfollow: (userId) => {
				dispatch(unfollowAC(userId));
			},
			setUsers: (users) => {
				dispatch(setUserAC(users));
			}
		}
	)
}

const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users)

export default UsersContainer