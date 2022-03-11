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
      {/* min cart blev osynlig bakom announcment och categories och slider så jag har tagit bort dom för att man ska se */}
      <Products addProduct={addProduct}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home;