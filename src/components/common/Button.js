import React from 'react'

const Button = (props) => {
  return (
    <button className={props.btnClass}>{props.btnName}</button>
  )
}

export default Button