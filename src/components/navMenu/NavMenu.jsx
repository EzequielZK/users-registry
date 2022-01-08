import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTheme } from "styled-components";
import { navIndex } from ".";
import { Images } from "..";
import { CONTENT_WITHOUT_NAV, CONTENT_WITH_NAV } from "../../animations";
import {
  DASHBOARD_PAGE,
  HOME_PAGE,
  NETWORKS_PAGE,
  NETWORKS_REGISTER,
  PROJECTS_PAGE,
  REGISTER_PAGE,
} from "../../navigation/paths";
import { move, movePadding } from "../../styles/animations/move";
import {
  Column,
  Container,
  ContrastContainer,
  MenuButton,
  OutlinedButton,
  Row,
  Text,
} from "../../styles/components";
import SideBar from "./sideBar/SideBar";
import TopBar from "./topbar/TopBar";

export default function NavMenu({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  let contentAnimation = CONTENT_WITHOUT_NAV;
  if (sideBarOpen) {
    contentAnimation = CONTENT_WITH_NAV;
  }
  const route = useRouter();

  const menu = [
    {
      text: "Users list",
      path: HOME_PAGE,
    },
    {
      text: "Register user",
      path: REGISTER_PAGE,
    },
  ];

  const page = navIndex[route.pathname] ? navIndex[route.pathname] : {};

  const { TopBarContent = () => <></> } = page;
  return (
    <Container fullHeight withBgColor>
      {page.navigation && (
        <>
          <SideBar
            menuItems={menu}
            pathname={route.pathname}
            open={sideBarOpen}
            setOpen={setSideBarOpen}
          />

          <TopBar>
            <TopBarContent
              pathname={route.pathname}
              userName="Ezequiel Rosa Lara"
            />
          </TopBar>
        </>
      )}

      <Container
        padding={2}
        animation={contentAnimation}
        fullWidth
        withBgColor
        onMobile={{ animation: "none" }}
      >
        {children}
      </Container>
    </Container>
  );
}
