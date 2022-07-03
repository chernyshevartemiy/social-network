import s from "./profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile