import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout,} from "../../redux/auth-reducer";
import {getHeaderProfile } from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {
    refreshProfile(){
        const userId = this.props.authorizedUserId;
        this.props.getHeaderProfile(userId)
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.headerProfile,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authorizedUserId: state.auth.id
})





export default connect(mapStateToProps, {getHeaderProfile, logout})(HeaderContainer)