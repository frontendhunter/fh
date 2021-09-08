import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    return (
        <div className={s.dialogs__wrap}>
            <div className={s.dialogs}>
                {props.dialogsElements}
            </div>
            <div className={s.messages}>
                {props.messagesElements}
            </div>
        </div>

    )
}
export default Dialogs