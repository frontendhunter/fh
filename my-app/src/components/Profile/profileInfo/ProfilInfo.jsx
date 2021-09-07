import React from "react"
import s from './ProfileInfo.module.css'

const ProfilInfo = () => {
    return (
        <div>
            <div className={s.img__wrap}>
                <img src='https://c4.wallpaperflare.com/wallpaper/88/467/746/oxbow-bend-at-sunset-grand-teton-national-park-wyoming-wallpaper-preview.jpg' alt="image"/>
            </div>
            <div className={s.profileInfo}>
                ava disc
            </div>
        </div>
    )
}
export default ProfilInfo