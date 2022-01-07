import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
body > div:first-child,
div#__next{
  
  height: 100%; 
  width: 100%;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: ${props => props.theme.colors.background}; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.colors.contrastBackground}; 
    border-radius: 5px;
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background-color: ${props => props.background}; 
} */
`;
