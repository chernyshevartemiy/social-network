import {addPostActionCreator} from "../../../redux/profileReducer";
import {onPostActionCreator} from "../../../redux/profileReducer";
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
            onPostChange: (text) => {
            dispatch(onPostActionCreator(text))

            },
            addPost: () => {
            dispatch(addPostActionCreator())
        }}
    )
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer
