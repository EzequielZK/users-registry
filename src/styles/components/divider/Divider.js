import styled from "styled-components";

export const Divider = styled.div`
  background-color: ${(props) => props.theme.colors[props.color]};
  height: 1px;
  width: 100%;
  margin: ${(props) => props.theme.spacing[props.margin]} 0;
`;
