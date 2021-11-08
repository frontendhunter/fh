import {usersAPI} from "../ api/api";
import {UserType} from "../types/types";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,  //Array of users id
};
type InitialState  = typeof initialState;

const usersReducer = (state = initialState, action:any):InitialState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}

                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}

                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
}
type UnfollowSuccesType={type: typeof UNFOLLOW, userId:number}
export const unfollowSucces = (userId:number):UnfollowSuccesType => ({type: UNFOLLOW, userId});
type FollowSuccesType ={type: typeof FOLLOW, userId:number}
export const followSucces = (userId:number):FollowSuccesType => ({type: FOLLOW, userId});
type SetUsersType={type: typeof SET_USERS, users:Array<UserType>}
export const setUsers = (users:Array<UserType>):SetUsersType => ({type: SET_USERS, users});
type SetCurrentPageType = {type: typeof SET_CURRENT_PAGE, page:number}
export const setCurrentPage = (page:number):SetCurrentPageType => ({type: SET_CURRENT_PAGE, page});
type SetTotalUsersCountType = {type: typeof SET_TOTAL_USERS_COUNT, totalCount:number}
export const setTotalUsersCount = (totalCount:number):SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalCount});
type ToggleIsFetchingType ={type: typeof TOGGLE_IS_FETCHING, isFetching:boolean};
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});
type ToggleFollowingProgressType = {type: typeof TOGGLE_FOLLOWING_PROGRESS, isFetching:boolean, userId:number}
export const toggleFollowingProgress = (isFetching:boolean, userId:number):ToggleFollowingProgressType => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (page:number, pageSize:number) => async (dispatch:any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));


}

const followUnfollowFlow = async (dispatch:any, userId:number, apiMethod:any, actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(toggleFollowingProgress(false, userId))
    }
}
    export const follow = (userId:number) => async (dispatch:any) => {
        followUnfollowFlow(dispatch, userId,  usersAPI.follow.bind(usersAPI), followSucces)

    }
    export const unfollow = (userId:number) => async (dispatch:any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSucces)
    }
    export default usersReducer;