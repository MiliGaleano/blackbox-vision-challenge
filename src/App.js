import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import QuestionCard from './components/questionCard';
import EndOfGame from './components/endOfGame'
import {getQuestions} from './services/getQuestions'
import Loading from './components/loading';

const HomeDiv = styled.div`
  width: 100%;
  background-color: #121212;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  background-color: #272727;
  box-shadow: 2px 5px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 25px 0;
  letter-spacing: 0.2em;
  text-shadow: rgb(0 0 0 / 0.5) 0.1em 0.1em;
`;

const QuestionsDiv = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

function App() {

const [data, setData] = useState()
const [loading, setLoading] = useState(true)
const [points, setPoints] = useState(0)
const [numbQuestion, setNumbQuestion] = useState(0)
const [endOfGame, setEndOfGame] = useState(false)
const [playAgain, setPlayAgain] = useState(false)

const handlePoints = (val) => {
  setPoints(points => points + val)
}

const handleNumbQuestion = () => {
  if (numbQuestion < 9) {
    setNumbQuestion(numbQuestion => numbQuestion + 1)
  } else {
    setEndOfGame(true)
  }
}

const handlePlayAgain = () => {
    setLoading(true)
    setPoints(0)
    setNumbQuestion(0)
    setEndOfGame(false)
    setPlayAgain(!playAgain)
}

useEffect(() => {
  getQuestions()
  .then(res => {
    setData(res.results)
    setLoading(false)
  })
  .catch(err => console.log(err))
}, [playAgain])

if (loading) {
   return <Loading></Loading>
 } else {
    return (
        <HomeDiv>
          <Header>
            <Title>QuizBox Vision</Title>
          </Header>
          <QuestionsDiv>
            {endOfGame ? 
              <EndOfGame points={points} handlePlayAgain={handlePlayAgain} />
            :
              <QuestionCard handlePoints={handlePoints} data={data[numbQuestion]} handleNumbQuestion={handleNumbQuestion} />
            }
          </QuestionsDiv>
        </HomeDiv>
    )
  }
}

export default App