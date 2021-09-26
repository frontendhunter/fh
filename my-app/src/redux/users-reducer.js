const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
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
        case CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const follow = (userId) => ({type: FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const currentPage = (page) => ({type: CURRENT_PAGE, page});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export  const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;