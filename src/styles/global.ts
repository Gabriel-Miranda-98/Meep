import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #dce5f2;
    --header: #023535;
    --Title: #015958;
    --text: #fff;
    --button: #008F8C;

}
   
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{ 
    @media (min-width: 1080px){
        font-sizing:93.75%;
    }

    @media (min-width: 720px){
        font-sizing:87.5%;
 }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea , button {
    font-family: 'Poppins',sans-serif;
    font-weight:400;
}

h1,h2,h3,h4,h5,h6,strong {
    font-weight:600;

}


button{
    cursor:pointer;
}
[disabled] {
    opacity:0.6;
    cursor: not-allowed;
}


`;
