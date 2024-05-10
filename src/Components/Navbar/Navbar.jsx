import React from 'react';
import logo10 from "../Assets/logo10.jpg"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';


// Dark mode start
const Navbar = () => {
    const [theme, setTheme] = useState(null);

    useEffect(()=>{
        if(window.matchMedia('(prefer-color-scheme! dark)').matches){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    },[]);
    useEffect(()=>{
      if(theme === "dark"){
          document.documentElement.classList.add("dark");
      }else{
          document.documentElement.classList.remove("dark");
      }
    },[theme]);

    const handleThemeSwitch = ()=>{
        setTheme(theme === "dark" ? "light":"dark");
    }
//    Dark mode close

     //menu start
      
     const [isMenuOpen, setMenuOpen] = useState(false);

     const toggleMenu = ()=>{
         setMenuOpen(!isMenuOpen)
     }
     console.log(isMenuOpen)
    return (
        <div >
            <div className="w-[800px] bg-orange-200 flex dark:bg-yellow-900 lg:w-full sticky">
                <div className=" flex ml-5 pt-2 pb-1">
          <img src={logo10} alt="" className="w-8 h-8 lg:h-9"></img>
          <h1 className="text-lg font-sans font-bold  ml-1 dark:text-white lg:text-2xl">Shopsy</h1>
            </div>
        <div className="search flex ml-28 md:ml-16 lg:ml-96">
            <input type="text" placeholder="Search" className="text-gray-200 rounded-full pl-2 ml-10 mt-2 h-8 w-48 font-semibold -pt-1.5 text-sm hover:translate-x-px resize-x hover:pl-24 hover:w-60 duration-300 delay-200 outline-none"></input>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-5 h-5 mt-3.5 -ml-6 hover:-ml-16 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
 
        </div>
    <button className="cart bg-amber-500 rounded-3xl cursor-pointer ml-10 w-12 h-8 ml-5 mt-2 pl-5 pt-0.5 flex drop-shadow-md hover:w-20 hover:pl-7 md:ml-12" onClick={()=>alert("Obdering is not available yet.")}>
        <span className="text-white text-xs opacity-0 mt-1.5 hover:opacity-100 hover:-translate-x-6 hover:mr-8">Order</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 -ml-10 mt-0.5 hover:ml-9 hover:duration-100 delay-300 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>


    </button>
    <label className=" w-8 h-4 mt-4 ml-4 rounded-2xl bg-white drop-shadow-xl dark:bg-gray-300 cursor-pointer">
    
   <input type="checkbox" className=" sr-only peer">

    </input> 
    <span className="w-2/5 h-3 bg-amber-500 absolute rounded-full mt-0.5 ml-0.5 peer-checked:ml-4 peer-checked:dark:bg-gray-400" onClick={handleThemeSwitch}>
        </span></label>
            </div>


            <div>
               <button className="left-[610px] relative md:hidden" id="menu_btn" onClick={toggleMenu}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6 -mt-[50px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg></button>
                
            <ul className="flex text-base font-medium pl-28 opacity-0 md:opacity-100 pt-2 bg-white h-10 drop-shadow-md dark:text-white dark:bg-slate-700 lg:pl-72" >
                <li className="mr-4 hover:text-amber-500 lg:mr-6"><Link to="/">Home</Link> </li>
                <li className="mr-4 hover:text-amber-500 lg:mr-6"><Link to="/top_rated"> Top Rated</Link></li> 
                <li className="mr-4 hover:text-amber-500 lg:mr-6"><Link to="/kids_wear">Kids Wear</Link> </li>
                <li className="mr-4 hover:text-amber-500 lg:mr-6"><Link to="/men_wear"> Mens Wear</Link></li>
                <li className="mr-4 hover:text-amber-500 lg:mr-6"><Link to="/electronic">Electronics</Link></li>
                <li></li>
            </ul>
       </div>  


       {/*mobile view*/}

       {isMenuOpen ? (
             <ul className="flex text-base font-medium -mt-20 flex-col  pl-16 w-[900px] pt-6 h-72 bg-orange-200 delay-100 duration-700 transition-all dark:text-white dark:bg-yellow-900" >
             <li className="mr-4 mb-3 hover:text-amber-500"><Link to="/">Home</Link> </li>
             <li className="-ml-3 mb-3 hover:text-amber-500"><Link to="/top_rated"> Top Rated</Link></li> 
             <li className="-ml-3 mb-3 hover:text-amber-500"><Link to="/kids_wear">Kids Wear</Link> </li>
             <li className="-ml-3 mb-3 hover:text-amber-500"><Link to="/men_wear"> Mens Wear</Link></li>
             <li className="-ml-3 mb-3 hover:text-amber-500"><Link to="/electronic">Electronics</Link></li>
             <li></li>
         </ul>
       ) : null}
        </div>
    );
};

export default Navbar;