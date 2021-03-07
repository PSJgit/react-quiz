import React, { Fragment } from 'react'
import questions from './data/questions.js'
import Counter from './components/counter.js'
import Question from './components/question.js'
import Options from './components/options.js'
import Submit from './components/submit.js'
import Results from './components/results.js'


/* MAIN APP
–––––––––––––––––––––––––––––––––––––––––––––––––– */

export default class App extends React.Component { 

  /* Constructor, state and lifecycle
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  constructor(props){
    super(props)
    this.state = this.initialState()
  }
  
  initialState() {
    return {
      questionList: questions,
      questionTotal: questions.length,
      questionNum: 0,
      questionType: questions[0].answers.length > 1 ? 'multiple' : 'single',
      userSelected: [],
      userCorrect: [],
      submitHidden: true
    }
  }

  clearState() {
    const state = this.initialState()
    this.setState({
      ...state
    })
  }

  componentDidMount() {
    console.log('----------- component mounted', this.state)
  }

  componentDidUpdate() {
    console.log('----------- component updated', this.state)
  }

  /* Click Events
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  handleSubmit() {
    // check if the user answered correctly
    const questionAnswers = questions[this.state.questionNum].answers
    const userCorrect = this.state.userCorrect.slice()
    const userSelected = this.state.userSelected.slice()
    const userSelectedSorted = userSelected.sort(compareNumbers)

    userCorrect.push(JSON.stringify(questionAnswers) === JSON.stringify(userSelectedSorted) ? true : false)

    this.setState({
      userCorrect: userCorrect
    })  
    
    // if there's more questions, render them
    if ( questions.length-1 > this.state.questionNum) {
      this.setState((prevState, props) => ({
        questionNum: prevState.questionNum + 1,
        submitHidden: true,
        questionType: questions[prevState.questionNum + 1].answers.length > 1 ? 'multiple' : 'single',
        userSelected: []
      }))
    // otherwise, show the results
    } else {
      this.setState((prevState, props) => ({
        questionNum: prevState.questionNum + 1,
      })); 
    }
  }

  handleOption(arrIndex) {
    // copy the user selected arr
    let userSelected = this.state.userSelected.slice()

    // store indexes of clicked opts as long as they're not in the arr. Single choice wipes the arr
    if (!userSelected.includes(arrIndex)) {
      if (this.state.questionType === 'multiple') {
        userSelected = userSelected.concat(arrIndex)  
      } else {
        userSelected = [arrIndex]
      }
    // otherwise remove them from the arr 
    } else {
      userSelected = userSelected.filter( (val, index) => {
        return val !== arrIndex
      })      
    }

    // hide submit if nothing selected
    if (userSelected.length >= 1) {
      this.setState({
        submitHidden: false
      })  
    } else {
      this.setState({
        submitHidden: true
      })
    }

    // update the state
    this.setState({
      userSelected: userSelected,
    })
  }

  /* Render
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  render() {
    const questionNum = this.state.questionNum
    const questionTotal = this.state.questionList.length
    const questionObj = questions[questionNum]
    const quizFinished = questionTotal === questionNum

    return (
      <Fragment>
        {quizFinished ? 

          <div id='feedback' className='grid'>
            <Results 
              userCorrect={this.state.userCorrect}
              questionsList={this.state.questionList}
              handleRestart={() => this.clearState()}
            />
          </div>
         : 
          <div id='quiz' className='grid'>

            <h3>React Quiz</h3>
            <Counter
              questionNum={questionNum+1}
              questionTotal={questionTotal}
            />
            
            <Question 
              question={questionObj.question}
            />

            <Options 
              options={questionObj.options}
              userSelected={this.state.userSelected}
              handleOption={index => this.handleOption(index)}
            />

            <Submit
              handleSubmit={() => this.handleSubmit()}
              submitHidden={this.state.submitHidden}
            />

          </div>
        }
      </Fragment>
    )
  }
}





  /* Utils
  –––––––––––––––––––––––––––––––––––––––––––––––––– */


    function compareNumbers(a, b) {
        return a - b;
    }

    function fisherYatesShuffle(array) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}