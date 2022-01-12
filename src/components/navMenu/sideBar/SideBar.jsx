import Link from "next/link";
import {
  Column,
  ContrastContainer,
  Hide,
  IconButton,
  MenuButton,
  Row,
} from "../../../styles/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  MENU_IN,
  MENU_OUT,
  ROTATE_LEFT,
  ROTATE_RIGHT,
} from "../../../animations/navMenu/NavMenuAnimations";
import { useTheme } from "styled-components";
import Image from "next/image";
import Images from "../../images/Images";

export default function SideBar({
  menuItems = [],
  pathname,
  open,
  setOpen,
  windowWidth,
}) {
  const theme = useTheme();
  let animation = MENU_OUT;
  if (open) {
    animation = MENU_IN;
  }
  return (
    <ContrastContainer
      fullHeight
      padding="0px"
      width={theme.spacing.sideBarWidth}
      maxWidth="100%"
      position="fixed"
      left={0}
      top={0}
      height="100%"
      zIndex={1500}
      boxShadow="-15px 10px 15px 10px gray"
      animationName={animation}
      animationDuration="0.5s"
      animationFillMode="forwards"
    >
      <Column spacing={6} fullWidth>
        <Image src={Images.Logo} />
        <Column className="column-item">
          {menuItems.map((item, index) => (
            <Row key={index} fullWidth>
              <Link href={item.path}>
                <MenuButton
                  selected={item.path === pathname}
                  key={index}
                  fullWidth
                  onClick={() => windowWidth < 600 && setOpen(false)}
                >
                  {item.text}
                </MenuButton>
              </Link>
            </Row>
          ))}
        </Column>
      </Column>
      <Hide screenSize={500}>
        <ControllerButton open={open} setOpen={setOpen} />
      </Hide>
    </ContrastContainer>
  );
}

function ControllerButton({ open, setOpen }) {
  let animation = ROTATE_RIGHT;
  if (open) {
    animation = ROTATE_LEFT;
  }
  return (
    <IconButton
      className="hide-item"
      position="absolute"
      boxShadow="0 0 10px 0 gray"
      borderRadius="50%"
      width="50px"
      height="50px"
      top="20px"
      left="230px"
      animationName={animation}
      animationDuration="0.5s"
      animationFillMode="forwards"
      onClick={() => setOpen(!open)}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </IconButton>
  );
}
