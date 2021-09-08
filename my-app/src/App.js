import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import DialogItem from "./components/Dialogs/DialogItem/DialogsItem";
import Message from "./components/Dialogs/Message/Message";
import Post from "./components/Profile/MyPosts/Post/Post";


let dialogs = [
    {id:1, name:'Erjan'},
    {id:2, name:'BrushGirl'},
    {id:3, name:'uRina'},
    {id:4, name:'Dushnila'}
]
let messages = [
    {id:1, message:'hy'},
    {id:2, message:'sosi jopu'},
    {id:3, message:'pisia popa pisia popa pisia popa pisia popa pisia popa  '},
    {id:4, message:'popa pisia popa pisia popa pisia'}
]

let posts = [
    {id:1, name: 'Joseph', message: 'smth clever text', likesCount: 16},
    {id:2, name: 'Isaac', message: 'smth clever text about life', likesCount: 39},
]
let postsElement = posts.map(posts =>  <Post name={posts.name} message={posts.message} likesCount={posts.likesCount}/>)

let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

let messagesElements=messages.map(m=><Message message={m.message}/>)


const App = () => {
    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <Header/>
                <Sidebar/>
                <div className='contentWrapper'>
                    <Route path="/dialogs" render={()=> <Dialogs dialogsElements={dialogsElements} messagesElements={messagesElements}/> } />
                    <Route path ="/profile" render={()=> <Profile postsElement={postsElement}/> } />
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
