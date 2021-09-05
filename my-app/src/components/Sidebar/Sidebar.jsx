import React from "react"
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
   return (
      <nav className={s.nav}>
         <NavLink to="/profile" className={s.item} activeClassName={s.active} >Profile</NavLink>
         <NavLink to="/dialogs" className={s.item} activeClassName={s.active} >Dialogs</NavLink>
         <NavLink to="/news" className={s.item} activeClassName={s.active} >News</NavLink>
         <NavLink to="/settings" className={s.item} activeClassName={s.active} >Settings</NavLink>
      </nav>
   )
}
export default Sidebar