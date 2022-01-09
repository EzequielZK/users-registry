import styled from "styled-components";

export const ContrastContainer = styled.div`
  background-color: ${(props) =>
    props.theme.colors[props.bgColor ?? "contrastBackground"]};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) =>
    !props.padding ? props.theme.spacing.md : props.padding};

  border-radius: ${(props) => (props.rounded ? "5px" : 0)};
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  /* flex: ${(props) => props.flex}; */
  /* margin: 0 auto; */
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};

  max-height: ${(props) =>
    typeof props.maxHeight === "number"
      ? `${props.maxHeight}px`
      : props.maxHeight
      ? props.maxHeight
      : "100%"};
  height: ${(props) =>
    typeof props.h === "number" ? `${props.h}px` : props.h};

  cursor: ${(props) => (props.button ? "pointer" : "default")};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  overflow-y: ${(props) => props.overflowY};
  box-shadow: ${(props) => props.boxShadow};
  animation-name: ${(props) => props.animationName};
  animation-delay: ${(props) => props.animationDelay};
  animation-duration: ${(props) => props.animationDuration};
  animation-direction: ${(props) => props.animationDirection};
  animation-fill-mode: ${(props) => props.animationFillMode};

  @media only screen and (max-width: 500px) {
    height: ${(props) => props.onMobile?.height};
  }
`;
