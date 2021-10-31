import {profileAPI, usersAPI} from "../ api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, name: 'Joseph', message: 'smth clever text', likesCount: 16},
        {id: 2, name: 'Isaac', message: 'smth clever text about life', likesCount: 39}
    ],
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, ({id: 5, name: 'smth', message: action.newPostText, likesCount: 0})],
            }
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status};
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter((p) => p.id != action.postId)}
        }
        default:
            return state;

    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatusAC = (status) => ({type: SET_USER_STATUS, status});
export const savePhotoSucces = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(response.data));
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSucces(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}))
        return Promise.reject( response.data.messages[0])
    }
}

export default profileReducer