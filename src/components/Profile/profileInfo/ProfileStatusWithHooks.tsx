import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateUserStatus: (status:string) => void
    isOwner: boolean
}


const ProfileStatusWithHooks:React.FC<PropsType>  = (props) => {

    let  [editMode,setEditMode] = useState(false);
    let  [status,setStatus] = useState(props.status);
    useEffect(()=> {
        setStatus(props.status)
    },[props.status]);

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus( e.currentTarget.value)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    }

    const showPersonalStatus = () => {
        // { !editMode &&
        // <div>
        //     <span onDoubleClick={()=>setEditMode(true)} >  { status||' write somebody'} </span>
        // </div>
        // }
        // {
        //     editMode &&
        //     <div>
        //         <input onChange={onStatusChange}
        //                onBlur={deactivateEditMode }
        //                value={status}
        //                autoFocus={true} />
        //     </div>
        // }
        if (!editMode){
            return <span onDoubleClick={()=>setEditMode(true)} >  { status||'Изменить статус'} </span>

        } else if(editMode){
            return <input onChange={onStatusChange}
                       onBlur={deactivateEditMode }
                       value={status}
                       autoFocus={true} />
        }
    }

    return <div>
        <span>Статус: </span>
        <b>
        {props.isOwner
            ? showPersonalStatus()
            :
                <span>  { status||'Изменить статус'} </span>

         }
        </b>


        </div>
}

export default ProfileStatusWithHooks