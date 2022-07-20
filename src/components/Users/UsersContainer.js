import {connect} from "react-redux"
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/userReducer"
import React from 'react'
import Users from './Users'
import Preloader from "../common/preloader/Preloader";
import userAPI from '../../api/api'

class UsersC extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(50)  // response.data.totalCount
		})}
	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(pageNumber);
		userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items);
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

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersC)

export default UsersContainer
