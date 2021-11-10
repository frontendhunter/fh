import React from "react"
import {addMessageActionCreator, InitialStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateType={
    newMessageText:string,
    dialogsPage:any,
}

let mapStateToProps = (state:any):MapStateType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
};
let mapDispatchToProps = (dispatch:any) => {
    return {

        addMessage: (newMessageBody:string) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }

    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);