import styled from "styled-components";

export const Text = styled.span`
  color: ${(props) => props.theme.colors[props.color ?? "text"]};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.theme.fonts[props.variant]?.size};
  font-weight: ${(props) => props.theme.fonts[props.variant]?.weight};
`;
