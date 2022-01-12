import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.colors[props.color ?? "primary"]};
  border-radius: 5px;
  padding: ${(props) => !props.withoutPadding && props.theme.spacing.sm}
    ${(props) => !props.withoutPadding && props.theme.spacing.md};
  font-size: ${(props) => props.theme.fontSize.md};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: ${(props) => (props.fullWidth ? "100%" : "unset")};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  :focus {
    outline: none;
  }
`;

export const ContainedButton = styled(Button)`
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  :hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const OutlinedButton = styled(Button)`
  color: ${(props) => props.theme.colors[props.color ?? "primary"]};
  background-color: transparent;
  max-width: 100%;
  overflow-wrap: break-word;
  :hover {
    background-color: ${(props) =>
      props.theme.colors[props.color ?? "primary"]};
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const IconButton = styled(Button)`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) =>
    props.theme.colors[props.bgColor ?? "tertiary"]};
  border: none;
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.theme.fontSize.xl};
  box-shadow: ${(props) => props.boxShadow};
  animation-name: ${(props) => props.animationName};
  animation-delay: ${(props) => props.animationDelay};
  animation-duration: ${(props) => props.animationDuration};
  animation-direction: ${(props) => props.animationDirection};
  animation-fill-mode: ${(props) => props.animationFillMode};
  :active {
    background-color: ${(props) =>
      props.theme.colors[props.active?.bgColor ?? "transparent"]};
    color: ${(props) => props.theme.colors[props.active?.color ?? "primary"]};
  }
`;

export const MenuButton = styled(Button)`
  color: ${(props) =>
    props.selected ? props.theme.colors.secondary : props.theme.colors.text};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : "transparent"};
  border: none;
  text-align: left;
  font-size: ${(props) => props.theme.fontSize.lg};
  border-radius: 0;
  width: ${(props) => props.fullWidth && "100%"};
  :hover {
    color: ${(props) => !props.selected && props.theme.colors.primary};
  }
`;

export const TabButton = styled(Button)`
  color: ${(props) =>
    props.disabled ? props.theme.colors.disabled : props.theme.colors.text};
  background-color: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.selected && `1px solid ${props.theme.colors.primary}`};
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.lg};
  border-radius: 0;
  width: ${(props) => props.fullWidth && "100%"};

  :hover {
    color: ${(props) =>
      !props.selected && !props.disabled && props.theme.colors.primary};
  }

  @media only screen and (max-width: 300px) {
    overflow-wrap: anywhere;
  }
`;
