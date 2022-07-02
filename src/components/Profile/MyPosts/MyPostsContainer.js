import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {onPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.dispatch(onPostActionCreator(text))
    }

    return (
        <MyPosts addPost = {addPost} newPostsData = {props.newPostsData} postsData = {props.postsData} dispatch = {props.dispatch} newPostText = {props.newPostText} onPostChange = {onPostChange} />
    )
}

export default MyPostsContainer