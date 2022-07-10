import {connect} from "react-redux"
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/userReducer"
import * as axios from 'axios'
import React from 'react'
import Users from './Users'
import Preloader from "../common/preloader/Preloader";

class UsersC extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(50)  // response.data.totalCount
		})}
	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(pageNumber);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items);
				})};

	render() {
		return (
			<>
			{ this.props.isFetching ? <Preloader/> : null }
			<Users totalUsersCount = {this.props.totalUsersCount}
			pageSize = {this.props.pageSize}
			currentPage = {this.props.currentPage}
			onPageChanged = {this.onPageChanged}
			users = {this.props.users}
			follow = {this.props.follow}
			unfollow = {this.props.unfollow}
		/>
			</>
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
			isFetching: state.userPage.isFetching
		}
	)
}

let mapStateToDispatch = (dispatch) => {
	return (
		{
			follow: (userId) => {
				dispatch(follow(userId));
			},
			unfollow: (userId) => {
				dispatch(unfollow(userId));
			},
			setUsers: (users) => {
				dispatch(setUsers(users));
			},
			setCurrentPage: (pageNumber) => {
				dispatch(setCurrentPage(pageNumber))
			},
			setTotalUsersCount: (totalCount) => {
				dispatch(setTotalUsersCount(totalCount))
			},
			toggleIsFetching: (isFetching) => {
				dispatch(toggleIsFetching(isFetching))
			}
		}
	)
}

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersC)

export default UsersContainer
