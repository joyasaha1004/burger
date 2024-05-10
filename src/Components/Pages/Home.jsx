import React from 'react';
import HomePage from '../HomePage/HomePage';
import Product from '../Product/Product';
import Top_Rated from '../Top_Rated/Top_Rated';
import Winter_Sale from './../Winter_sale/Winter_Sale';
import Email from '../Email/Email';
import Testimonial from '../Testimonial/Testimonial';
import Footer from "../Footer/Footer"

const Home = () => {
    return (
        <div>
        <HomePage/>
          <Product/>
          <Top_Rated/>
          <Winter_Sale/>
          <Email/>
          <Product/>
          <Testimonial/>
          <Footer/>
        </div>
    );
};

export default Home;