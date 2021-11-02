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

    let onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            })
    }

    return (
        <div>

            <div className={s.profileInfo}>
                <h3 className={s.subHeaders + ' ' + s.nameBlock}> Имя: <b>{profile.fullName}</b></h3>

                <div>
                    <img className={s.profilePhoto} src={profile.photos.large ? profile.photos.large : defPhoto}/>
                    <input className={s.hiden} name="file" id="input__file" onChange={onMainPhotoSelected}
                           type={'file'}/>
                    <div>{isOwner &&
                    <label htmlFor="input__file" className={s.links__md}>Изменить фото </label>}
                    </div>
                </div>
                <h3 className={s.subHeaders}>

                    <ProfileStatusWithHooks isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>

                </h3>
                <hr/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
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

        <div className={s.discriptionsWrap}>
            <div><h3 className={s.subHeaders}>Описание:</h3> {profile.aboutMe}</div>

            <div>{isOwner && <button className={s.links__md + ' ' + s.profileData__changes}
                                     onClick={goToEditMode}>Редактировать</button>}
            </div>
        </div>
        <div>
            <h3 className={s.subHeaders}>Ищу работу:</h3> {profile.lookingForAJob ? 'Да!' : 'Нет'}
        </div>
        <p>
            <h3 className={s.subHeaders}>Ключевые навыки: </h3>
            {profile.lookingForAJobDescription}
        </p>
        <div>
            <h3 className={s.subHeaders}>contacts:</h3>
            <div className={s.profileLinks}>{Object.keys(contacts).map(el => <div key={el}>{el}: <a
                className={s.links__md} target="_blank" href={contacts[el]}>{contacts[el]}</a></div>)}</div>
        </div>
    </div>
}

export default ProfileInfo