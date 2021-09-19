import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    debugger
    let state = props.store.getState() ;
    let newMessageText = state.dialogsPage.newMessageText;
    //
    // let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} img={d.img}/>)
    //
    // let messagesElements = props.state.dialogsPage.messages.map(m => <Message class={m.class} message={m.message}
    //                                                                           name={m.name}
    //                                                                           img={m.img}/>)

    let messageChange = (txt) => {
        props.store.dispatch(onMessageChangeActionCreator(txt))
    }
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return <Dialogs state={state} newMessageText={newMessageText} addMessage={addMessage} messageChange={messageChange}/>
        // <div className={s.dialogs__wrap}>
        //     <div className={s.dialogs}>
        //         {dialogsElements}
        //     </div>
        //     <div className={s.messages}>
        //         {messagesElements}
        //         <div>
        //             <textarea onChange={onMessageChange} ref={newMessage}
        //                       value={newMessageText}></textarea>
        //             <div>
        //                 <button onClick={addMessage}>add message</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

}
export default DialogsContainer;