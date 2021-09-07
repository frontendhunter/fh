import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"

let postsData = [
    {id:1, name: 'Joseph', message: 'smth clever text', likesCount: 12},
]

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

            <Post name={postsData[0].name} message={postsData[0].message} likesCount={postsData[0].likesCount}/>

        </div>
    )
}
export default MyPosts