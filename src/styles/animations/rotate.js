import styled, { keyframes } from "styled-components";

const rotate = (from, to) => keyframes`

from{
    transform: rotate(${from}) 
}
to {
    transform: rotate(${to}) 
}
`;

export { rotate };
