import React from 'react'
import BrownBg from './productPageFiles/BrownBg'
import HowToOrder from './productPageFiles/HowToOrder'
import HTOCard from './productPageFiles/HTOCard'
import "./productPageFiles/Product.css"
import ProductCard from './productPageFiles/ProductCard'
import ProductHeader from './productPageFiles/ProductHeader'
import ProductHero from './productPageFiles/ProductHero'

const Products = () => {
  return (
    <div>
      <ProductHero />
      <BrownBg />
      <HowToOrder />
      <HTOCard />
      <ProductHeader 
      classN="text-center"
      header="Our Menu"
      text="Take a peek at our menu to find what you love and would like to order"
      />
      <ProductCard />
    </div>
  )
}

export default Products