const updateNewMessageBody = "UPDATE-NEW-MESSAGE-BODY"
const sentMessage = "SENT-MESSAGE"

const dialogsReducer = (state, action) => {
    if (action.type === updateNewMessageBody) {
    state.newMessageBody = action.body;
} else if (action.type === sentMessage) {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messagesData.push({id: 6, message: body});
    }
    return state
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
export {updateNewMessageBodyCreator}
export default dialogsReducer