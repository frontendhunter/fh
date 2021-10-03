import React from "react"
import s from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            <main className={s.main}>
                <Profile {...this.props} profile={this.props.profile}/>
            </main>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let withUrlProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getProfile})(withUrlProfileContainer)