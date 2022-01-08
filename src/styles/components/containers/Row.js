import styled from "styled-components";

export const Row = styled.div`
  padding: ${(props) => props.theme.spacing[props.padding]};
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex: ${(props) => props.flex};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "unset")};
  > .row-item {
    margin: ${(props) =>
      `0 ${
        Number(props.theme.spacing.sm.replace("px", "")) * props.spacing
      }px ${
        props.spacing <= 12 && props.wrap
          ? `${
              Number(props.theme.spacing.sm.replace("px", "")) * props.spacing
            }px`
          : "0"
      } 0`};
  }

  > .row-item:is(:last-child) {
    margin-right: ${(props) => (!props.wrap ? 0 : "")};
  }
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: ${(props) => (props.fullHeight ? "100%" : "auto")};
  position: ${(props) => props.position};
`;
