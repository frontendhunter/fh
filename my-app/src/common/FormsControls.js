import React from "react";
import s from './FormsControls.module.css'

const FormControl = ({input,meta,Formtype, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error: "")}>
            <div>
                <Formtype {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span> }
            </div>
        </div>

    )
}


export const Textarea = (props) => {
    return <FormControl {...props} Formtype="textarea"></FormControl>
}


export const Input = (props) => {
    return <FormControl {...props} Formtype="input"></FormControl>
}
