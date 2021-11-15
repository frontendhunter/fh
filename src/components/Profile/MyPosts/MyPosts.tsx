import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form";
import {required,maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls";
import {PostType} from "../../../types/types";



export type  MapPropsType = {
    posts:Array<PostType>
}
export type MapDispatchPropsType = {
    addPost: (newPostText:string)=> void
}

const maxLength30 = maxLengthCreator(30)

const MyPosts:React.FC<MapPropsType &  MapDispatchPropsType> = (props) => {
    let postsElement = props.posts.map(posts => <Post name={posts.name} message={posts.message}
                                                      likesCount={posts.likesCount}/>)


    let onAddPost = (values:any):any => {
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
const AddNewPostForm:React.FC<any>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength30]} name='newPostText' component={Textarea} placeholder='write something'/>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts