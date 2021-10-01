import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:  {"API-KEY":"2cc3354f-01b5-4bfb-aa39-e518c7551d43"}
});

export const usersAPI = {
    getUsers (currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {
                return response.data
            });
    }
}