import React from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader";
import defPhoto from "../../../assets/images/defaultProfileImage.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile,status,updateUserStatus}) => {

    if (!profile){
        return<Preloader/>
    }
    let contacts = profile.contacts;


    return (
        <div>

            <div className={s.profileInfo}>
                <div>Name: <b>{profile.fullName}</b></div>
                <div>

                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>

                </div>
                <hr/>
                <img src={profile.photos.large?profile.photos.large:defPhoto}/>
                <div>Discription: {profile.aboutMe}</div>
                <hr/>
                <div>looking For A Job: <b>{profile.lookingForAJob?'Yes!':'NO'}</b></div>
                <p>{profile.lookingForAJobDescription}</p>
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