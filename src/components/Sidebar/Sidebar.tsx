import React from "react"
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar:React.FC = (props) => {
    // let state  = props.store.getState();

    return (
        <div className={s.sideBar}>
            <nav className={s.nav}>
                <NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Dialogs</NavLink>
                <hr/>
                <NavLink to="/users" className={s.item} activeClassName={s.active}>Users</NavLink>
            </nav>
            {/*<div className={s.friends}>*/}
            {/*    <div className={s.friend}>*/}
            {/*        <img src={state.sideBar.friends[0].img}/>*/}
            {/*        <span>{state.sideBar.friends[0].name}</span>*/}
            {/*    </div>*/}
            {/*    <div className={s.friend}>*/}
            {/*        <img src={state.sideBar.friends[1].img}/>*/}
            {/*        <span>{state.sideBar.friends[1].name}</span>*/}
            {/*    </div>*/}
            {/*    <div className={s.friend}>*/}
            {/*        <img src={state.sideBar.friends[2].img}/>*/}
            {/*        <span>{state.sideBar.friends[2].name}</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Sidebar