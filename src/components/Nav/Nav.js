import s from "./nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
     return (<nav className={s.Nav}>
    <ul className={s.Nav__list}>
        <li className={s.Item}><NavLink to="/Profile" className = {({isActive}) => isActive ? s.active : s.Item }>Profile</NavLink></li>
        <li className={s.Item}><NavLink to="/Dialogs" className = {({isActive})=> isActive ? s.active : s.Item }>Messages</NavLink></li>
        <li className={s.Item}><NavLink to="/News" className = {({isActive})=> isActive ? s.active : s.Item }>News</NavLink></li>
        <li className={s.Item}><NavLink to="/Music" className = {({isActive})=> isActive ? s.active : s.Item }>Music</NavLink></li>
        <li className={s.Item}><NavLink to="/Settings" className = {({isActive})=> isActive ? s.active : s.Item }>Settings</NavLink></li>
    </ul>
</nav> )
}

export default Nav