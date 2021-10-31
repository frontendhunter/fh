import React, {useState} from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader";
import defPhoto from "../../../assets/images/defaultProfileImage.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    let contacts = profile.contacts;

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    let onSubmit =   (formData) => {
          saveProfile(formData)
            .then(()=>{
            setEditMode(false);
        })
    }

    return (
        <div>

            <div className={s.profileInfo}>
                <div>Имя: <b>{profile.fullName}</b></div>
                <div>

                    <ProfileStatusWithHooks isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>

                </div>
                <hr/>
                <div>
                    <img className={s.profilePhoto} src={profile.photos.large ? profile.photos.large : defPhoto}/>
                    {isOwner && <input onChange={onMainPhotoSelected} type={'file'}/>}
                </div>

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>
                }
            </div>
        </div>
    )
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {

    let contacts = profile.contacts;

    return <div className={s.profileData}>
        {isOwner && <div>
            <button onClick={goToEditMode}>Редактировать</button>
        </div>}

        <div>
            <b>Описание:</b> {profile.aboutMe}
        </div>
        <hr/>
        <div>
            <b>Ищу работу:</b> {profile.lookingForAJob ? 'Да!' : 'Нет'}
        </div>
        <p>
            <b>Скилы: </b>
            {profile.lookingForAJobDescription}
        </p>
        <hr/>
        <div>
            contacts:
            <p className={s.profileLinks}>{Object.keys(contacts).map(el => <div key={el}>{el}:--  {contacts[el]}</div>)}</p>
        </div>
    </div>
}

export default ProfileInfo