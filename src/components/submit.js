import React from 'react'

/* Submit
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const Submit = (props) => {
  return (
    <div id='submit' className={`${props.submitHidden ? 'hidden' : 'visible'}`} onClick={() => props.handleSubmit()}>
      <p>Submit</p>
    </div>
  )
}

export default Submit