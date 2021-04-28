import React, {useState} from 'react'
import styled from 'styled-components'

const OptionButton = styled.button`
    min-width: 150px;
    padding: 20px 5px;
    margin: 20px;
    border: none;
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: #121212;
    border-top-left-radius: 12px;
    transition: 0.5s;
    cursor: pointer;

    &:hover, :focus{
    background-color: #121212;
    box-shadow: 2px 5px 2px 1px rgba(0, 0, 0, 0.2);
    font-weight: 700;
    color: greenyellow;
    }

`;

const Option = ({handleAnswer, answer, data, decodeHtml}) => {

    const [textButton, setTextButton] = useState(answer)

    const handleClick = (e) => {
        if (decodeHtml(data.correct_answer) === answer) {
            setTextButton('Great!')
        } else {
            setTextButton('Wrong!')
        }
        setTimeout(() => {
            handleAnswer(e)
            setTextButton(answer)
        }, 2000);
    }

    return(
        <OptionButton value={answer} onClick={(e) => handleClick(e)}>{textButton}</OptionButton>
    )
}

export default Option