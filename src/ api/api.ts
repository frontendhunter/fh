import axios from "axios";
import {UserType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "2cc3354f-01b5-4bfb-aa39-e518c7551d43"}
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,

}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}


export type GetItemsType = {
    items:Array<UserType>
    totalCount:number
    error: string|null
}
export type ApiResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}