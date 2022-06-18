import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
        this.getState().postsPage = profileReducer(this.getState().postsPage, action);
        this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
        this._callSubscriber();
        }
}


export default store