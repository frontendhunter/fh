import './App.css';
import React from 'react';
import {  HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {WithSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import ( "./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"))
const Login = React.lazy(() => import ("./components/Login/Login"))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: ()=>void
}
const SuspenseDialogs = WithSuspense(DialogsContainer)
const SuspenseProfile = WithSuspense(ProfileContainer)


class App extends React.Component<MapPropsType & DispatchPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (<div>

                    <HeaderContainer/>
                    <div className="AppWrapper">
                        {/*<Sidebar store={this.props.store}/>*/}
                        <div className='contentWrapper'>
                            {
                                //Withsuspense можно сделать без хока, см. доку реакта
                            }
                            <Switch>
                                {/*swicth нужен, когда нам нужно перейсти по первому откликнувшемуся роуту*/}


                                <Route path="/dialogs" render={()=><SuspenseDialogs/>}/>
                                <Route path='/profile/:userId?' render={()=><SuspenseProfile/>}/>
                                <Route path="/users" render={() => <UsersContainer/>}/>
                                <Route path="/login" render={ WithSuspense(Login)}/>
                                <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                                <Route path="*" render={() => <div>404 NOT FOUND</div>}/>


                            </Switch>

                        </div>

                    </div>
                </div>
            );
        }
    }
}


const mapStateToProps = (state:AppStateType) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter,
)(App);

const SamuraiJSApp:React.FC = ( ) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;