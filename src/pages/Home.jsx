import React from 'react'
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../pages/Products';
import Slider from '../components/Slider';

const Home = ({addProduct}) => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Products addProduct={addProduct}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home;