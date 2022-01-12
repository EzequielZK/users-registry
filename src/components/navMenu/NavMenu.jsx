import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { navIndex } from ".";
import { HOME_PAGE, REGISTER_PAGE } from "../../navigation/paths";
import { Container } from "../../styles/components";
import SideBar from "./sideBar/SideBar";
import TopBar from "./topbar/TopBar";

export default function NavMenu({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function onResize(e) {
      setWindowWidth(e.target.innerWidth);
      setSideBarOpen(true);
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

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

  const { title } = page;
  return (
    <Container fullHeight withBgColor padding={0}>
      {page.navigation && (
        <>
          <SideBar
            menuItems={menu}
            pathname={route.pathname}
            open={sideBarOpen}
            setOpen={setSideBarOpen}
            windowWidth={windowWidth}
          />

          <TopBar title={title} />
        </>
      )}

      <Container
        paddingLeft={windowWidth && windowWidth > 600 && "266px"}
        fullWidth
        fullHeight
        withBgColor
      >
        {children}
      </Container>
    </Container>
  );
}
