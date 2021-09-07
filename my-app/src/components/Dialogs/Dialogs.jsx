import React from "react"
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


let Dialog__item = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id} className={s.dialog__item}
                     activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
let Message = (props) => {
    return(
            <div className={s.messages__item}>
                {props.message}
            </div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs__wrap}>
            <div className={s.dialogs}>
                <Dialog__item id='1' name='Erjaaan'/>
                <Dialog__item id='2' name='BushGirl'/>
                <Dialog__item id='3' name='uRina'/>
                <Dialog__item id='4' name='Dushnila'/>

            </div>
            <div className={s.messages}>
                <Message message="hey, bro) What you doing today?"/>
                <Message message="nothing"/>
                <Message message=" mb wolk?"/>
                <Message message="No!"/>

            </div>
        </div>

    )
}
export default Dialogs