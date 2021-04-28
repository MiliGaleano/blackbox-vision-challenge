import React from 'react'
import styled from 'styled-components'

const TitleEndOfGame = styled.h1`
    font-size: 1.2rem;
    text-align: center;
`;

const ButtonEndOfGame = styled.button`
    padding: 20px;
    margin-top: 30px;
    border: none;
    background-color: #272727;
    border-width: 1px;
    border-style: solid;
    border-color: #121212;
    border-top-left-radius: 12px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
    background-color: #121212;
    box-shadow: 2px 5px 2px 1px rgba(0, 0, 0, 0.2);
    font-weight: 700;
    color: greenyellow;
    }
`;

const EndOfGame = ({points, handlePlayAgain}) => {
    return(
        <div>
            <TitleEndOfGame>points: {points}</TitleEndOfGame>
            <ButtonEndOfGame onClick={()=> handlePlayAgain()}>PLAY AGAIN</ButtonEndOfGame>
        </div>
    )
}

export default EndOfGame