import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateUserStatus:(newStatus:string)=>void
}
type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
    componentDidUpdate(prevProps:PropsType, prevState:StateType) {

        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})

        }

    }

    activateEditMode = () => {

        this.setState({
            editMode: true,
            status: this.props.status,
        })
    }
    deactivateEditMode = () => {

        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)

    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }


    render() {
        return <div className={s.statusWrapper}>
            Должность:
            {
                !this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>  {this.props.status || ' write somebody'}</span>
                </div>
            }
            {
                this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true}
                           value={this.state.status}/>
                </div>
            }

        </div>
    }
}

export default ProfileStatus