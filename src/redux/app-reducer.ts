import {checkAuth} from "./auth-reducer";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state, initialized: true,
            }

        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

const  actions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS',}as const)
}


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, GetStateType, unknown, ActionsTypes>

export const initializeApp = (): any => (dispatch: any) => {
    let promise = dispatch(checkAuth());
    promise.then(() => {
        return dispatch(actions.initializedSuccess());
    })

}


export default appReducer;