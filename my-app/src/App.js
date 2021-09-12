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
                       render={() => <Dialogs state={props.state.dialogsPage}
                                              addMessage={props.addMessage}
                                              messageChange={props.messageChange}/>}/>
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage}
                                              addPost={props.addPost}
                                              postChange={props.postChange}/>}/>
            </div>

        </div>
    );
}


export default App;
