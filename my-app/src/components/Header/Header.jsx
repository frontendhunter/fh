import React from "react"
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <h2 className={s.logo__txt}>Frontend<br/> Hunter</h2>
         </div>
          <div className={s.login}>
              {props.isAuth
                  ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                  :<div><NavLink to={'/login'}>Login</NavLink> </div>}
          </div>
      </header>
   )
}
export default Header