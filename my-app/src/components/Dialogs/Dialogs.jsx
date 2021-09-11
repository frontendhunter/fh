import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} img={d.img}/>)

    let messagesElements= props.state.messages.map(m=><Message class={m.class} message={m.message} name={m.name} img={m.img}/>)

    let newMessage = React.createRef();

    let showMessage = () =>{
        alert(newMessage.current.value)
    }

    return (
        <div className={s.dialogs__wrap}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <form>
                    <textarea ref={newMessage}></textarea>
                    <div><button onClick={showMessage}>show message</button></div>
                </form>
            </div>
        </div>

    )
}
export default Dialogs