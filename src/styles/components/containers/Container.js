import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.withBgColor && props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) =>
    `${Number(props.theme.spacing.sm.replace("px", "") * props.padding)}px`};
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: ${(props) => (props.fullHeight ? "100%" : "auto")};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  overflow-y: ${(props) => props.overflowY};
  padding-left: ${(props) => props.navContent};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};


  animation: ${(props) => props.animation} 0.5s forwards;

  @media only screen and(max-width: 500px) {
    animation: ${(props) => props.onMobile?.animation} 0.5 forwards;
    
  }
`;
