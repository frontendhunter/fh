import React from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader";
import defPhoto from "../../../assets/images/defaultProfileImage.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner,savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }
    let contacts = profile.contacts;
    let onMainPhotoSelected = (e) => {
        if (e.target.files.length){
             savePhoto(e.target.files[0])
        }
    }

    return (
        <div>

            <div className={s.profileInfo}>
                <div>Name: <b>{profile.fullName}</b></div>
                <div>

                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>

                </div>
                <hr/>
                <img className={s.profilePhoto} src={profile.photos.large ? profile.photos.large : defPhoto}/>
                {isOwner && <input onChange={onMainPhotoSelected} type={'file'}></input>}
                <div>Discription: {profile.aboutMe}</div>
                <hr/>
                <div>looking For A Job: <b>{profile.lookingForAJob ? 'Yes!' : 'NO'}</b></div>
                <p>{profile.lookingForAJobDescription}</p>
                <hr/>
                <div>
                    contacts:
                    <p>{Object.values(contacts).map(el => <div>{el}</div>)}</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo