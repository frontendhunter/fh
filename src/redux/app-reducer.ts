import {checkAuth} from "./auth-reducer";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized:boolean
}
let initialState:InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true,
            }

        default:
            return state;
    }
}

type ActionsTypes = InitializedSuccess

type InitializedSuccess = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = ():InitializedSuccess => ({
    type: INITIALIZED_SUCCESS,
});


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction< Promise<void>, GetStateType, unknown, ActionsTypes>

export const initializeApp = ():any => (dispatch:any) => {
    let promise = dispatch(checkAuth());
    promise.then(()=>{
        return dispatch(initializedSuccess());
    })

}


export default appReducer;