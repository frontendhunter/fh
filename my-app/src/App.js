import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
         return   <Preloader/>
        }else {
            return (
                <div className="AppWrapper">
                    <HeaderContainer/>
                    <Sidebar store={this.props.store}/>
                    <div className='contentWrapper'>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>

                </div>
            );
        }
        }
        }


const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
    connect(mapStateToProps,{initializeApp}),
    withRouter,
)(App);
