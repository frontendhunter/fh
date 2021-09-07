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


let dialogsData = [
    {id:1, name:'Erjan'},
    {id:2, name:'BrushGirl'},
    {id:3, name:'uRina'},
    {id:4, name:'Dushnila'}
]

let messagesData = [
    {id:1, message:'hy'},
    {id:2, message:'sosi jopu'},
    {id:3, message:'pisia popa pisia popa pisia popa pisia popa pisia popa  '},
    {id:4, name:'popa pisia popa pisia popa pisia'}
]


const Dialogs = () => {
    return (
        <div className={s.dialogs__wrap}>
            <div className={s.dialogs}>
                <Dialog__item id={dialogsData[0].id} name={dialogsData[0].name}/>
                <Dialog__item id={dialogsData[1].id} name={dialogsData[1].name}/>
                <Dialog__item id={dialogsData[2].id} name={dialogsData[2].name}/>
                <Dialog__item id={dialogsData[3].id} name={dialogsData[3].name}/>


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>

            </div>
        </div>

    )
}
export default Dialogs