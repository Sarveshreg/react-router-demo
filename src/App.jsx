

import './App.css'
import {Routes,Route,Link} from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
function App() {
  

  return (
   
      <div id="container">
      
      <Navbar/>
      <MainSection/>
      <Footer/>
    </div>


  
  )
}

export default App
