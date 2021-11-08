import {checkAuth} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized:boolean
}
let initialState:InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true,
            }

        default:
            return state;
    }
}
type InitializedSuccess = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = ():InitializedSuccess => ({
    type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(checkAuth());
    promise.then(()=>{
        return dispatch(initializedSuccess());
    })

}


export default appReducer;