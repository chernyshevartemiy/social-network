import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import React from "react";
import { reduxForm, Field } from "redux-form";

const MyPosts = (props) => {
	let newPostElement = React.createRef();

	let addPost = (values) => {
		props.addPost(values.newPostText);
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.onPostChange(text);
	};

	let newPostsElements = props.newPostsData.map((e) => {
		return <NewPost key={e.id} message={e.message} />;
	});

	let postsElements = props.postsData.map((e) => {
		return <Post key={e.id} message={e.message} />;
	});

	return (
		<div className={s.Posts}>
			<div className={s.MyPosts}>MyPosts</div>
			<div className={s.AddButton}>
				<AddNewPostFormRedux onSubmit={addPost} />
			</div>
			{newPostsElements}
			<div className={s.Post}>{postsElements}</div>
		</div>
	);
};

const AddNewPostForm = (props) => {
	return (
		<form className={s.AddPost} onSubmit={props.handleSubmit}>
			<div>
				<Field
					name={"newPostText"}
					placeholder={"What's new today?"}
					className={s.TextArea}
					component="textarea"
				></Field>
			</div>
			<button className={s.AddButton}>Add Post</button>
		</form>
	);
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
	AddNewPostForm
);

export default MyPosts;
