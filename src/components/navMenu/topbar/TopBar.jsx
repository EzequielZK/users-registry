import { useTheme } from "styled-components";
import { ContrastContainer, Text } from "../../../styles/components";

export default function TopBar({ title }) {
  const theme = useTheme();
  return (
    <ContrastContainer
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="0 -15px 10px 15px gray"
      height="100px"
      paddingLeft={theme.spacing.navContentPadding}
      align="center"
      onMobile={{ justify: "flex-end", paddingLeft: 0, padding: "md" }}
    >
      <Text variant="h1">{title}</Text>
    </ContrastContainer>
  );
}
