import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {onPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = (props) => {

    let addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        store.dispatch(onPostActionCreator(text))
    }

    return (
        <StoreContext.Consumer>
            {
            (store) => {
            return (
                <MyPosts addPost = {addPost} newPostsData = {store.getState().postsPage.newPostsData} postsData = {store.getState().postsPage.postsData} dispatch = {store.dispatch} newPostText = {store.getState().postsPage.newPostText} onPostChange = {onPostChange}/>
            )
        }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer