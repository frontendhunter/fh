import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
let maxLength20 = maxLengthCreator(20)
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength20]} placeholder='login' name={'login'} component={Input}/>
            </div>
            <div>
                <Field validate={[required,maxLength20]} placeholder="password" name={'password'} component={Input}/>
            </div>
            <div>
                <Field validate={[required,maxLength20]} type="checkbox" name={'rememberMe'} component={Input}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const LoginReduxForm = reduxForm({
    form:'Login',
})(LoginForm)
export default  Login