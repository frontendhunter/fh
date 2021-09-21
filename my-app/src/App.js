import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";


const App = (props) => {
    return (

        <div className="AppWrapper">
            <Header/>
            <Sidebar store={props.store}/>
            <div className='contentWrapper'>
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                <Route path="/users" render={() => <Users/>}/>
            </div>

        </div>
    );
}


export default App;
