import {addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return (
        {newPostsData: state.postsPage.newPostsData,
        newPostText: state.postsPage.newPostText,
        postsData: state.postsPage.postsData}
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }}
    )
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer
