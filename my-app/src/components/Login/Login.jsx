import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
let maxLength20 = maxLengthCreator(20)
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength20]} placeholder='Email' name={'email'} component={Input}/>
            </div>
            <div>
                <Field validate={[required,maxLength20]} placeholder="password"  type='password' name={'password'} component={Input}/>
            </div>
            <div>
                <Field  type="checkbox" name={'rememberMe'} component={Input}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if (props.isAuth){
         return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const LoginReduxForm = reduxForm({
    form:'Login',
})(LoginForm)

const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
})
export default  connect(mapStateToProps,{login})(Login)