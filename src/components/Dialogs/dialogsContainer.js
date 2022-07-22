import Dialogs from "./Dialogs";
import { connect } from "react-redux";
// Store was uploaded here, it's incorrect decision, needs to be changed into state, in param. too
import store from "../../redux/store";

let mapStateToProps = (state) => {
	return {
		dialogsData: store._state.dialogsPage.dialogsData,
		messagesData: store._state.dialogsPage.messagesData,
		isAuth: state.auth.isAuth
	};
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
