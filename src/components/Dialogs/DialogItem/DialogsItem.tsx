import React from "react"
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type PropsType ={
    name: string
    img:string
    id:number
}


let DialogItem: React.FC<PropsType> = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id} className={s.dialog__item}
                     activeClassName={s.active}>{props.name}<img src={props.img}/></NavLink>
        </div>
    )
}
export default DialogItem