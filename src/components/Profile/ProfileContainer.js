import {
	useParams,
	useLocation,
	useNavigate,
} from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import React from "react";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect"
import { compose } from "redux";

class ProfileContainerC extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = 24989;
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		return <Profile {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>;
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.postsPage.profile,
		status: state.postsPage.status,
	};
};

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}
	return ComponentWithRouterProp;
}

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
)(ProfileContainerC)

