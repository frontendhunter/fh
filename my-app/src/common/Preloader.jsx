import React from "react";
import preloader from "../assets/images/Rolling-0.6s-200px.svg";
import s from "./Preloader.module.css"

const Preloader = () => {
    // return <img src={preloader}/>
    return <div className={s.loader}>
        <div className={s.l_main}>
            <div className={s.l_square}><span></span><span></span><span></span></div>
            <div className={s.l_square}><span></span><span></span><span></span></div>
            <div className={s.l_square}><span></span><span></span><span></span></div>
            {/*<div className={s.l_square}><span></span><span></span><span></span></div>*/}
        </div>
    </div>
}
export default Preloader