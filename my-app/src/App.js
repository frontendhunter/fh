import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'

const App = () => {
  return (
    <div className="App">
      some txt
      <Header />
      <Sidebar />
      <ToDo />
    </div>
  );
}

const ToDo = () => {
  return (
    <ul>
      <li className="smth">by smth </li>
      <li>do smth</li>
      <li>do it every time</li>
    </ul>
  )
}

export default App;
