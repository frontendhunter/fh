import React from "react"
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {
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