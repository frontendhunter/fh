import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
debugger
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}
                                                                         img={d.img}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} class={m.class} message={m.message}
                                                                        name={m.name}
                                                                        img={m.img}/>)

    let newMessage = React.createRef();

    let onMessageChange = () => {
        let txt = newMessage.current.value
        props.messageChange(txt)
    }
    let onAddMessage = () => {
        props.addMessage();
    }

    return (
        <div className={s.dialogs__wrap}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessage}
                              value={props.newMessageText}></textarea>
                    <div>
                        <button onClick={onAddMessage}>add message</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dialogs