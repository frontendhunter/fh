import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader";
import store from "./redux/redux-store";
import {WithSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import ( "./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))
const Login = React.lazy(() => import ("./components/Login/Login"))


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
                        <Switch>
                            {/*swicth нужен, когда нам нужно перейсти по первому откликнувшемуся роуту*/}


                            <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                            <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                            <Route path="/users" render={ () => <UsersContainer/>}/>
                            <Route path="/login" render={WithSuspense(Login)}/>
                            <Route exact path='/' render={()=><Redirect to={"/profile"}/>}/>
                            <Route path="*" render={()=><div>404 NOT FOUND</div>}/>



                        </Switch>

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