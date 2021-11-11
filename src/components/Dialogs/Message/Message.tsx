import React from "react"
import s from './../Dialogs.module.css'

type PropsType = {
    name: string
    img: string
    message: string
}

const Message: React.FC<PropsType> = (props) => {


    return (
        <div>

            <div  className={props.name === 'me' ? s.me + ' ' + s.messages__item : s.messages__item}>
                <p><b>{props.name}</b></p>
                <img src={props.img}/> {props.message}
            </div>

        </div>

    )
}

export default Message