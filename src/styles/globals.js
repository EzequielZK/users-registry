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

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme.colors.tertiary}; 
}
 
::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.colors.secondary}; 
    border-radius: 5px;
}

`;
