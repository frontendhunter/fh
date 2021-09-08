import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from './Profile.module.css'
import ProfilInfo from "./profileInfo/ProfilInfo";
import Post from "./MyPosts/Post/Post";



const Profile = (props) => {
   return (
      <main className={s.main}>
          <ProfilInfo/>
          <MyPosts postsElement={props.postsElement}/>
      </main >
   )
}
export default Profile