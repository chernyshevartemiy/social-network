import s from "./Initials.module.css"
import {NavLink} from "react-router-dom";

const Initials = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div className={s.Initials}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

export default Initials