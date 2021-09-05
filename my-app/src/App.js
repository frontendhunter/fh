import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <Header/>
                <Sidebar/>
                <div className='contentWrapper'>
                    <Route path="/dialogs" render={Dialogs} />
                    <Route path ="/profile" render={Profile} />
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
