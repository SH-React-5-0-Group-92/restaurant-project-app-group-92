import React from 'react'
import { FaAccessibleIcon } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';

const cardInfo=[
  {
    icon: "FaAccessibleIcon",
    step: "Sign-Up",
    procedure: "You have to createan account first to order your meals convinently and have it delivered"
  },
  {
    icon: "FaAccessibleIcon",
    step: "Order",
    procedure: "You have to createan account first to order your meals convinently and have it delivered"
  },
  {
    icon: "FaArchive",
    step: "Set Location",
    procedure: "You have to createan account first to order your meals convinently and have it delivered"
  },
  {
    icon: "FaYoutubeSquare",
    step: "Payment",
    procedure: "You have to createan account first to order your meals convinently and have it delivered"
  },

]

const Card1 =(props)=>{
  return(
    <div className="col-lg-3 col-md-6 py-5 px-3 text-center mx-4" style={{ borderRadius: "10px", width: "220px", backgroundColor:"#fff"}}>
      <i className={props.icons}/>
      <h3>{props.steps}</h3>
      <p>{props.procedure}</p>
    </div>
  )
}

function cardMaper(items){
  return <Card1 
  key={items.step}
  icons={items.icon}
  steps={items.step}
  procedure={items.procedure}
  />
}

const HTOCard = () => {
  return (
    <div className="container-fluild" style={{ backgroundColor:"#d6d6c2"}}>
    <div className="row justify-content-center align-items-center py-5">
      {cardInfo.map(cardMaper)}
    </div>
    </div>
  )
}

export default HTOCard