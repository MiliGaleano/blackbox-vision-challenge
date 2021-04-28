import React from 'react'
import styled, {keyframes} from 'styled-components'

const DivLoading = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    border: 4px solid rgba(0, 0, 0, .1);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-left-color: greenyellow;

    animation: ${spin} 1s ease infinite;
`;

const Loading = () => {
    return(
        <DivLoading>
            <Spinner />
        </DivLoading>
    )
}

export default Loading