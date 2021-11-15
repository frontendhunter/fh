import React from "react"
import MyPosts, {MapDispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "../../../types/types";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect<MapPropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: addPostActionCreator})(MyPosts);
export default MyPostsContainer