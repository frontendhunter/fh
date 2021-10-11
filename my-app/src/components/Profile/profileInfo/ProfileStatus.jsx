import React from "react";
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})

        }

    }

    state = {
        editMode: false,
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
    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value
        })

    }


    render() {
        return <div className={s.statusWrapper}>
            Status:
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