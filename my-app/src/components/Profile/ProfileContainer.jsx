import React from "react"
import s from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return (
            <main className={s.main}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
            </main>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
    withRouter,
)(ProfileContainer);
