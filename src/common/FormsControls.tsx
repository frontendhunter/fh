import React from "react";
import s from './FormsControls.module.css'

type FormControlPropsType={
    input: { }
    meta: {touched:boolean, error:string}
    Formtype: any
}

const FormControl:React.FC<FormControlPropsType> = ({input, meta: {touched, error},Formtype, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error: "")}>
            <div>
                <Formtype {...input} {...props}/>
            </div>
            <div>
                {hasError && <span>{error}</span> }
            </div>
        </div>

    )
}


export const Textarea = (props:any) => {
    return <FormControl {...props} Formtype="textarea"/>
}


export const Input = (props:any) => {
    return <FormControl {...props} Formtype="input"/>
}
