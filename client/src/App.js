import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero_Sec from './components/Hero_Sec';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';


function App() {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [flash, setFlash] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar setUser={setUser} user = {user} password={password} setPassword={setPassword} setFlash = {setFlash}/>
      <Routes>
        <Route path='/' element={<Home setUser={setUser} password={password} setPassword={setPassword} setFlash = {setFlash}/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
      
      <Footer/>

      </BrowserRouter>
    </div>
    
  );
}

export default App;
