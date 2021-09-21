const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Kira',
            status: 'Buying deep',
            location: {country: 'RUSSIA', city: 'Saint-Petersburg'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Dmitry',
            status: 'one year Investor(OLD)',
            location: {country: 'RUSSIA', city: 'Kolpino'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Andrew',
            status: 'beer investor',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u,followed: true}

                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u,followed: false}

                    }
                    return u;
                })
            };
        default:
            return state;
    }
}

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const followAC = (userId) => ({type: FOLLOW, userId: userId});

export default usersReducer;