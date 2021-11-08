import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout,} from "../../redux/auth-reducer";
import {getProfile} from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.authorizedUserId;
        this.props.getProfile(userId)

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
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authorizedUserId: state.auth.id
})





export default connect(mapStateToProps, {getProfile, logout})(HeaderContainer)