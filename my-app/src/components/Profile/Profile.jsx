import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from './Profile.module.css'
import ProfilInfo from "./profileInfo/ProfilInfo";


const Profile = (props) => {
   return (
      <main className={s.main}>
          <ProfilInfo/>
          <MyPosts posts={props.state.posts} addPost={props.addPost}/>
      </main >
   )
}
export default Profile