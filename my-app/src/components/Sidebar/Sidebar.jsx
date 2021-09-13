import React from "react"
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = (props) => { 
    return (
        <div className={s.sideBar}>
            <nav className={s.nav}>
                <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Dialogs</NavLink>
                <NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink>
                <NavLink to="/settings" className={s.item} activeClassName={s.active}>Settings</NavLink>
            </nav>
            <div className={s.friends}>
                <div className={s.friend}>
                    <img src={props.state.friends[0].img}/>
                    <span>{props.state.friends[0].name}</span>
                </div>
                <div className={s.friend}>
                    <img src={props.state.friends[1].img}/>
                    <span>{props.state.friends[1].name}</span>
                </div>
                <div className={s.friend}>
                    <img src={props.state.friends[2].img}/>
                    <span>{props.state.friends[2].name}</span>
                </div>
            </div>
        </div>
    )
}
export default Sidebar