import React from 'react';
import logo10 from "../Assets/logo10.jpg";
import city from "../Assets/city.jpg";
import instra from "../Assets/instagram-white-icon.svg";
import facebook from "../Assets/facebook-app-round-white-icon.svg";
import linkedin from "../Assets/linkedin-app-white-icon.svg";

const Footer = () => {
    return (
        <div>
           <div className="w-[800px] h-40 lg:w-screen">
               <div className=" lg:w-screen">
               <img src={city} className=" lg:w-screen lg:h-96"></img></div>
              <div className=" ml-5 -mt-[300px] flex lg:ml-20 lg:gap-8">
                  <div className=" w-60">
                  <div className="flex mb-2">
                  <img src={logo10} className="w-8 h-8 lg:h-9"></img>
                  <span className="text-lg font-sans font-bold  ml-1 text-white lg:text-2xl">Shopsy</span>
                  </div>
                  <p className="text-white text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo non unde earum aspernatur rerum quia.</p></div>
                  
                  <div className="text-white ml-2">
                      <span className="font-bold">Important Links</span>
                      <ul className="text-sm mt-2 cursor-pointer">
                          <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Home</a></li>
                          <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">About</a></li>
                           <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Contact</a></li>
                           <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Blog</a></li>
                      </ul>
                  </div>
                  <div className="text-white ml-4">
                      <span className="font-bold">Links</span>
                      <ul className="text-sm mt-2 cursor-pointer">
                          <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Home</a></li>
                          <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">About</a></li>
                           <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Contact</a></li>
                           <li className="mb-2 hover:underline underline-offset-4 transition delay-200 duration-500"><a href="#">Blog</a></li>
                      </ul> 
                  </div>
                  <div className="ml-8 text-white text-sm lg:ml-12">
                      <div className="flex  gap-2 mb-6">
                          <img src={instra} className="w-5 h-5"></img>
                               <img src={facebook} className="w-5 h-5"></img>
                           <img src={linkedin} className="w-5 h-5"></img>
                      </div>
                      <div className="space-y-3">
                          <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
    <p>Noida Uttar Pradesh</p>
    </div>
    <div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
   <p>+91 123456789</p> 
    </div>
                      </div>
                  </div>
                  </div> 
               </div> 
        </div>
    );
};

export default Footer;