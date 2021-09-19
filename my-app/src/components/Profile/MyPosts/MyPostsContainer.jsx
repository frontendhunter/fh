import React from "react"
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../../redux/dialogs-reducer";
//
// const MyPostsContainer = (props) => {
//     let state = props.store.getState();
//     let posts = state.profilePage.posts;
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//     let postChange = (text) => {
//         props.store.dispatch(onPostChangeActionCreator(text))
//     }
//     let newPostText = state.profilePage.newPostText
//
//     return <MyPosts addPost={addPost} postChange={postChange} posts={posts} newPostText={newPostText}/>
// }
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        postChange: (text) => {
            dispatch(onPostChangeActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }

    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer