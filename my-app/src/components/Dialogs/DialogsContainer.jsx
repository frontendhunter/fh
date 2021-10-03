import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//
// const DialogsContainer = (props) => {
//     debugger
//     let state = props.store.getState();
//     let newMessageText = state.dialogsPage.newMessageText;
//     let messageChange = (txt) => {
//         props.store.dispatch(onMessageChangeActionCreator(txt))
//     }
//     let addMessage = () => {
//         props.store.dispatch(addMessageActionCreator())
//     }
//
//     return <Dialogs state={state} newMessageText={newMessageText} addMessage={addMessage}
//                     messageChange={messageChange}/>
// }


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth,
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;