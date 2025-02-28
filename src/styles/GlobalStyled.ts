import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyled = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;padding: 0;
        box-sizing: border-box;
        
    }
    body {
        margin: 0;
        font-family: "Poppins", "DM Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
    }

    //code {
    //    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    //    monospace;
    //}
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }

    section {
        padding: 100px 0;

        @media ${theme.media.mobile} {
            padding: 70px 0;
        }
    }
    
    
`

