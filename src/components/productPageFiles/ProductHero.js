import React from 'react'
import Button from '../common/Button'
import Food1 from '../../images/1.jpg'
import Food2 from "../../images/2.jpg"


const ProductHero = () => {
  return (
    <div className="container-fluid p-5 mt-5">
      <div className='row justify-content-center align-items-center'>
        <div className="col-md-7 herotext pt-5">
          <h1 className="pt-5">Get your fresh and tasty meals Delivered</h1>
          <p>Food is an essential part of our daily life and at Food mart, we put that in mind by providing tasty and fresh meals to our customers. We not only provide the meals, we have them deliverd to you</p>
          <Button 
          btnClass="btn btn-danger"
          btnName="Learn More"
          />
        </div>
        <div className="col-md-5">
        <img src={Food2} alt="fruit salad" className="img-fluid food1-image"/>
        </div>
      </div>
    </div>
  )
}

export default ProductHero