import * as axios from 'axios'
import Profile from './Profile'
import {setUserProfile} from './../../redux/profileReducer'
class ProfileContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).
			then(response => {
				this.setUserProfile(response.data);
			})
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
			profile: state.profilePage.profile
		}
	)
}

connect(mapStateToProps, {setUserProfile})(ProfileContainer)

export default ProfileContainer
