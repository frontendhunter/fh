import React from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader";
import defPhoto from "../../../assets/images/defaultProfileImage.png"
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile){
        return<Preloader/>
    }
    let contacts = props.profile.contacts;


    return (
        <div>
            <div className={s.img__wrap}>
                {/*<img src='https://c4.wallpaperflare.com/wallpaper/88/467/746/oxbow-bend-at-sunset-grand-teton-national-park-wyoming-wallpaper-preview.jpg' alt="image"/>*/}
            </div>
            <div className={s.profileInfo}>
                <div>Name: <b>{props.profile.fullName}</b></div>
                <div>

                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>

                </div>
                <hr/>
                <img src={props.profile.photos.large?props.profile.photos.large:defPhoto}/>
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