import React from 'react'
import './Button.css'
const Button = (props) => {
    const func=props.func;
  return (
    <button className={props.classs} >{props.content}</button>
  )
}

export default Button