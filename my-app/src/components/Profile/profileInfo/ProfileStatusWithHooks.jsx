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
            return <span onDoubleClick={()=>setEditMode(true)} >  { status||' write somebody'} </span>

        } else if(editMode){
            return <div>
                <input onChange={onStatusChange}
                       onBlur={deactivateEditMode }
                       value={status}
                       autoFocus={true} />
            </div>
        }
    }

    return <div>
        <span>Статус: </span>
        <b>
        {props.isOwner
            ? showPersonalStatus()
            :
                <span>  { status||' write somebody'} </span>

         }
        </b>


        </div>
}

export default ProfileStatusWithHooks