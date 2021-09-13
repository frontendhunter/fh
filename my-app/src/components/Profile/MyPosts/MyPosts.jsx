import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"
const MyPosts = (props) => {


    let postsElement = props.posts.map(posts => <Post name={posts.name} message={posts.message}
                                                      likesCount={posts.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {

        props.addPost();

    }

    let onPostChange = () => {
        let text
        text = newPostElement.current.value;
        props.postChange(text);

    }

    return (
        <div className={s.MyPosts}>
            <h3> My posts:</h3>

            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            <div>
                <button onClick={addPost}>add post</button>
            </div>


            {postsElement}

        </div>
    )
}
export default MyPosts