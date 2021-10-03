import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuth, setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../ api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.checkAuth()
    }

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps,{setAuthUserData,checkAuth})(HeaderContainer)