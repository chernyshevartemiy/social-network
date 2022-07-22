import s from "./Dialogs.module.css";
import Initials from "./Dialog/Initials/Initials";
import Messages from "./Dialog/Messages/Messages";
import { Navigate } from "react-router-dom";
// Create functions with method 'map', necessarily be here
const Dialogs = (props) => {
	if (props.isAuth == false) {
		return <Navigate to={"/Login"} />;
	}
	return (
		<div className={s.Dialogs}>
			<div className={s.Dialogs__items}>
				<div className={s.Dialogs__item}>
					<Initials
						name={props.dialogsData[0].name}
						id={props.dialogsData[0].id}
					/>
					<Messages message={props.messagesData[0].message} />
				</div>
				<div className={s.Dialogs__item}>
					<Initials
						name={props.dialogsData[1].name}
						id={props.dialogsData[1].id}
					/>
					<Messages message={props.messagesData[1].message} />
				</div>
				<div className={s.Dialogs__item}>
					<Initials
						name={props.dialogsData[2].name}
						id={props.dialogsData[2].id}
					/>
					<Messages message={props.messagesData[2].message} />
				</div>
				<div className={s.Dialogs__item}>
					<Initials
						name={props.dialogsData[3].name}
						id={props.dialogsData[3].id}
					/>
					<Messages message={props.messagesData[3].message} />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
