import React from "react"
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


let DialogItem = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id} className={s.dialog__item}
                     activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem