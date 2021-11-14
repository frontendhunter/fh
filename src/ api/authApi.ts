import {instance, ApiResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum} from "./api";

type CheckAuthDataType = {
        id: number
        email: string
        login: string

}
type LoginResponseDataType = {
        userId: number

}
export const authAPI = {
    checkAuth() {
        return instance.get<ApiResponseType<CheckAuthDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ApiResponseType<LoginResponseDataType,ResultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}