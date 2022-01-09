import styled, { keyframes } from "styled-components";

const move = (from, to) => keyframes`
from{
    left: ${from};
}
to {
   left: ${to}
}
`;

const movePadding = (from, to) => keyframes`
from{
    padding: ${from};
}
to {
    padding: ${to}
}
`;

const moveTop = (from, to) => keyframes`
from{
    top: ${from};
}
to {
   top: ${to};
}`;

export { move, movePadding, moveTop };
