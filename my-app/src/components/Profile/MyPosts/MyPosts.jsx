import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"



const MyPosts = (props) => {
    return (
        <div className={s.MyPosts}>
            <h3> My posts:</h3>
            <form>
                <div><textarea></textarea></div>
                <div>
                    <button>add post</button>
                </div>
            </form>

            {props.postsElement}

        </div>
    )
}
export default MyPosts