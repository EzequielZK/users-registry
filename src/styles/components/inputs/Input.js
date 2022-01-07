import styled from "styled-components";

export const Input = styled.input`
  background-color: ${(props) => props.theme.inputBg};
  color: ${(props) => props.theme.inputColor};
  padding: ${(props) => props.theme.spacing[props.padding]};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  border: none;
  border-radius: 5px;
  padding: ${props => props.theme.spacing.sm};


  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.md};
    color: ${(props) => props.theme.colors.inputPlaceholder};
  }

  :focus{
      outline: none;
  }
`;
