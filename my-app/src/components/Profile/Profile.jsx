import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import s from './Profile.module.css'

const Profile = () => {
   return (
      <main className={s.main}>
         <div className={s.img__wrap}>
            <img src="https://thumbs.dreamstime.com/z/%D1%80%D1%83%D0%BA%D0%B0-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D1%82-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B5-%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8-%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B1%D1%83%D0%BC%D0%B0%D0%B3%D0%B8-%D0%B1%D0%B0%D0%BD%D0%BA%D0%BD%D0%BE%D1%82%D1%8B-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B9-138344989.jpg"></img>
         </div>
         <div>
            ava disc
         </div>
         <MyPosts />
      </main >
   )
}
export default Profile