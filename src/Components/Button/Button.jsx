import React from 'react'
import './Button.css'
const Button = (props) => {
    const func=props.result;
  return (
    <button className={props.classs} onClick={func}>{props.content}</button>
  )
}

export default Button