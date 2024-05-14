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
        <div className="overflow-hidden w-[550px] h-[600px] bg-gray-100 -mt-16  fixed relative dark:bg-black md:mt-[0.7px] lg:w-[1500px] lg:pl-32 sm:w-[150vw] sm:h-[450px] lg:h-screen ">
            <div className="">
                <div className="w-[400px] h-[450px] bg-orange-200 rounded-3xl rotate-[40deg] -mt-[200px] relative ml-[20vw] dark:bg-yellow-900 sm:ml-[45vw] sm:-mt-[240px] lg:w-[500px] md:ml-[55vw] md:-mt-[210px] ml-10 lg:h-[500px] lg:ml-96 lg:-mt-60">

                </div>
                <div className=" -mt-[150px] lg:w-fix lg:-ml-20 md:">
           <Slider {...settings}>
               {ImageList.map((data)=>(

   
    <div className="">
        <div className=" relative h-screen ">

        <div className=" ml-[7vw] sm:w-[440px] sm:h-[300px] sm:mt-7 sm:ml-[36vw] w-[550px] h-[400px] md:w-[500px] md:h-[400px] md:ml-[48vw] md:-mt-[10px]
        lg:w-[800px] lg:h-[800px] lg:ml-[500px] md:ml-[29vw]">
            <img src={data.img} 
              data-aos="zoom-in"
              data-aos-once="true"

            className="h-80"></img>
        </div>
        <div className="-mt-[150px] sm:ml-[10px] sm:-mt-[340px] sm:text-left  md:ml-4 text-center ml-[130px] dark:text-white md:-mt-[440px] md:w-80 sm:w-[50vw] lg:-mt-[850px] w-72">
         <h1 className="text-3xl lg:text-4xl font-semibold font-sans mb-3 pt-20 lg:w-96 "
         data-aos="zoom-out"
         data-aos-duration="500"
         data-aos-once="true"
         >{data.title}</h1>
       <p 
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
       className="w-72 text-xs mb-4 -ml-5 sm:ml-1 lg:text-base">{data.description}</p>
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