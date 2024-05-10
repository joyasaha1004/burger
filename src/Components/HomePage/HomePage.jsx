import React from 'react';
import couple from "../Assets/couple.png"; 
import women from "../Assets/women5.png";
import discount from "../Assets/dis.png";
import Slider from "react-slick";
const ImageList =[{
    id:1,
    img:couple,
    title:"Upto 50% off on all Men's Wear",
    description:"Lorem ipsum dolor sit amet consectetur adipisic elit. Ipsam provident, maxime aliqua"
},
{
    id:2,
    img:women,
    title:" 30% off on all Women's Wear",
    description:"Lorem ipsum dolor sit amet consectetur adipisic elit. Ipsam provident, maxime aliqua"
},
{
    id:3,
    img:discount,
    title:"50% off on all Products Sale",
    description:"Lorem ipsum dolor sit amet consectetur adipisic elit. Ipsam provident, maxime aliqua"
},
];

const HomePage = () => {
      var settings = {
          dots: false,
          arrows: false,
          infinite : true,
          speed: 800,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "ease-in-out",
          pauseOnHover: false,
          pauseOnFocus: true,
         
       } ;
    return (
        <div className="overflow-hidden w-[800px] h-screen bg-gray-100 -mt-16 relative dark:bg-black md:mt-[0.7px] lg:w-[1500px] lg:pl-32 md:h-screen">
            <div className="">
                <div className="w-[400px] h-[400px] bg-orange-200 rounded-3xl rotate-45 -mt-36 relative ml-80 dark:bg-yellow-900 lg:w-[500px] md:-mt-40 lg:h-[500px] lg:ml-96 lg:-mt-60">

                </div>
                <div className="container -mt-32 sm:-mt-36 lg:w-fix lg:-ml-20">
           <Slider {...settings}>
               {ImageList.map((data)=>(

   
    <div className="">
        <div className=" relative h-screen sm:-mt-2">

        <div className=" ml-60 sm:ml-72 sm:w-[450px] lg:w-[500px] lg:ml-[460px]">
            <img src={data.img} 
              data-aos="zoom-in"
              data-aos-once="true"

            className="-mt-3 sm:h-[400px]"></img>
        </div>
        <div className="text ml-5 -mt-[415px] dark:text-white lg:mr-16">
         <h1 className="text-4xl font-semibold font-sans w-72 mb-3 lg:text-5xl pt-20 lg:w-96 "
         data-aos="zoom-out"
         data-aos-duration="500"
         data-aos-once="true"
         >{data.title}</h1>
       <p 
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
       className="w-96 text-sm mb-4 lg:text-base">{data.description}</p>
         <button 
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
         className="bg-amber-500 hover:scale-100  delay-150 duration-300 hover:bg-amber-700 rounded-full px-2 py-1 text-white text-sm lg:p-2 ">Order Now</button>
                     </div>
    </div></div>
    ))}
                      </Slider></div>
      </div>  </div>
         
    );
};

export default HomePage;