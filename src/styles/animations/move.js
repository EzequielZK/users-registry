import styled, { keyframes } from "styled-components";

const move = (from, to) => keyframes`
from{
    left: ${from};
}
to {
   left: ${to}
}
`;

export { move };
