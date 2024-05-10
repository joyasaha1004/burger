import React from 'react';
import backorange from "../Assets/backorange.png"

const Email = () => {
    return (
        <div className="dark:bg-black w-[800px] h-[300px] pt-10 border-none lg:w-screen">
            <div className="mb-40 w-[800px] h-20  relative lg:w-screen" data-aos="fade-up">
             <img src={backorange} className="w-[1000px] h-[180px]"></img>
            
            <div className="relative -mt-40 -ml-32 lg:pl-16" >
                <h3 className="text-3xl text-white font-semibold font-sans text-center lg:ml-10" data-aos="fade-up">Get Notified About New Products</h3>
                <input type="email" placeholder="Enter your email" className="w-96 h-10 ml-64 pl-2 mt-5 lg:ml-96"data-aos="fade-up" ></input>
            </div>
        </div></div>
    );
};

export default Email;