import React from "react"

import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (txt) => {
            dispatch(onMessageChangeActionCreator(txt))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }

    }
};
let withAuthRedirectComponent = WithAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectComponent);
export default DialogsContainer;