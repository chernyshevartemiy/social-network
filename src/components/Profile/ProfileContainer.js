import {useParams, useLocation, useNavigate} from 'react-router-dom'
import * as axios from 'axios';
import Profile from './Profile';
import {setUserProfile} from "../../redux/profileReducer";
import React from 'react';
import {connect} from 'react-redux';


class ProfileContainerC extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).
			then(response => {
				this.props.setUserProfile(response.data)
			});
	}
	render() {
		return (
			<Profile {...this.props} profile = {this.props.profile}/>
		)
	}
}

let mapStateToProps = (state) => {
	return (
		{
			profile: state.postsPage.profile
		}
	)
}

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component {...props} router = {{location, navigate, params}}/>
		)
	}
	return ComponentWithRouterProp;
}

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainerC))


export default ProfileContainer
