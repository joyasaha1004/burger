import React from 'react';
import backorange from "../Assets/backorange.png"

const Email = () => {
    return (
        <div className="dark:bg-black w-[550px] h-[300px] pt-10 border-none md:w-screen sm:w-[140vw]">
            <div className="mb-40 w-[800px] h-20  relative lg:w-screen sm:w-[150vw]" data-aos="fade-up">
             <img src={backorange} className="w-[1000px] h-[180px] "></img>
            
            <div className="relative -ml-60 -mt-40 md:-pl-2 lg:pl-20 sm:ml-[10vw] " >
                <h3 className="text-2xl text-white font-semibold font-sans  sm:-ml-[55vw] md:text-3xl text-center -ml-5 lg:ml-10 md:-ml-[63vw] lg:-ml-[22vw]" data-aos="fade-up">Get Notified About New Products</h3>
                <div className="">
                <input type="email" placeholder="Enter your email" className="w-80 h-8 ml-[350px] pl-2 mt-5 sm:ml-12 relative md:w-96 md:h-10 md:ml-20
         lg:ml-32"data-aos="fade-up " ></input></div>
            </div>
        </div></div>
    );
};

export default Email;