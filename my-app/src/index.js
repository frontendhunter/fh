import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, messageChange, postChange} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} postChange={postChange} addMessage={addMessage} messageChange={messageChange}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree(state);
subscribe(renderEntireTree);
