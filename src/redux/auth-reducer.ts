import {ResultCodeEnum, ResultCodeForCaptchaEnum} from "../ api/api";
import {stopSubmit} from "redux-form";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../ api/authApi";
import {securityAPI} from "../ api/securityApi";

// type InitialStateType = {
//     id: null | number,
//     email: null | string,
//     login: null | string,
//     isAuth: boolean,
//     captchaUrl: null | string,
// };

let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as boolean,
    captchaUrl: null as null | string,
};

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state, ...action.payload,
            }
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state, ...action.payload,
            }

        default:
            return state;
    }
}


type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/SET_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'auth/GET_CAPTCHA_URL_SUCCESS',
        payload: {captchaUrl}
    } as const),

}


//-----------------------thunk-----------------------


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>

export const checkAuth = (): ThunkType => async (dispatch) => {
    let authData = await authAPI.checkAuth()
    if (authData.resultCode === ResultCodeEnum.Success) {
        let {id, email, login} = authData.data
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {

    let loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(checkAuth())
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let errMessage = (loginData.messages.length > 0) ? loginData.messages : 'Something wrong';
        dispatch(stopSubmit('Login', {_error: errMessage}));


    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {

    const data = await securityAPI.getCaptchaUrl()

    const captchaUrl = data.url

    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))

}

export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
        dispatch(checkAuth())
    }
}


export default authReducer;