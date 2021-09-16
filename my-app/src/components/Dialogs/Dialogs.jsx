import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} img={d.img}/>)

    let messagesElements = props.state.dialogsPage.messages.map(m => <Message class={m.class} message={m.message}
                                                                              name={m.name}
                                                                              img={m.img}/>)

    let newMessage = React.createRef();

    let onMessageChange = () => {

        let txt = newMessage.current.value
        props.dispatch(onMessageChangeActionCreator(txt))
    }
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={s.dialogs__wrap}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.state.dialogsPage.newMessageText}></textarea>
                    <div>
                        <button onClick={addMessage}>add message</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dialogs