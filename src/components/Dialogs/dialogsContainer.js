import Dialogs from "./Dialogs";
import { connect } from "react-redux";
// Store was uploaded here, it's incorrect decision, needs to be changed into state, in param. too
import store from "../../redux/store";
import withAuthRedirect from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
	return {
		dialogsData: store._state.dialogsPage.dialogsData,
		messagesData: store._state.dialogsPage.messagesData,
	};
};

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent);

export default DialogsContainer;
