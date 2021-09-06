import React from "react"
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs__wrap}>
            <div className={s.dialogs}>
                <div className={s.dialog__item}>
                    Erjan
                </div>
                <div className={s.dialog__item}>
                    Chuhan
                </div>
                <div className={s.dialog__item+' '+s.active}>
                    Dushnila
                </div>
                <div className={s.dialog__item}>
                    uRina
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messages__item}>
                    hey, bro) What you doing today?
                </div>
                <div className={s.messages__item}>
                    nothing
                </div>
                <div className={s.messages__item}>
                    mb wolk?
                </div>
                <div className={s.messages__item}>
                    No!
                </div>
            </div>
        </div>

    )
}
export default Dialogs