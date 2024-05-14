import React from 'react';
import logo10 from "../Assets/logo10.jpg";
import city from "../Assets/city.jpg";
import instra from "../Assets/instagram-white-icon.svg";
import facebook from "../Assets/facebook-app-round-white-icon.svg";
import linkedin from "../Assets/linkedin-app-white-icon.svg";

const Footer = () => {
    return (
        <div className="">
           <div className="w-[540px] h-40 sm:w-[110vw] ">
               <div className="sm:w-[110vw] md:w-[250vw] sm:h-[20vw] ">
               <img src={city} className=" lg:w-screen lg:h-[40vw]"></img></div>
              <div className=" ml-5 -mt-[280px] flex lg:-mt-[15vw] lg:gap-8 sm:-mt-[70px] md:mt-20 lg:ml-10">
                  <div className=" w-40 sm:w-[30vw] ">
                  <div className="flex mb-2">
                  <img src={logo10} className="w-8 h-8 lg:h-9"></img>
                  <span className="text-lg font-sans font-bold md:text-xl ml-1 text-white lg:text-2xl">Shopsy</span>
                  </div>
                  <p className="text-white text-xs md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo non unde earum aspernatur rerum quia.</p></div>
                  
                  <div className="text-white sm:ml-2 ">
                      <span className="font-bold text-sm md:text-lg">Important Links</span>
                      <ul className="text-xs mt-2 cursor-pointer md:text-base ">
                          <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Home</a></li>
                          <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">About</a></li>
                           <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Contact</a></li>
                           <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Blog</a></li>
                      </ul>
                  </div>
                  <div className="text-white ml-3 sm:ml-5 md:ml-6">
                      <span className="font-bold text-sm md:text-lg">Links</span>
                      <ul className="text-xs mt-2 cursor-pointer md:text-base ">
                          <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Home</a></li>
                          <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">About</a></li>
                           <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Contact</a></li>
                           <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Blog</a></li>
                      </ul> 
                  </div>
                  <div className="ml-5 mt-1 text-white text-sm md:ml-7 lg:ml-12">
                      <div className="flex  gap-2 mb-6">
                          <img src={instra} className="w-4 h-4 lg:w-5 h-5"></img>
                               <img src={facebook} className="w-4 h-4 lg:w-5 h-5"></img>
                           <img src={linkedin} className="w-4 h-4 lg:w-5 h-5"></img>
                      </div>
                      <div className="space-y-4 text-xs">
                          <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3 lg:w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
    <p className="ml-1 -mt-0.5 md:text-base ">Noida Uttar Pradesh</p>
    </div>
    <div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3 lg:w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
   <p className="ml-1 -mt-0.5 md:text-base">+91 123456789</p> 
    </div>
                      </div>
                  </div>
                  </div> 
               </div> 
        </div>
    );
};

export default Footer;