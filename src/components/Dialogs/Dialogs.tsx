import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm } from "redux-form";
import {Textarea} from "../../common/FormsControls";
import {FieldValidatorType, maxLengthCreator, required} from "../../utils/validators/validators";
import {PropsType} from "./DialogsContainer";



const Dialogs:React.FC<PropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}
                                                                         img={d.img}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}
                                                                        name={m.name}
                                                                        img={m.img}/>)


    let addNewMessage = (values:any) => {
        props.addMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs__wrap}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <MessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}

const maxLength50:FieldValidatorType = maxLengthCreator(50);

const MessageForm = (props:any) => {
    return <form onSubmit={props.handleSubmit}>
        <Field validate={[required,maxLength50]} component={Textarea}  name={'newMessageBody'} placeholder={'Enter your message'}/>
        <div>
            <button>add message</button>
        </div>
    </form>
}



const MessageReduxForm = reduxForm({
    form:'Message',
})(MessageForm)


export default Dialogs