import { useParams, useLocation, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profileReducer";
import React from "react";
import { connect } from "react-redux";

class ProfileContainerC extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getUserProfile(userId)
	}
	render() {
		return <Profile {...this.props} profile={this.props.profile} />;
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.postsPage.profile,
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

const ProfileContainer = connect(mapStateToProps, { getUserProfile })(
	withRouter(ProfileContainerC)
);

export default ProfileContainer;
