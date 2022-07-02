import s from "./profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.Profile}>
            <ProfileInfo/>
            <MyPostsContainer newPostsData = {props.newPostsData} postsData = {props.postsData} dispatch = {props.dispatch} newPostText = {props.newPostText}/>
        </div>
    )
}

export default Profile