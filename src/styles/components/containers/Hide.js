import styled from "styled-components";

export const Hide = styled.div`
  @media only screen and (min-width: 601px) {
    > :nth-child(n) {
      display: ${(props) => props.screenSize === 500 && "none"};
    }
  }
`;
