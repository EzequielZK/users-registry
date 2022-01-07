import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { navIndex } from ".";
import { Images } from "..";
import {
  DASHBOARD_PAGE,
  HOME_PAGE,
  NETWORKS_PAGE,
  NETWORKS_REGISTER,
  PROJECTS_PAGE,
  REGISTER_PAGE,
} from "../../navigation/paths";
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

  if (route.pathname.includes("public")) {
    return children;
  }

  const { TopBarContent = () => <></> } = page;
  return (
    <Container fullHeight withBgColor>
      {page.navigation && (
        <>
          <SideBar menuItems={menu} pathname={route.pathname} />

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
        navContent={page.sideBar && "266px"}
        fullWidth
        withBgColor
      >
        {children}
      </Container>
    </Container>
  );
}
