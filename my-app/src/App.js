import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {
    return (

        <div className="AppWrapper">
            <Header/>
            <Sidebar state={props.state.sideBar}/>
            <div className='contentWrapper'>
                <Route path="/dialogs"
                       render={() => <Dialogs state={props.state}
                                              dispatch={props.dispatch}/>}/>
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}/>}/>
            </div>

        </div>
    );
}


export default App;
