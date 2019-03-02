import React, { Fragment } from 'react'

/* Results
–––––––––––––––––––––––––––––––––––––––––––––––––– */

class Results extends React.Component { 

  constructor(props) {
    super(props)
  }

  getScore() {
    const correctArr = this.props.userCorrect.filter( boolean => boolean === true )
    return correctArr
  }

  getUserAnswers() {
    const questionsList = this.props.questionsList.slice()
    const userAnswerArr = this.props.userCorrect
    const incorrect = []
    const correct = []

    questionsList.forEach( (item, index) => {
      if (userAnswerArr[index]) {
        correct.push(item)
      } else {
        incorrect.push(item)
      }
    })

    return {
      incorrect,
      correct
    }
  }

  render(){ 
    const answersObj = this.getUserAnswers()
    const correctArr = this.getScore()
    const allAnswersCorrect = correctArr.length === this.props.userCorrect.length
    const allAnswersIncorrect = correctArr.length === 0

    return (
      <Fragment>
        <div id='title'>
          <h2>Quiz finished</h2>
          <p>You scored: {correctArr.length} out of {this.props.userCorrect.length}</p>
        </div>

        {allAnswersCorrect || allAnswersIncorrect ? 
          <div id='feedback-block'> 
            {
              allAnswersIncorrect ? 
                <Fragment>
                  <p className='fail'>Unfortunately, you didn't answer any questions correctly</p>
                  <button id='retake' onClick={this.props.handleRestart}><p>Try again?</p></button>
                </Fragment> 
              : 
                <p>Congratulations! You answered all questions correctly</p>
              }
          </div>
            :  
          <Fragment>
          <div id='correct'>
            <p>Great! You got these questions correct:</p>
            <ul>
              {
                answersObj.correct.map( (val, index) => {
                  return <li key={index} className='correct'>{val.question}</li>
                })
              } 
            </ul>
          </div>
          <div id='incorrect'>
      
            <p>Unfortunately, you got these questions incorrect:</p>
            <ul>
              {
                answersObj.incorrect.map( (val, index) => {
                  return (
                    <li key={index} className='incorrect'>{val.question}</li>
                  )
                })
              }
            </ul> 
          
          </div>
          <button id='retake' onClick={this.props.handleRestart}><p>Retake</p></button>
          </Fragment>
        }
      </Fragment>
    )
  }
}

export default Results