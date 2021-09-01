import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = () => {
   return (
      <main className={s.main}>
         <h4> My posts:</h4>
         <form>
            <textarea></textarea>
            <button>add post</button>
         </form>

         <Post message='I am hangry' likesCount='12' />
         <Post name="pie" message="hy, it's my first post)" likesCount='34' />
      </main >
   )
}
export default MyPosts