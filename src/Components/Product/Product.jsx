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
        <div  className=" dark:bg-black w-[800px] lg:w-screen ">
           <div className=" lg:pl-12">
                <div className="mx-[150px] relative text-center ml-[10px] pt-10 md:pl-5 lg:pl-12">
       <p data-aos="fade-up" className="text-amber-500 text-sm">Top Selling Products for you</p>  
                  <h1 data-aos="fade-up" className="text-2xl font-semibold font-sans dark:text-white">Top Selling Products</h1>
                  <p data-aos="fade-up" className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nemo.</p>
                </div>

                <div className="flex flex-wrap gap-10 mt-5 ml-12 center w-screen place-item-center lg:-ml-1">
                  {ProductData.map((data)=>(
                    <div data-aos="fade-up"
                         data-aos-delay={data.aosDelay}
                    key={data.id} 
                    className="space-y-3">
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