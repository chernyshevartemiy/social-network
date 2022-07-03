import s from "./Dialogs.module.css"
import Initials from "./Dialog/Initials/Initials";
import Messages from "./Dialog/Messages/Messages";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return (
                        <Dialogs dialogsData={store.getState().dialogsPage.dialogsData}
                                 messagesData={store.getState().dialogsPage.messagesData}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer