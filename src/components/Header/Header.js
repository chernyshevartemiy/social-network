import { NavLink } from "react-router-dom";
import s from "./header.module.css";


const Header = (props) => {
	return (
		<header className={s.Header}>
			<a className={s.Logo}>
				<img
					className={s.Logo__img}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1280px-Coca-Cola_logo.svg.png"
					alt="#"
				/>
			</a>
			<div className={s.Header__block}>
				{props.isAuth ? props.login :  <NavLink to={"/Login"}>Login</NavLink>}
			</div>
		</header>
	);
};

export default Header;
