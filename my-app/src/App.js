import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="AppWrapper">
      <Header />
      <Sidebar />
      {/*<Profile />*/}
    </div>
  );
}


export default App;
