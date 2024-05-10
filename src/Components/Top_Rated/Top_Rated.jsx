import React from 'react';

import pic1 from "../Assets/pic1.png";
import pic2 from "../Assets/pic2.png";
import pic3 from "../Assets/pic3.png";
import four_star from "../Assets/4_star.png";


const Top_Rated = () => {
    return (
        <div>
            <div className="dark:bg-black -mt-10 pt-10 w-[800px] lg:w-screen">

            <div className="mt-10 ml-10">
                <p 
                data-aos="fade-up"
                className="text-amber-500 text-sm">Trending Products</p>
                 <h1 
                 data-aos="fade-up"
                 className="text-2xl font-semibold dark:text-white">Top Rated Products</h1>
                <span 
                data-aos="fade-up"
                className="text-gray-600 text-xs font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo!</span>
            </div>
            <div className="flex flex-wrap ml-3">
                <div className="-mt-5 ml-5 w-72 h-96 text-center  place-item-center overflow-visible relative mb-5 group
               "
               data-aos="zoom-in"
              data-aos-once="true"
               >
                    <div className="shirt1 pl-9 ">
                        <img src={pic2} className="w-52 h-64 pt-12 group-hover:scale-105 duration-300 "></img>
                    </div>
                    <div className="-mt-28 bg-white rounded-lg shadow-2xl hover:bg-gray-900 hover:text-white">
                        <div className="pl-20 pt-20 h-40">
                     <img src={four_star} className="w-32 h-20"></img></div>
                     <h3 className="text-xl font-semibold -mt-7">Casual Wear</h3>
                     <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci.</p>
                     <button className="bg-amber-500 px-3 py-1 mt-3 rounded-full text-white text-sm hover:bg-white hover:text-amber-500 cursor-pointer mb-2">Order Now</button>
                    </div>
                </div>

                <div className="-mt-5 ml-5 w-72 h-96 text-center  place-item-center overflow-visible relative mb-5 group"
                 data-aos="zoom-in"
                 data-aos-once="true"
                 data-aos-delay="200"
                >
                    <div className="shirt1 pl-9 relative">
                        <img src={pic3} className="w-52 h-64 pt-12 group-hover:scale-105 duration-300"></img>
                    </div>
                    <div className="-mt-28 bg-white shadow-2xl rounded-lg group-hover:bg-gray-900 group-hover:text-white">
                        <div className="pl-20 pt-20 h-40">
                     <img src={four_star} className="w-32 h-20"></img></div>
                     <h3 className="text-xl font-semibold -mt-7">Printed shirt</h3>
                     <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci.</p>
                     <button className="bg-amber-500 px-3 py-1 mt-3 rounded-full text-white text-sm hover:bg-white hover:text-amber-500 cursor-pointer mb-2">Order Now</button>
                    </div>
                </div>
                <div className="-mt-5 ml-5 w-72 h-96 text-center  place-item-center overflow-visible relative mb-5 group"
                  data-aos="zoom-in"
                  data-aos-once="true"
                 data-aos-delay="300"
                >
                    <div className="shirt1 pl-5 relative ">
                        <img src={pic1} className="w-60 h-64 pt-12 group-hover:scale-105 duration-300"></img>
                    </div>
                    <div className="-mt-28 bg-white shadow-2xl rounded-lg group-hover:bg-gray-900 group-hover:text-white">
                        <div className="pl-20 pt-20 h-40">
                     <img src={four_star} className="w-32 h-20"></img></div>
                     <h3 className="text-xl font-semibold -mt-7">Women shirt</h3>
                     <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci.</p>
                     <button className="bg-amber-500 px-3 py-1 mt-3 rounded-full text-white text-sm hover:bg-white hover:text-amber-500 cursor-pointer mb-2">Order Now</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Top_Rated;