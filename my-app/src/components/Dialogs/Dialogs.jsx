import React from "react"
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs__wrap}>
            <div className={s.dialogs}>
                <NavLink to="/dialogs/1" className={s.dialog__item}> Erjan</NavLink>
                <NavLink to="/dialogs/2" className={s.dialog__item}>Chuhan</NavLink>
                <NavLink to="/dialogs/3" className={s.dialog__item + ' ' + s.active}>Dushnila</NavLink>
                <NavLink to="/dialogs/4" className={s.dialog__item}>uRina</NavLink>

            </div>
            <div className={s.messages}>
                <div className={s.messages__item}>
                    hey, bro) What you doing today?
                </div>
                <div className={s.messages__item}>
                    nothing
                </div>
                <div className={s.messages__item}>
                    mb wolk?
                </div>
                <div className={s.messages__item}>
                    No!
                </div>
            </div>
        </div>

    )
}
export default Dialogs