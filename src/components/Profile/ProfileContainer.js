import * as axios from 'axios'
import Profile from './Profile'
import {setUserProfile} from "../../redux/profileReducer";
import React from 'react'
import {connect} from 'react-redux'

class ProfileContainerC extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).
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

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerC)
export default ProfileContainer
