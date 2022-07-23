import s from "./profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <ProfileInfo status = {props.status} updateStatus = {props.updateStatus} profile = {props.profile} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
