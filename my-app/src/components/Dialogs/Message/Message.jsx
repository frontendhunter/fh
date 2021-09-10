import React from "react"
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";



let Message = (props) => {
    return(
        <div >

            <div className={s.messages__item}>
                <p><b>{props.name}</b></p>
                <img src={props.img}/>  {props.message}
            </div>
        </div>

    )
}

export default Message