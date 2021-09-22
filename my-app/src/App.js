import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import {Route, Switch} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (

        <div className="AppWrapper">
            <Header/>
            <Sidebar store={props.store}/>
            <div className='contentWrapper'>
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/users" render={() => <UsersContainer />}/>
            </div>

        </div>
    );
}


export default App;
