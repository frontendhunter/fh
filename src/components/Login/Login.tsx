import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../../common/FormsControls.module.css'
import {AppStateType} from "../../redux/redux-store";


type LoginFormOwnProps = {
    captchaUrl: string | null
}


let maxLength50 = maxLengthCreator(50)

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({error, handleSubmit, captchaUrl}) => {

    return (
        <div className={s.allFormWrapper}>

            <div className={s.mainTitle}>
                <h1>Найдите сотрудников с <b>FrontEndHunter!</b></h1>
            </div>

            <form className={s.formWrapper} onSubmit={handleSubmit}>
                <div className={s.formCentre}>

                    <h2>Войдите в аккаунт</h2>
                    {captchaUrl && <img src={captchaUrl}/>}
                    {captchaUrl && <Field validate={[required, maxLength50]} placeholder='captcha' name={'captcha'}
                                          component={Input}/>}
                    <div>
                        <Field validate={[required, maxLength50]} placeholder='Email' name={'email'} component={Input}/>
                    </div>
                    <div>
                        <Field validate={[required, maxLength50]} placeholder="password" type='password'
                               name={'password'}
                               component={Input}/>
                    </div>
                    <div className={s.rememberMe__container}>
                        <Field className={s.rememberMe} type="checkbox" name={'rememberMe'}
                               component={Input}/> запомнить меня
                    </div>
                    {
                        error && <div className={s.formSummaryError}>{error}</div>
                    }
                    <div>
                        <button>Продолжить</button>
                    </div>
                </div>

                <div className={s.imageBlock}><img
                    src="	https://i.hh.ru/css/globals/account/blocks/login/applicant__min_.svg?v=040521"
                    alt="Заполните форму"/></div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'Login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {login})(Login)