import logo from './logo.svg';
import './App.css';
import SignUpForm from './frontend/Signup';
import { Router, Routes, route} from 'react-router-dom';
import MessengerDashboard from './frontend/Maindashboard';
import Navbar from './frontend/Navbar'


function App() {
  return (
    <div>
        <Navbar/>
      <div>
         <MessengerDashboard/>
      </div>
    </div>

  );
}

export default App;
