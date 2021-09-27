import React from "react"
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <main className={s.main}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  store={props.store}/>
        </main>
    )
}
export default Profile