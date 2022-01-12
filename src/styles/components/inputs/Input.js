import styled from "styled-components";

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.text};
  padding: ${(props) => props.theme.spacing[props.padding]};
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  border: ${(props) =>
    props.error ? `1px solid ${props.theme.colors.error}` : "none"};
  border-radius: 5px;
  padding: ${(props) => props.theme.spacing.sm};
  width: ${(props) => props.fullWidth && "100%"};
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.md};
    color: ${(props) => props.theme.colors.inputPlaceholder};
  }

  :focus {
    outline: none;
  }
`;
