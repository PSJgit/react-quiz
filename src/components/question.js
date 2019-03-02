import React from 'react'

/* Question 
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const Question = (props) => {

  return (
    <div id='question'> 
      <h1>{props.question}</h1>
    </div>
  )
}

export default Question