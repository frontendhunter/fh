import s from "./ProfileInfo.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input, Textarea} from "../../../common/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types/types";


let maxLength20 = maxLengthCreator(20)
let maxLength100 = maxLengthCreator(100)
let maxLength300 = maxLengthCreator(300)
let maxLength1000 = maxLengthCreator(1000)

type PropsType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({profile, handleSubmit, error}) => {

    let contacts = profile.contacts;

    return <form onSubmit={handleSubmit} className={s.profileData}>


        <div><b>Имя: </b><Field className={s.fields} validate={[required, maxLength20]} placeholder='Ваше имя'
                                name={'fullName'}
                                component={Input}/>
        </div>
        <div>
            <b>Обо мне:</b>

            <Field className={s.fields} validate={[required, maxLength300]} placeholder='Обо мне...' name={'aboutMe'}
                   component={Textarea}/>
        </div>
        <div>
            {/*<b>Ищу работу:</b> {profile.lookingForAJob ? 'Да!' : 'Нет'}*/}
            <b>Ищу работу:</b>
            <Field validate={[]} type='checkBox' name={'lookingForAJob'} component={Input}/>

        </div>
        <p>
            <b>Навыки: </b>
            <Field className={s.fields} validate={[required, maxLength1000]} placeholder='Мои навыки...'
                   name={'lookingForAJobDescription'}
                   component={Textarea}/>

        </p>
        <div>
            <b>Контакты:</b>
            <div className={s.profileLinks}>{Object.keys(contacts).map(el => <div key={el}><span
                className={s.labelInput}>{el}:</span> <Field className={s.fields} validate={[maxLength100]}
                                                             placeholder={el}
                                                             name={'contacts.' + el}
                                                             component={Input}/>
            </div>)}</div>
        </div>
        <div>

            {
                error && <div className={s.formSummaryError}>{error}</div>
            }

            <button className={s.accept__btn} onClick={handleSubmit}>Сохранить</button>
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: "editProfile"})(ProfileDataForm)
export default ProfileDataFormReduxForm