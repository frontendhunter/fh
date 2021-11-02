import React, {useState} from "react"
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const [dropDown,changeDropDown]=useState(false);

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.helper_wrapper}>
                    <div className={s.left}>
                        {/*<h2 className={s.logo__txt}>  <span>FH</span> </h2>*/}
                        <NavLink to="/profile" className={s.logo__txt} activeClassName={s.active}><span>FH</span></NavLink>
                        <nav className={s.nav}>
                            <NavLink to="/profile" className={s.item} activeClassName={s.active}>Моё резюме</NavLink>
                            {/*<NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Сообщения</NavLink>*/}
                            <NavLink to="/users" className={s.item} activeClassName={s.active}>Смотреть анкеты</NavLink>
                        </nav>
                    </div>



                    <div className={s.login}>
                        {props.isAuth
                            ? <div className={s.profile}>
                                <span >{props.login}</span>
                                <span className={s.linkWrap}><NavLink to="/profile" className={s.nickname}>Профиль</NavLink></span>
                                <span className={s.loginButton} onClick={props.logout}>Выйти</span>
                        </div>
                            : <div><NavLink className={s.loginButton} to={'/login'}>Войти</NavLink></div>}

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header