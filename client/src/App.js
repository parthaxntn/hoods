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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>


      </Routes>
      
      <Footer/>

      </BrowserRouter>
    </div>
    
  );
}

export default App;
