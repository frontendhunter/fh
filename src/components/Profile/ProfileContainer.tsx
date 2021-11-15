import React from "react"
import s from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getProfile: (userId: number) => void,
    getUserStatus: (userId: number) => void,
    updateUserStatus: (status: string) => void,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId as number);
        this.props.getUserStatus(userId as number);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
    }

    render() {

        return (
            <main className={s.main}>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                />
            </main>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer);
