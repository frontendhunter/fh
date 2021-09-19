import React from "react"
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let posts = state.profilePage.posts;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let postChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text))
    }
    let newPostText = state.profilePage.newPostText

    return <MyPosts addPost={addPost} postChange={postChange} posts={posts} newPostText={newPostText}/>
}
export default MyPostsContainer