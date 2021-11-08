import React, {useState} from "react"
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import defPhoto from "../../assets/images/defaultProfileImage.png";

const Header = ({profile, isAuth,login,logout}) => {
    if (!profile) {
        return  <header className={s.header}>

            <div className={s.wrapper}>
                <div className={s.helper_wrapper}>
                    <div className={s.left}>
                        {/*<h2 className={s.logo__txt}>  <span>FH</span> </h2>*/}
                        <NavLink to="/profile" className={s.logo__txt}
                                 activeClassName={s.active}><span>FH</span></NavLink>
                        <nav className={s.nav}>
                            <NavLink to="/profile" className={s.item} activeClassName={s.active}>Моё резюме</NavLink>
                            {/*<NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Сообщения</NavLink>*/}
                            <NavLink to="/users" className={s.item} activeClassName={s.active}>Смотреть анкеты</NavLink>
                        </nav>
                    </div>


                    <div className={s.login}>
                             <span><NavLink className={s.loginButton} to={'/login'}>Войти</NavLink></span>
                    </div>
                </div>
            </div>
        </header>
    }

    return (

        <header className={s.header}>

            <div className={s.wrapper}>
                <div className={s.helper_wrapper}>
                    <div className={s.left}>
                        {/*<h2 className={s.logo__txt}>  <span>FH</span> </h2>*/}
                        <NavLink to="/profile" className={s.logo__txt}
                                 activeClassName={s.active}><span>FH</span></NavLink>
                        <nav className={s.nav}>
                            <NavLink to="/profile" className={s.item} activeClassName={s.active}>Моё резюме</NavLink>
                            {/*<NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Сообщения</NavLink>*/}
                            <NavLink to="/users" className={s.item} activeClassName={s.active}>Смотреть анкеты</NavLink>
                        </nav>
                    </div>


                    <div className={s.login}>
                        {isAuth
                            ? <div className={s.profile}>
                                <div className={s.profileInfo}>
                                    <div>{login}</div>
                                    <img   src={profile.photos.small ? profile.photos.small : defPhoto}/>
                                </div>
                                <span className={s.linkWrap}><NavLink to="/profile"
                                                                      className={s.nickname}>Профиль</NavLink></span>
                                <span className={s.loginButton+' ' + s.hiden} onClick={ logout}>Выйти</span>
                              </div>
                            : <span><NavLink className={s.loginButton} to={'/login'}>Войти</NavLink></span>}

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header