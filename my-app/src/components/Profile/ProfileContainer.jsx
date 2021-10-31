import React from "react"
import s from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
    }

    render() {

        return (
            <main className={s.main}>
                <Profile {...this.props}
                         isOwner={ !this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                />
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
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus,savePhoto,saveProfile}),
    withRouter,
)(ProfileContainer);
