import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from './Profile.module.css'
import ProfilInfo from "./profileInfo/ProfilInfo";

const Profile = () => {
   return (
      <main className={s.main}>
          <ProfilInfo/>
          <MyPosts />
      </main >
   )
}
export default Profile