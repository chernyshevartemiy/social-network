const addPost = "ADD-POST"
const updateNewPost = "UPDATE-NEW-POST"

const profileReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 4, message: state.newPostText[0].message
            }
            state.newPostsData.push(newPost);
            state.newPostText[0].message = "";
            return state;
        case updateNewPost:
            state.newPostText[0].message = action.newText;
            return state;
        default: return state
    }
}

const addPostActionCreator = () => {
    return (
        {
            type: addPost
        }
    )
}

const onPostActionCreator = (text) => {
    return (
        {
            type: updateNewPost,
            newText: text
        }
    )
}

export {onPostActionCreator}
export {addPostActionCreator}
export default profileReducer