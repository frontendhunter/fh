import React from "react"
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {ProfileType} from "../../types/types";


type PropsType = {
    profile:ProfileType | null
    status:string
    updateUserStatus:(status:string )=> void
    isOwner:boolean
    saveProfile:(profile:ProfileType)=>Promise<any>
    savePhoto: (file:File)=> void

}


const Profile:React.FC<PropsType> = (props) => {
    return (

        <main className={s.main}>
            <ProfileInfo isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         saveProfile={props.saveProfile}

            />
            {/*<MyPostsContainer store={props.store}/>*/}
        </main>
    )
}
export default Profile