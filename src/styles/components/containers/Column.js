import styled from "styled-components";

export const Column = styled.div`
  padding: ${(props) => props.theme.spacing[props.padding]};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  margin: ${(props) => props.theme.spacing[props.margin]} 0;
  flex: ${(props) => props.flex};
  height: ${(props) => (props.fullHeight ? "100%" : "unset")};
  width: ${(props) => (props.fullWidth ? "100%" : "unset")};

  > .column-item:not(:last-child) {
    margin-bottom: ${(props) =>
      props.spacing <= 12
        ? `${
            Number(props.theme.spacing.sm.replace("px", "")) * props.spacing
          }px`
        : 0};
  }
`;
