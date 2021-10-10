import {authAPI} from "../ api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const checkAuth = () => {
    return (dispatch) => {
        authAPI.checkAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {

        authAPI.login({email, password, rememberMe})
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(checkAuth())
                } else {

                    let errMessage = (response.data.messages===0)? 'Something wrong' : response.data.messages;
                    debugger
                    dispatch(stopSubmit('Login', {_error:errMessage}));
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                    dispatch(checkAuth())
                }
            })
    }
}


export default authReducer;