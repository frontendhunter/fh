import React from "react"
import s from './../Dialogs.module.css'



let Message = (props) => {
    return(
            <div className={s.messages__item}>
                {props.message}
            </div>
    )
}

export default Message