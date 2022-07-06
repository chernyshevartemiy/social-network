const addPost = "ADD-POST"
const updateNewPost = "UPDATE-NEW-POST"

let initialState = {
    newPostsData: [
        {id: 0, message: "I'm gonna make website today"},
        {id: 1, message: "I learnt React"},
        {id: 2, message: "Hello I'm gonna make you happy"},
    ],
    postsData: [
        {id: 1, message: "Hello my name is Jordan"},
        {id: 2, message: "31.05.2022 I played basketball only with myself does anyone want to play with me?"},
        {id: 3, message: "I like raining"},
        {id: 4, message: "Ilon Mask is my favorite  millionaire"},
        {id: 5, message: "I'm gonna watch Game of Thrones btw my favorite serial"},
        {id: 6, message: "Today 1 June of 2022 Elnur and I played Fortnite It was funny"},
    ],

    newPostText: [
        {id: 1, message: ""}
    ]
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5, message: state.newPostText[0].message
            }
            // newPost.id = state.newPostsData.length
            let stateCopy = {...state}
            stateCopy.newPostsData = [...state.newPostsData]
            stateCopy.newPostsData.push(newPost);
            state.newPostText[0].message = "";
            return stateCopy;
        }
        case updateNewPost:
            let stateCopy = {...state}
            stateCopy.newPostText = [...state.newPostText]
            stateCopy.newPostText[0].message = action.newText;
            return stateCopy;
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