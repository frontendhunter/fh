import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (

        <div className="AppWrapper">
            <Header/>
            <Sidebar store={props.store}/>
            <div className='contentWrapper'>
                <Route path="/dialogs"
                       render={() => <DialogsContainer store={props.store}
                                              // dispatch={props.store.dispatch.bind()}
                       />}
                />
                <Route path="/profile"
                       render={() => <Profile store={props.store}
                           // profilePage={props.state.profilePage}
                           //                    dispatch={props.dispatch}
                       />}/>
            </div>

        </div>
    );
}


export default App;
