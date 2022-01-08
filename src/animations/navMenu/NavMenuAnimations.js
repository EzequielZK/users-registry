import { move, movePadding } from "../../styles/animations/move";
import { rotate } from "../../styles/animations/rotate";
import mainTheme from "../../styles/themes/mainTheme";

const theme = mainTheme;

const CONTENT_WITH_NAV = movePadding(
  `${theme.spacing.md}`,
  `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.navContentPadding}`
);
const CONTENT_WITHOUT_NAV = movePadding(
  `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.navContentPadding}`,
  `${theme.spacing.md}`
);

const MENU_IN = move(`-${theme.spacing.sideBarWidth}`, "0px");
const MENU_OUT = move("0", `-${theme.spacing.sideBarWidth}`);

const ROTATE_LEFT = rotate("180deg", "0deg");
const ROTATE_RIGHT = rotate("0deg", "180deg");

export {
  CONTENT_WITH_NAV,
  CONTENT_WITHOUT_NAV,
  MENU_IN,
  MENU_OUT,
  ROTATE_LEFT,
  ROTATE_RIGHT,
};
