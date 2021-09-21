import React from "react"
import s from './Header.module.css'

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <h2 className={s.logo__txt}>Simple Invest</h2>
         </div>
      </header>
   )
}
export default Header