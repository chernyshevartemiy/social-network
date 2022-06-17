import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import NewPost from "./NewPost/NewPost"
import React from "react";
import {addPostActionCreator, onPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostActionCreator(text))
    }

    let newPostsElements =
        props.newPostsData.map((e) => {
            return (
                <NewPost message = {e.message}/>
            )
        })

    let postsElements =
        props.postsData.map((e) => {
            return (
                <Post message = {e.message}/>
            )
        })

    return (
        <div className={s.Posts}>
            <div className={s.MyPosts}>
                MyPosts
            </div>
            <div className={s.AddPost}>
                <textarea placeholder={"What's new today?"}  className={s.TextArea} onChange={onPostChange} value={props.newPostText[0].message} ref={newPostElement}></textarea>
            </div>
            <div className={s.AddButton}>
                <button onClick={addPost} className={s.AddButton}>Add Post</button>
            </div>
            {newPostsElements}
            <div className={s.Post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts