
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css"
import React from "react"
import Menu from './Components/Menu/Menu';
import Home from './Components/Pages/Home';
import Top_Rated from './Components/Pages/Top_Rated';
import Kids_wear from './Components/Pages/Kids_wear';
import Mens_wear from './Components/Pages/Mens_wear';
import Electronic from './Components/Pages/Electronic';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';



function App() {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();

  },[]);

  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/toprated" element={<Top_Rated/>}/>
      <Route path="/kidswear" element={<Kids_wear/>}/>
      <Route path="/menswear" element={<Mens_wear/>}/>
      <Route path="/electronic" element={<Electronic/>}/>
    </Routes>
      
    </>
  )
}

export default App
