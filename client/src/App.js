import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero_Sec from './components/Hero_Sec';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Hero_Sec/>
      <About/>
      <Footer/>

    </div>
    
  );
}

export default App;
