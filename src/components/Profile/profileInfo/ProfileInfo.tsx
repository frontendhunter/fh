import React, {ChangeEvent, useState} from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader";
import defPhoto from "../../../assets/images/defaultProfileImage.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";

type PropsType = {
    profile:ProfileType | null

    status:string
    updateUserStatus:(status:string)=> void
    isOwner:boolean
    saveProfile:(profile:ProfileType)=>Promise<any>
    savePhoto: (file:File)=> void
}


const ProfileInfo:React.FC<PropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    let contacts = profile.contacts;

    let onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    let onSubmit = (formData:ProfileType) => {
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

type ProfileDataPropsType = {
    profile:ProfileType
    isOwner:boolean
    goToEditMode: () => void
}

const ProfileData:React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {

    let contacts = profile.contacts;

    return <div className={s.profileData}>

        <div className={s.discriptionsWrap}>
            <div><h3 className={s.subHeaders}>Описание:</h3> {profile.aboutMe}</div>

             {isOwner && <button className={s.links__md + ' ' + s.profileData__changes}
                                     onClick={goToEditMode}>Редактировать</button>}

        </div>
        <div>
            <h3 className={s.subHeaders}>Ищу работу:</h3> {profile.lookingForAJob ? 'Да!' : 'Нет'}
        </div>
        <div>
            <h3 className={s.subHeaders}>Ключевые навыки: </h3>
            {profile.lookingForAJobDescription}
        </div>
        <div>
            <h3 className={s.subHeaders}>Контакты:</h3>
            <div className={s.profileLinks}>{Object
                .keys(contacts)
                .map(el => <div key={el}>{el}: <a
                className={s.links__md} target="_blank" href={contacts[el as keyof ContactsType]}>{contacts[el as keyof ContactsType]}</a>
                </div>)}</div>
        </div>
    </div>
}

export default ProfileInfo