import {usersAPI} from "../ api/api";
import {UserType} from "../types/types";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";




let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,  //Array of users id
};
type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}

                    }
                    return u;
                })
            };
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}

                    }
                    return u;
                })
            };
        case 'SET_USERS':
            return {...state, users: action.users};
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.page};
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalCount};
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'TOGGLE_FOLLOWING_PROGRESS':
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

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    unfollowSucces: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    followSucces: (userId: number) => ({type: 'FOLLOW', userId}as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users}as const),
    setCurrentPage: (page: number) => ({type: 'SET_CURRENT_PAGE', page}as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount}as const),
    toggleIsFetching :(isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching}as const),
    toggleFollowingProgress : (isFetching: boolean, userId: number) => ({type: 'TOGGLE_FOLLOWING_PROGRESS', isFetching, userId}as const),
}


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, GetStateType, unknown, ActionsTypes>


export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(actions.toggleFollowingProgress(false, userId))
    }
}
export const follow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSucces)

}
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSucces)
}
export default usersReducer;