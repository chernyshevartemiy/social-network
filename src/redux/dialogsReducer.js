const updateNewMessageBody = "UPDATE-NEW-MESSAGE-BODY"
const sentMessage = "SENT-MESSAGE"

let initialState = {
    dialogsPage: {
        dialogsData: [
            {id: 0, name: "John"},
            {id: 1, name: "Alexandr"},
            {id: 2, name: "Fedora"},
            {id: 3, name: "Bob"}
        ],
        messagesData: [
            {id: 0, message: "Hello do you wanna go to the street?"},
            {id: 1, message: "I forgot my watches at your home can I come today to take them?"},
            {id: 2, message: "Hello we had a great day yesterday I would like to met you with you one more time;)"},
            {id: 3, message: "We finished our deal you were a good worker If I have the same work I will call you to ask and you will be get paid for it too but much bigger you are such an amazing person it's exactly truth"
            }
        ],
        newMessageBody: "",
    }}
// Here will be spread statements
const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case updateNewMessageBody: 
			return {
				...state,
				newMessageBody: action.body
			}
		case sentMessage: 
			let body = state.newMessageBody
			return {
				...state,
				newMessageBody: "",
				messages: [...state.messages, {id: 4, message: body}]
			};
			
	}
	if (action.type === updateNewMessageBody) {
	
    state.newMessageBody = action.body;
} else if (action.type === sentMessage) {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messagesData.push({id: 6, message: body});
    }
    return state
}
// Here will be spread statements
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
