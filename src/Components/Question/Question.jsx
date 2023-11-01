import React from 'react'
import './Question.css'
const Question = (props) => {
  return (
    <h4 className='question'>Q ({props.num}). &nbsp;&nbsp; {props.question}</h4>
  )
}

export default Question