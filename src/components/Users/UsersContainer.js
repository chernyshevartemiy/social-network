import {connect} from "react-redux"
import {followAC, setUserAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC} from "../../redux/userReducer"
import * as axios from 'axios'
import React from 'react'
import Users from './Users'

class UsersC extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
		this.props.setUsers(response.data.items)
		})}

	constructor(props) {
		super(props);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(50)  // response.data.totalCount
		});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
				this.props.setUsers(response.data.items);
				})};

	render() {
		return (
			<Users totalUsersCount = {this.props.totalUsersCount}
			pageSize = {this.props.pageSize}
			currentPage = {this.props.currentPage}
			onPageChanged = {this.onPageChanged}
			users = {this.props.users}
			follow = {this.props.follow}
			unfollow = {this.props.unfollow}
			/>
			)
		}
}

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
