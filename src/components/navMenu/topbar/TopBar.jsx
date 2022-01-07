import Image from "next/image";
import Images from "../../images/Images";
import { ContrastContainer, Row } from "../../../styles/components";

export default function TopBar({ children }) {
  return (
    <ContrastContainer
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="0 -15px 10px 15px gray"
      h={100}
    >
      <Row justify="space-between" align="center">
        {children}
      </Row>
    </ContrastContainer>
  );
}
