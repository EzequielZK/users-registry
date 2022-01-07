import styled from "styled-components";

export const Text = styled.span`
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.theme.fonts[props.variant]?.size};
  font-weight: ${(props) => props.theme.fonts[props.variant]?.weight};
  overflow-wrap: break-word;
`;
