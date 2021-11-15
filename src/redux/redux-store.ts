import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
}
)

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never



export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<Promise<void>, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

// @ts-ignore
window.__store__ = store

export default store;