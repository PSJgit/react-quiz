import React from 'react'

/* Options
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const Options = (props) => {



    return (
      <div id='options'>
        {
          props.options.map( (option, index) => {
            return( 
              <div className='option' key={index} className={`option ${props.userSelected.includes(index) ? 'selected' : ''}`} onClick={() => props.handleOption(index)}>
                <p>{option}</p>
              </div>
            )
          })
        }
      </div>
    )  

  
}

export default Options