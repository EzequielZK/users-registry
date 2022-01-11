import Image from "next/image";
import Images from "../../images/Images";
import { ContrastContainer, Row, Text } from "../../../styles/components";

export default function TopBar({ title }) {
  return (
    <ContrastContainer
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="0 -15px 10px 15px gray"
      h={100}
      padding='16px 16px 16px 266px'
    >
      <Row justify="space-between" align="center">
        <Text variant='h1'>{title}</Text>
      </Row>
    </ContrastContainer>
  );
}
