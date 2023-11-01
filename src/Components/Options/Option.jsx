import React from 'react'
import './Option.css'
const Option = (props) => {
    const next=props.next;
  return (
    <button className='option' onClick={next}>{props.opt}</button>
  )
}

export default Option