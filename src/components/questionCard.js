import React from 'react'
import styled from 'styled-components'
import Option from './option'

const responsive = '@media (min-width: 600px)'

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

const DivCard = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #272727;
    box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 60px;

    ${responsive} {
        width: 500px;
    }
`;

const Category = styled.h1`
    position: relative;
    bottom: 12px;
    color: greenyellow;
    font-size: 0.7rem;
    font-weight: 300;
    letter-spacing: 0.3em;
    text-align: right;
    width: 300px;
    cursor: default;

    ${responsive} {
        width: 500px;
    }
`;

const Question = styled.h2`
    width: 260px;
    text-align: center;
    font-size: 1.2rem;
    margin: 40px 0 30px;

    ${responsive} {
        width: 400px;
        margin: 80px 0 50px;
    }
`;

const OptionsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
`;

const Difficulty = styled(Category)`
    bottom: 0;
    right: 313px;
    text-align: left;
    width: fit-content;
    writing-mode: vertical-rl;
    transform:scale(-1);

    ${responsive} {
        right: 513px;
    }
`;

const QuestionCard = ({handlePoints, data, handleNumbQuestion}) => {
    const answers = data.incorrect_answers.concat(data.correct_answer)
    answers.sort(()=> Math.random() - 0.5)

    const handleAnswer = (e) => {
        if (e.target.value === data.correct_answer) {
            if (data.type === "multiple") {
                handlePoints(10)
            } else {
                handlePoints(5)
            }
            handleNumbQuestion()
        } else {
            handleNumbQuestion()
        }
    }

    const decodeHtml = (text) => {
        var txt = document.createElement("textarea")
        txt.innerHTML = text
        return txt.value
    }

    return (
        <CardContainer>
            <DivCard>
                <Category>{`CATEGORY: ${data.category.toUpperCase().replace(': ', '-')}`}</Category>
                <Question>{decodeHtml(data.question)}</Question>
                <OptionsDiv>
                    {answers.map(ans =>
                        <Option key={ans} handleAnswer={handleAnswer} answer={decodeHtml(ans)} data={data} decodeHtml={decodeHtml} ></Option>
                    )}
                </OptionsDiv>
            </DivCard>
            <Difficulty>{`DIFFICULTY: ${data.difficulty.toUpperCase()}`}</Difficulty>
        </CardContainer>
    )
}

export default QuestionCard
