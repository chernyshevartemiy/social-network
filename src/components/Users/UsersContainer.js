import { connect } from "react-redux";
import {
	getUsers,
	follow,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
} from "../../redux/userReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import withAuthRedirect from "../../hoc/WithAuthRedirect";

class UsersC extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
		this.props.setCurrentPage(pageNumber);
	};
	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		);
	}
}

let withRedirect = withAuthRedirect(UsersC)

let mapStateToProps = (state) => {
	return {
		users: state.userPage.users,
		pageSize: state.userPage.pageSize,
		totalUsersCount: state.userPage.totalUsersCount,
		currentPage: state.userPage.currentPage,
		followingInProgress: state.userPage.followingInProgress,
	};
};

const UsersContainer = connect(mapStateToProps, {
	follow,
	getUsers,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
})(withRedirect);

export default UsersContainer;
