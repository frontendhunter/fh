import React from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile){
        return<Preloader/>
    }
    let contacts = props.profile.contacts;


    return (
        <div>
            <div className={s.img__wrap}>
                <img src='https://c4.wallpaperflare.com/wallpaper/88/467/746/oxbow-bend-at-sunset-grand-teton-national-park-wyoming-wallpaper-preview.jpg' alt="image"/>
            </div>
            <div className={s.profileInfo}>
                <div>Name: <b>{props.profile.fullName}</b></div>
                <hr/>
                <img src={props.profile.photos.large}/>
                <div>Discription: {props.profile.aboutMe}</div>
                <hr/>
                <div>looking For A Job: <b>{props.profile.lookingForAJob?'Yes!':'NO'}</b></div>
                <p>{props.profile.lookingForAJobDescription}</p>
                <hr/>
                <div>
                    contacts:
                    <p>{Object.values(contacts).map(el=><div>{el}</div>)}</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo