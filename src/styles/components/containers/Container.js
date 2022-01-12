import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.withBgColor && props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.padding ?? props.theme.spacing.md};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  height: ${(props) => (props.fullHeight ? "100%" : "auto")};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation-name: ${(props) => props.animationName};
  animation-delay: ${(props) => props.animationDelay};
  animation-duration: ${(props) => props.animationDuration};
  animation-direction: ${(props) => props.animationDirection};
  animation-fill-mode: ${(props) => props.animationFillMode};
`;
