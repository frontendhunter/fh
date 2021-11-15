import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout,} from "../../redux/auth-reducer";
import {getHeaderProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";


type MapStatePropsType = {
    isAuth: boolean
    profile: ProfileType | null
    login: string | null
    authorizedUserId: number | null
}
type MapDispatchPropsType = {

    logout: () => void

    getHeaderProfile: (usrId: number) => void

}

type PropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<PropsType> {
    refreshProfile() {
        const userId = this.props.authorizedUserId;
        if (userId) {
            this.props.getHeaderProfile(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    render() {

        return <Header {...this.props}
                       logout={this.props.logout}
                       isAuth={this.props.isAuth}
                       profile={this.props.profile}
                       login={this.props.login}

        />
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.headerProfile,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authorizedUserId: state.auth.id
})


export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    getHeaderProfile,
    logout
})(HeaderContainer)