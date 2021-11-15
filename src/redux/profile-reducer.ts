
import {FormErrors, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {FormAction} from "redux-form/lib/actions";
import {type} from "os";
import {profileAPI} from "../ api/profileApi";
import {usersAPI} from "../ api/usersApi";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_HEADER_PROFILE = 'SET_HEADER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, name: 'Joseph', message: 'smth clever text', likesCount: 16},
        {id: 2, name: 'Isaac', message: 'smth clever text about life', likesCount: 39}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    headerProfile: null as ProfileType | null,
};
export type InitialStateType = typeof initialState;
const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

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
        case SET_HEADER_PROFILE: {
            return {...state, headerProfile: action.headerProfile};
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status};
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter((p) => p.id !== action.postId)}
        }
        default:
            return state;

    }
}

type ActionsTypes =
    AddPostActionCreatorType
    | DeletePostType
    | SetUserProfileType
    | SetHeaderProfileType
    | SetUserStatusACType
    | SavePhotoSuccesType

type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText});
type DeletePostType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId});
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
type SetHeaderProfileType = {
    type: typeof SET_HEADER_PROFILE,
    headerProfile: ProfileType
}
export const setHeaderProfile = (headerProfile: ProfileType): SetHeaderProfileType => ({
    type: SET_HEADER_PROFILE,
    headerProfile
});
type SetUserStatusACType = {
    type: typeof SET_USER_STATUS,
    status: string
}
export const setUserStatusAC = (status: string): SetUserStatusACType => ({type: SET_USER_STATUS, status});
type SavePhotoSuccesType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const savePhotoSucces = (photos: PhotosType): SavePhotoSuccesType => ({type: SAVE_PHOTO_SUCCESS, photos});


//-------------------------thunk----------------------------------------


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, GetStateType,  unknown, ActionsTypes>


export const getProfile = (userId: number): ThunkType => async (dispatch ) => {

    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile( data));
}

export const getHeaderProfile = (userId: number): ThunkType => async (dispatch ) => {

    let data = await profileAPI.getProfile(userId);
    dispatch(setHeaderProfile(data));
}


export const getUserStatus = (userId: number): ThunkType => async (dispatch ) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC( data));
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch ) => {
    let data = await profileAPI.updateStatus(status)
    if ( data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
    }
}
export const savePhoto = (file: any): ThunkType => async (dispatch ) => {
    let data = await profileAPI.savePhoto(file)
    if ( data.resultCode === 0) {
        dispatch(savePhotoSucces( data.data.photos));
    }
}

//---------------------ANYTYPE----------------------

export const saveProfile = (profile: ProfileType):ThunkType => async (dispatch:any, getState: any) => {
    const userId = getState().auth.id
    const data = await profileAPI.saveProfile(profile)
    if ( data.resultCode === 0) {
        await dispatch(getProfile(userId));
    } else {
        dispatch(stopSubmit('editProfile', {_error:  data.messages[0]})  )
        return Promise.reject( data.messages[0])
    }
}

export default profileReducer