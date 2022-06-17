let store = {
    _state: {
        postsPage: {
            newPostsData: [
                {id: 1, message: "I'm gonna make website today"},
                {id: 2, message: "I learnt React"},
                {id: 3, message: "Hello I'm gonna make you happy"},
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
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: "John"},
                {id: 2, name: "Alexandr"},
                {id: 3, name: "Fedora"},
                {id: 4, name: "Bob"}
            ],
            messagesData: [
                {id: 1, message: "Hello do you wanna go to the street?"},
                {id: 2, message: "I forgot my watches at your home can I come today to take them?"},
                {id: 3, message: "Hello we had a great day yesterday I would like to met you with you one more time;)"},
                {
                    id: 4,
                    message: "We finished our deal you were a good worker If I have the same work I will call you to ask and you will be get paid for it too but much bigger you are such an amazing person it's exactly truth"
                }
            ],
            newMessageBody: "",
        }
    },
    _callSubscriber() {
        console.log("State was changed")
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === addPost) {
            let newPost = {
                id: 4, message: this._state.postsPage.newPostText[0].message
            }
            this._state.postsPage.newPostsData.push(newPost);
            this._state.postsPage.newPostText[0].message = "";
            this._callSubscriber();
        } else if (action.type === updateNewPost) {
            this._state.postsPage.newPostText[0].message = action.newText;
            this._callSubscriber();
        } else if (action.type = updateNewMessageBody) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber();
        } else if (action.type = sentMessage) {
            let body = this.state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this.state.dialogsPage.messagesData.push({id: 6, message: body});
            this._callSubscriber();
        }
    }
}

const addPost = "ADD-POST"
const updateNewPost = "UPDATE-NEW-POST"
const updateNewMessageBody = "UPDATE-NEW-MESSAGE-BODY"
const sentMessage = "SENT-MESSAGE"

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

const sentMessageCreator = () => {
    return (
        {
            type: sentMessage,

        }
    )
}

const updateNewMessageBodyCreator = (body) => {
    return (
        {
            type: updateNewMessageBody,
            body: body
        }
    )
}

export {sentMessageCreator}
export {addPostActionCreator}
export {onPostActionCreator}
export default store