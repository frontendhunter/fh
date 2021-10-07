import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='login' name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder="password" name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={'input'}/>
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