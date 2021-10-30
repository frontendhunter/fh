import './App.css';
import React, {Suspense} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader";
import store from "./redux/redux-store";
import {WithSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import ( "./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className="AppWrapper">
                    <HeaderContainer/>
                    <Sidebar store={this.props.store}/>
                    <div className='contentWrapper'>
                        {
                            //Withsuspense можно сделать без хока, см. доку реакта
                        }
                        <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                        <Route path="/users" render={ WithSuspense(UsersContainer)}/>
                        <Route path="/login" render={WithSuspense(Login)}/>
                    </div>

                </div>
            );
        }
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter,
)(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;