import styled from "styled-components";

export const ContrastContainer = styled.div`
  background-color: ${(props) =>
    props.theme.colors[props.bgColor ?? "secondary"]};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.padding ?? props.theme.spacing.md};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};

  border-radius: ${(props) => (props.rounded ? "5px" : 0)};
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  max-width: ${(props) => props.maxWidth ?? "100%"};
  width: ${(props) => props.width};

  max-height: ${(props) => props.maxHeight ?? "100%"};
  height: ${(props) => props.height};

  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  box-shadow: ${(props) => props.boxShadow};
  animation-name: ${(props) => props.animationName};
  animation-delay: ${(props) => props.animationDelay};
  animation-duration: ${(props) => props.animationDuration};
  animation-direction: ${(props) => props.animationDirection};
  animation-fill-mode: ${(props) => props.animationFillMode};

  @media only screen and (max-width: 600px) {
    height: ${(props) => props.onMobile?.height};
    padding: ${(props) => props.onMobile?.padding};
    padding-left: ${(props) => props.onMobile?.paddingLeft};
    padding-right: ${(props) => props.onMobile?.paddingRight};
    padding-top: ${(props) => props.onMobile?.paddingTop};
    padding-bottom: ${(props) => props.onMobile?.paddingBottom};


    justify-content: ${(props) => props.onMobile?.justify};
    align-items: ${(props) => props.onMobile?.align};
  }
`;
