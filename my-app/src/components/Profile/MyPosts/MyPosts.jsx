import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <h3> My posts:</h3>
            <form>
                <div><textarea></textarea></div>
                <div>
                    <button>add post</button>
                </div>
            </form>

            <Post message='I am hangry' likesCount='12'/>
            <Post name="pie" message="hy, it's my first post)" likesCount='34'/>
        </div>
    )
}
export default MyPosts