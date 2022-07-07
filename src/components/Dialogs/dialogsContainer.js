import Dialogs from "./Dialogs";
import {connect} from "react-redux";
// Store was uploaded here, it's incorrect decision, needs to be changed into state, in param. too
import store from "../../redux/store";

let mapStateToProps = () => {
    return (
        {dialogsData: store._state.dialogsPage.dialogsData,
        messagesData: store._state.dialogsPage.messagesData}
    )
}

const DialogsContainer = connect(mapStateToProps)(Dialogs)


export default DialogsContainer