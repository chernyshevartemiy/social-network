import Users from "./Users"
import {connect} from "react-redux"
import {followAC, setUserAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC} from "../../redux/userReducer"
import UsersC from "./UsersC"
let mapStateToProps = (state) => {
	return (
		{
			users: state.userPage.users,
			pageSize :state.userPage.pageSize,
			totalUsersCount: state.userPage.totalUsersCount,
			currentPage: state.userPage.currentPage,
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
			},
			setCurrentPage: (pageNumber) => {
				dispatch(setCurrentPageAC(pageNumber))
			},
			setTotalUsersCount: (totalCount) => {
				dispatch(setUsersTotalCountAC(totalCount))
			}
		}
	)
}

const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(UsersC)

export default UsersContainer
