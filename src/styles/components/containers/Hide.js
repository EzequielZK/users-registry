import styled from "styled-components";

export const Hide = styled.div`
  @media only screen and (min-width: 500px) {
    > .hide-item {
      display: ${(props) => props.screenSize === 500 && "none"};
    }
  }
`;
