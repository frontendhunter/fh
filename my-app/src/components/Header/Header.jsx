import React from "react"
import s from './Header.module.css'

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <h2 className={s.logo__txt}>social invest</h2>
         </div>
      </header>
   )
}
export default Header