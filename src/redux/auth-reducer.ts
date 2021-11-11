import {authAPI, securityAPI} from "../ api/api";
import {stopSubmit} from "redux-form";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'


type InitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaUrl: null | string,
};

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, ...action.payload,
            }

        default:
            return state;
    }
}

type  ActionsTypes =    SetAuthUserDataType | GetCaptchaUrlSuccessType


type SetAuthUserDataPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataPayloadType
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});



//-----------------------thunk-----------------------


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, GetStateType, unknown, ActionsTypes>

export const checkAuth = ():ThunkType => async (dispatch: any) => {
    let response = await authAPI.checkAuth()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any):ThunkType => async (dispatch: any) => {

    let response = await authAPI.login({email, password, rememberMe, captcha})
    if (response.data.resultCode === 0) {
        dispatch(checkAuth())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let errMessage = (response.data.messages === 0) ? 'Something wrong' : response.data.messages;
        dispatch(stopSubmit('Login', {_error: errMessage}));


    }
}

export const getCaptchaUrl = ():ThunkType => async (dispatch: any) => {

    const response = await securityAPI.getCaptchaUrl()

    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logout = ():ThunkType => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(checkAuth())
    }
}


export default authReducer;