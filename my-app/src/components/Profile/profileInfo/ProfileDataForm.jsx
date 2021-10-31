import s from "./ProfileInfo.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input, Textarea} from "../../../common/FormsControls";
import {Field, reduxForm} from "redux-form";


let maxLength20 = maxLengthCreator(20)
let maxLength100 = maxLengthCreator(100)
let maxLength300 = maxLengthCreator(300)
let maxLength1000 = maxLengthCreator(1000)


const ProfileDataForm = ({profile, handleSubmit,error}) => {
debugger
    let contacts = profile.contacts;

    return <form onSubmit={handleSubmit} className={s.profileData}>


        {
            error && <div className={s.formSummaryError}>{ error}</div>
        }

        <div><b>Имя: </b><Field validate={[required, maxLength20]} placeholder='Имя' name={'fullName'}
                                component={Input}/></div>
        <div>
            <button onClick={handleSubmit}>save</button>
        </div>

        <div>
            <b>Обо мне:</b>

            <Field validate={[required, maxLength300]} placeholder='Обо мне...' name={'aboutMe'} component={Textarea}/>
        </div>
        <hr/>
        <div>
            {/*<b>Ищу работу:</b> {profile.lookingForAJob ? 'Да!' : 'Нет'}*/}
            <Field validate={[required]} type='checkBox' name={'lookingForAJob'} component={Input}/>
        </div>
        <p>
            <b>скилы: </b>
            <Field validate={[required, maxLength1000]} placeholder='Мои навыки...' name={'lookingForAJobDescription'}
                   component={Textarea}/>

        </p>
        <hr/>
        <div>
            contacts:
            <p className={s.profileLinks}>{Object.keys(contacts).map(el => <div key={el}>{el}: <Field validate={[maxLength100]}
                                                                                             placeholder={el}
                                                                                             name={'contacts.' + el}
                                                                                             component={Input}/>
            </div>)}</p>
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm)
export default ProfileDataFormReduxForm