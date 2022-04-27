import React from 'react'

const ProductHeader = (props) => {
  return (
    <div className="container-fluid">
    <div className="row">
        <div className={props.classN} style={{ backgroundColor: '#d6d6c2' }}>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
    </div>
    </div>
    </div>
  )
}

export default ProductHeader