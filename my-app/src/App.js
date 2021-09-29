import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (

        <div className="AppWrapper">
            <HeaderContainer/>
            <Sidebar store={props.store}/>
            <div className='contentWrapper'>
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path="/users" render={() => <UsersContainer />}/>
            </div>

        </div>
    );
}


export default App;
