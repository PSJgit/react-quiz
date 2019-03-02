import React from 'react'

/* Counter
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const Counter = (props) => {
  return (
    <div id='counter'>
      <p>Question {props.questionNum} out of {props.questionTotal}</p>
    </div>
  )
}

export default Counter