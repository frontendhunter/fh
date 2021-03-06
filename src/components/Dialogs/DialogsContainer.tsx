import React from "react"
import {actions, InitialStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateType = {
    dialogsPage: InitialStateType,
}
type MapDispatchType = {
    addMessage: (newMessageBody:string) => void
}
type OwnPropsType =  InitialStateType

export type PropsType =  MapStateType & MapDispatchType & OwnPropsType
const DialogsContainer:React.FC<PropsType> = (props) => {
    return <Dialogs {...props}/>
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage
    }
};

export default compose<React.ComponentType>(
    connect<MapStateType,MapDispatchType,OwnPropsType, AppStateType>(mapStateToProps, {addMessage:actions.addMessage}),
    WithAuthRedirect
)(DialogsContainer);