import React from 'react'
import Button from '../common/Button'
import cardItem from './productCardDic'


const Card=(props)=>{
  return(
    <div className="col-lg-3 col-md-6 py-5 px-3 text-center mx-4 mt-3" style={{ borderRadius: "10px", width: "220px", backgroundColor: "#fff" }}>
      <img src={props.img} alt="food image" style={{ width: '100px', height: "100px", borderRadius: "50%" }} />
      <h6 className="pt-3">{props.name}</h6>
      <p>{props.price}</p>
      <Button
        btnClass="btn btn-outline-danger"
        btnName="Add to Cart"
      />
    </div>
  )
}

const ProductCard = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#d6d6c2" }}>
      <div className="row justify-content-center align-items-center py-5">
        {cardItem.map((e)=>{
          return <Card 
          key={e.name}
          img={e.img}
          name={e.name}
          price={e.price}
          />
        })}
      </div>
    </div>
  )
}

export default ProductCard