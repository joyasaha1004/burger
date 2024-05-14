import React from 'react';
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import comma from "../Assets/comma.jpg"
const Testimonial = () => {
    return (
        <div className="dark:bg-black  w-[550px] -mb-10 sm:w-[150vw]">
        <div className="-mt-5 pt-5">
            <div className="ml-[200px] mt-7 sm:w-[80vw] sm:ml-[40vw] lg:mt-7">
                <button className="bg-amber-500 text-white p-2 rounded block">View All Products</button>
            </div>
            <div className="text-center ml-16 pt-20 w-[400px] sm:w-[80vw] md:-ml-2 md:w-[100vw]">
                <p className="text-amber-500 font-sans">What our customers say</p>
                <h1 className="text-3xl font-semibold dark:text-white">Testimonial</h1>
                <span className="text-gray-600 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, recusandae.</span>
            </div>
            <div className="pl-28 pt-20 pb-28 sm:flex sm:flex-wrap sm:-ml-20 sm:gap-3 sm:w-[110vw]  ">
                <div className="bg-orange-100 w-[300px] h-[200px] p-6 rounded-md drop-shadow-lg mb-5 ">
                 <img src={img1} className="w-12 h-12 rounded-full "></img>
                 <div className="flex ml-36 -mt-7">
                     <img src={comma} className="w-32 ml-12 -mr-24"></img>
                     <img src={comma} className="w-32 "></img>
                 </div>
                 <div className="-mt-10 w-[290px]">
                     <p className="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, ab illum fuga amet alias aliquam!</p>
                     <h3 className="text-lg font-semibold font-sans">Sachin Tendulkar</h3>
                 </div>
                </div>

                <div className="bg-orange-100 w-[300px] h-[200px] p-6 rounded-md drop-shadow-lg mb-5 mr-4">
                 <img src={img2} className="w-12 h-12 rounded-full "></img>
                 <div className="flex ml-36 -mt-7">
                     <img src={comma} className="w-32 ml-12 -mr-24"></img>
                     <img src={comma} className="w-32 "></img>
                 </div>
                 <div className="-mt-10 w-[290px]">
                     <p className="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, ab illum fuga amet alias aliquam!</p>
                     <h3 className="text-lg font-semibold font-sans">Victor</h3>
                 </div>
                </div>
                <div className="bg-orange-100 w-[300px] h-[200px] p-6 rounded-md drop-shadow-lg mb-5 mr-5 ">
                 <img src={img3} className="w-12 h-12 rounded-full "></img>
                 <div className="flex ml-36 -mt-7">
                     <img src={comma} className="w-32 ml-12 -mr-24"></img>
                     <img src={comma} className="w-32 "></img>
                 </div>
                 <div className="-mt-10 w-[290px]">
                     <p className="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, ab illum fuga amet alias aliquam!</p>
                     <h3 className="text-lg font-semibold font-sans">Satya Nadella</h3>
                 </div>
                </div>     

            </div>
            </div>    
        </div>
    );
};

export default Testimonial;