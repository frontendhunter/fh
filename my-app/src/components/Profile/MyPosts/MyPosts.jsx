import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {

    let postsElement = props.posts.map(posts => <Post name={posts.name} message={posts.message}
                                                      likesCount={posts.likesCount}/>)


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.MyPosts}>
            <h3> My posts:</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postsElement}
        </div>
    )

}
const AddNewPostForm  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component='textarea' placeholder='write something'></Field>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts