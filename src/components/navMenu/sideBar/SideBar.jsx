import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Column,
  Container,
  ContrastContainer,
  Divider,
  IconButton,
  MenuButton,
  Row,
} from "../../../styles/components";
import Images from "../../images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { move } from "../../../styles/animations/move";
import { rotate } from "../../../styles/animations/rotate";

export default function SideBar({ menuItems = [], pathname, footerItem }) {
  const menuIn = move("-250px", "0px");
  const menuOut = move("0", "-250px");
  const [animation, setAnimation] = useState(menuIn);
  return (
    <ContrastContainer
      fullHeight
      padding="0px"
      width={250}
      maxWidth="100%"
      position="fixed"
      left={0}
      top={0}
      h="100%"
      zIndex={1500}
      boxShadow="-15px 10px 15px 10px gray"
      padding="100px 0 0 0"
      animation={animation}
    >
      <Column spacing={6} fullWidth>
        <Column className="column-item">
          {menuItems.map((item, index) => (
            <Row key={index} fullWidth>
              <Link href={item.path}>
                <MenuButton
                  selected={item.path === pathname}
                  key={index}
                  fullWidth
                >
                  {item.text}
                </MenuButton>
              </Link>
            </Row>
          ))}
        </Column>
        {footerItem && (
          <MenuButton className="column-item" fullWidth>
            {footerItem.text}
          </MenuButton>
        )}
      </Column>
      <ControllerButton
        onClick={() => {
          if (animation.id === menuIn.id) {
            setAnimation(menuOut);
          } else {
            setAnimation(menuIn);
          }
        }}
      />
    </ContrastContainer>
  );
}

function ControllerButton({ onClick }) {
  const rotateToRight = rotate("0deg", "180deg");
  const rotateToLeft = rotate("180deg", "0deg");
  const [animation, setAnimation] = useState(rotateToLeft);
  return (
    <IconButton
      position="absolute"
      top="50%"
      left="230px"
      animation={animation}
      onClick={() => {
        if (animation.id === rotateToLeft.id) {
          setAnimation(rotateToRight);
        } else {
          setAnimation(rotateToLeft);
        }
        if (onClick) {
          onClick();
        }
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </IconButton>
  );
}
