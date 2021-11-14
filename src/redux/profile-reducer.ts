import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI} from "../ api/profileApi";


let initialState = {
    posts: [
        {id: 1, name: 'Joseph', message: 'smth clever text', likesCount: 16},
        {id: 2, name: 'Isaac', message: 'smth clever text about life', likesCount: 39}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    headerProfile: null as ProfileType|null,
    newPostText: ''
};


const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            let newPost: {
                id: 5,
                name: 'Joseph',
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case 'profile/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'profile/SET_HEADER_PROFILE': {
            return {...state, headerProfile: action.headerProfile}
        }
        case 'profile/SET_USER_STATUS': {
            return {...state, status: action.status}
        }
        case 'profile/SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        case 'profile/DELETE_POST': {
            return {...state, posts: state.posts.filter((p) => p.id !== action.postId)}
        }
        default:
            return state;

    }
}

export const actions = {
    addPostActionCreator: (newPostText:string) => ({type: 'profile/ADD-POST', newPostText} as const),
    deletePost: (postId: number) => ({type: 'profile/DELETE_POST', postId} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'profile/SET_USER_PROFILE', profile} as const),
    setHeaderProfile: (headerProfile: ProfileType) => ({type: 'profile/SET_HEADER_PROFILE', headerProfile} as const),
    setUserStatus: (status: string) => ({type: 'profile/SET_USER_STATUS', status}),
    savePhotoSucces: (photos: any) => ({type: 'profile/SAVE_PHOTO_SUCCESS', photos} as const),
}


//-------------------------thunk----------------------------------------



export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getHeaderProfile = (userId: number): ThunkType => async (dispatch) => {

    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setHeaderProfile(data));
}

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setUserStatus(data));
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setUserStatus(status));
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSucces(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        if (userId !== null) {
            dispatch(getProfile(userId));
        } else {
            throw new Error("userId cannot be null")
        }
    } else {
        dispatch(stopSubmit('editProfile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer



export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

