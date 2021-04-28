import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{    
        margin:0;
        padding: 0;
        color: white;
        font-family: monospace;
        letter-spacing: 0.1em
    }

    body{
        width: 100%;
        background-color: #121212;
        min-height: 100vh;
    }
`;