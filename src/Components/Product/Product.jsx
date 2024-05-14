import React from 'react';
import shopping1 from "../Assets/shopping1.jpg";
import shopping2 from "../Assets/shopping2.jpg";
import shopping3 from "../Assets/shopping3.jpg";
import shopping4 from "../Assets/shopping4.jpg";
import shopping5 from "../Assets/shopping5.jpg"
import  star from "../Assets/star.png";


const ProductData = [
  {
    id:1,
    img: shopping1,
   title: "Women Ethnic",
   rating: 5.0,
    color: "White",
   aosDelay :"0",
  },
  {
    id:2,
    img: shopping2,
   title: "Women Western",
   rating: 4.5,
   color: "Red",
   aosDelay :"200",
  },
  {
    id:3,
    img: shopping3,
   title: "Women Ethnic",
   rating: 5.0,
   color: "Pink",
   aosDelay :"0",
  },
  {
    id:4,
    img: shopping4,
   title: "Women Ethnic",
   rating: 5.0,
   color: "Pink",
   aosDelay :"0",
  },
  {
    id:5,
    img: shopping5,
   title: "Women Ethnic",
   rating: 5.0,
   color: "Yellow",
   aosDelay :"0",
  },
]
const Product = () => {

    return (
        <div  className=" dark:bg-black w-[550px] sm:w-[150vw]">
           <div className=" relative">
                <div className="relative text-center pt-10 sm:w-[78vw] sm:ml-16 w-[600px] -ml-10 ">
       <p data-aos="fade-up" className="text-amber-500 text-sm">Top Selling Products for you</p>  
                  <h1 data-aos="fade-up" className="text-2xl font-semibold font-sans dark:text-white">Top Selling Products</h1>
                  <p data-aos="fade-up" className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nemo.</p>
                </div>

                <div className="flex sm:grid sm:grid-cols-3 gap-8 flex-wrap pl-20 mt-5 w-[550px] sm:-ml-[20px] sm:w-[95vw] md:flex flex-wrap md:pl-20">
                  {ProductData.map((data)=>(
                    <div data-aos="fade-up"
                         data-aos-delay={data.aosDelay}
                    key={data.id} 
                    className="space-y-3 ">
                  <img src={data.img} className="w-[150px] h-60"></img>
                  <div>
                    <h3 className="font-semibold font-sans text-sm dark:text-white">{data.title}</h3>
                    <p className="text-xs font-semibold text-gray-600">{data.color}</p>
                    <div className="flex gap-1 -ml-4">
                      <img src={star} className="w-12 h-8"></img>
                  <p className="mt-1 font-semibold -ml-5 dark:text-white">{data.rating}</p>
                    </div>
                  </div>
                    </div>
                  ))}
                  </div>
                
                 
                
                </div>
            </div> 
        
    )
}


export default Product;