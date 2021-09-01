import React from "react"
import s from './Sidebar.module.css'

const Sidebar = () => {
   return (
      <nav className={s.nav}>
         <a href="#" className={s.item}>Profile</a>
         <a href="#" className={s.item}>Messages</a>
         <a href="#" className={s.item}>News</a>
         <a href="#" className={s.item}>Something</a>
         <a href="#" className={s.item}>Settings</a>
      </nav>
   )
}
export default Sidebar