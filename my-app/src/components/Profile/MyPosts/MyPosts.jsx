import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"
const MyPosts = (props) => {


    let postsElement = props.posts.map(posts => <Post name={posts.name} message={posts.message}
                                                      likesCount={posts.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {

        props.dispatch({type:'ADD-POST'});

    }

    let onPostChange = () => {
        debugger
        let text = newPostElement.current.value;
        props.dispatch({type:'POST-CHANGE',newText:text});

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