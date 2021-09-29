import React from "react"
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <h2 className={s.logo__txt}>Simple Invest</h2>
         </div>
          <div className={s.login}>
              {props.isAuth? props.login :<NavLink to={'/login'}>Login</NavLink>}

          </div>
      </header>
   )
}
export default Header