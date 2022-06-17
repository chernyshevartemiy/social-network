import s from "./header.module.css"

const Header = () => {
    return (
        <header className={s.Header}>
        <a className={s.Logo}><img className={s.Logo__img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1280px-Coca-Cola_logo.svg.png" alt="#"/></a>
    </header> )
}

export default Header