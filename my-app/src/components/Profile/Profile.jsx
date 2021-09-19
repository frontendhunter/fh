import React from "react"
import s from './Profile.module.css'
import ProfilInfo from "./profileInfo/ProfilInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <main className={s.main}>
            <ProfilInfo/>
            <MyPostsContainer  store={props.store}/>
        </main>
    )
}
export default Profile