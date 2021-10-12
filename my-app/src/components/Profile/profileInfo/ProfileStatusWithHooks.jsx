import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks  = (props) => {

    let  [editMode,setEditMode] = useState(false);
    let  [status,setStatus] = useState(props.status);
    useEffect(()=> {
        setStatus(props.status)
    },[props.status]);

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    }

    return <div className={s.statusWrapper}>
            Status:
            { !editMode &&
                <div>
                    <span onDoubleClick={()=>setEditMode(true)} >  { status||' write somebody'} </span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange}
                           onBlur={deactivateEditMode }
                           value={status}
                           autoFocus={true} />
                </div>
            }

        </div>
}

export default ProfileStatusWithHooks