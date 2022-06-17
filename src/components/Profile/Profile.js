import s from "./profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.Profile}>
            <ProfileInfo/>
            <MyPosts newPostsData = {props.newPostsData} postsData = {props.postsData} dispatch = {props.dispatch} newPostText = {props.newPostText}/>
        </div>)
}

export default Profile