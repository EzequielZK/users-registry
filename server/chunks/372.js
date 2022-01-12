"use strict";
exports.id = 372;
exports.ids = [372];
exports.modules = {

/***/ 7372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u_": () => (/* reexport */ modal_Modal),
  "Ml": () => (/* reexport */ NavMenu),
  "my": () => (/* reexport */ OutsideClick),
  "a3": () => (/* reexport */ UsersCards),
  "h7": () => (/* reexport */ openModal)
});

// UNUSED EXPORTS: Images

;// CONCATENATED MODULE: ./src/assets/img/Users-logo.png
/* harmony default export */ const Users_logo = ({"src":"/_next/static/media/Users-logo.8001b772.png","height":100,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWUlEQVR42g3KMQ5AQABE0b/YLN2eQaJVsEKhQcEBnMRJnEDCRuGW5ievmkEVVNYCKWed8/UZV2uIIRNQM97swMpRbjpM3GHUOEiDMpKy+ETg7SxPcBoTYnA/lm0OnXtztTIAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/images/Images.js

/* harmony default export */ const Images = ({
  Logo: Users_logo
});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/navigation/paths.js
const LOGIN_PAGE = "/public/login";
const NETWORKS_PAGE = "/networks";
const NETWORKS_REGISTER = "/networks/register";
const DASHBOARD_PAGE = "/dashboard";
const PROJECTS_PAGE = "/projects";
const HOME_PAGE = "/";
const REGISTER_PAGE = "/register";
;// CONCATENATED MODULE: ./src/components/navMenu/index.js

const navIndex = {
  [HOME_PAGE]: {
    navigation: true,
    title: "Users List"
  },
  [REGISTER_PAGE]: {
    navigation: true,
    title: "Register User"
  }
};
// EXTERNAL MODULE: ./src/styles/components/index.js + 10 modules
var components = __webpack_require__(3630);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: ./src/styles/animations/move.js
var move = __webpack_require__(8742);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/styles/animations/rotate.js


const rotate = (from, to) => (0,external_styled_components_.keyframes)(["from{transform:rotate(", ")}to{transform:rotate(", ")}"], from, to);


// EXTERNAL MODULE: ./src/styles/themes/mainTheme.js
var mainTheme = __webpack_require__(793);
;// CONCATENATED MODULE: ./src/animations/navMenu/NavMenuAnimations.js



const theme = mainTheme/* default */.Z;
const CONTENT_WITH_NAV = (0,move/* movePadding */.xw)(`${theme.spacing.md}`, `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.navContentPadding}`);
const CONTENT_WITHOUT_NAV = (0,move/* movePadding */.xw)(`${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.navContentPadding}`, `${theme.spacing.md}`);
const MENU_IN = (0,move/* move */.pB)(`-${theme.spacing.sideBarWidth}`, "0px");
const MENU_OUT = (0,move/* move */.pB)("0", `-${theme.spacing.sideBarWidth}`);
const ROTATE_LEFT = rotate("180deg", "0deg");
const ROTATE_RIGHT = rotate("0deg", "180deg");

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/navMenu/sideBar/SideBar.jsx










function SideBar({
  menuItems = [],
  pathname,
  open,
  setOpen,
  windowWidth
}) {
  const theme = (0,external_styled_components_.useTheme)();
  let animation = MENU_OUT;

  if (open) {
    animation = MENU_IN;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* ContrastContainer */["do"], {
    fullHeight: true,
    padding: "0px",
    width: theme.spacing.sideBarWidth,
    maxWidth: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",
    zIndex: 1500,
    boxShadow: "-15px 10px 15px 10px gray",
    animationName: animation,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Column */.sg, {
      spacing: 6,
      fullWidth: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: Images.Logo
      }), /*#__PURE__*/jsx_runtime_.jsx(components/* Column */.sg, {
        className: "column-item",
        children: menuItems.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(components/* Row */.X2, {
          fullWidth: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: item.path,
            children: /*#__PURE__*/jsx_runtime_.jsx(components/* MenuButton */.j2, {
              selected: item.path === pathname,
              fullWidth: true,
              onClick: () => windowWidth < 600 && setOpen(false),
              children: item.text
            }, index)
          })
        }, index))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components/* Hide */.c, {
      screenSize: 500,
      children: /*#__PURE__*/jsx_runtime_.jsx(ControllerButton, {
        open: open,
        setOpen: setOpen
      })
    })]
  });
}

function ControllerButton({
  open,
  setOpen
}) {
  let animation = ROTATE_RIGHT;

  if (open) {
    animation = ROTATE_LEFT;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(components/* IconButton */.hU, {
    className: "hide-item",
    position: "absolute",
    boxShadow: "0 0 10px 0 gray",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    top: "20px",
    left: "230px",
    animationName: animation,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    onClick: () => setOpen(!open),
    children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
      icon: free_solid_svg_icons_.faChevronLeft
    })
  });
}
;// CONCATENATED MODULE: ./src/components/navMenu/topbar/TopBar.jsx



function TopBar({
  title
}) {
  const theme = (0,external_styled_components_.useTheme)();
  return /*#__PURE__*/jsx_runtime_.jsx(components/* ContrastContainer */["do"], {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 -15px 10px 15px gray",
    height: "100px",
    paddingLeft: theme.spacing.navContentPadding,
    align: "center",
    onMobile: {
      justify: "flex-end",
      paddingLeft: 0,
      padding: "md"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(components/* Text */.xv, {
      variant: "h1",
      children: title
    })
  });
}
;// CONCATENATED MODULE: ./src/components/navMenu/NavMenu.jsx










function NavMenu({
  children
}) {
  const {
    0: sideBarOpen,
    1: setSideBarOpen
  } = (0,external_react_.useState)(true);
  const {
    0: windowWidth,
    1: setWindowWidth
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    setWindowWidth(window.innerWidth);

    function onResize(e) {
      setWindowWidth(e.target.innerWidth);
      setSideBarOpen(true);
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const route = (0,router_.useRouter)();
  const menu = [{
    text: "Users list",
    path: HOME_PAGE
  }, {
    text: "Register user",
    path: REGISTER_PAGE
  }];
  const page = navIndex[route.pathname] ? navIndex[route.pathname] : {};
  const {
    title
  } = page;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Container */.W2, {
    fullHeight: true,
    withBgColor: true,
    padding: 0,
    children: [page.navigation && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SideBar, {
        menuItems: menu,
        pathname: route.pathname,
        open: sideBarOpen,
        setOpen: setSideBarOpen,
        windowWidth: windowWidth
      }), /*#__PURE__*/jsx_runtime_.jsx(TopBar, {
        title: title
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components/* Container */.W2, {
      paddingLeft: windowWidth && windowWidth > 600 && "266px",
      fullWidth: true,
      fullHeight: true,
      withBgColor: true,
      children: children
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/modal/openModal.js


let modalRef = null;
function setModalRef(ref) {
  modalRef = ref;
}

function defaultModal(component = () => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}), options = {
  width: 'unset',
  height: 'unset',
  props: {}
}) {
  if (!modalRef) {
    return;
  }

  modalRef.setModalProps(component, options);
}

function closeModal() {
  modalRef.close();
}
/* harmony default export */ const openModal = ({
  defaultModal
});
;// CONCATENATED MODULE: ./src/components/modal/Modal.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Modal extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false,
      options: {},
      component: () => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
    });

    _defineProperty(this, "close", () => {
      const {
        open
      } = this.state;

      if (open) {
        this.setState({
          open: false
        });
      }
    });

    _defineProperty(this, "setModalProps", (component, options) => {
      this.setState({
        component,
        options,
        open: true
      });
    });
  }

  componentDidMount() {
    setModalRef(this);
  }

  render() {
    const {
      open,
      component,
      options
    } = this.state;
    const {
      props
    } = options;
    const Component = component;

    if (!open) {
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }

    return /*#__PURE__*/jsx_runtime_.jsx(components/* ModalBackground */.vO, {
      children: /*#__PURE__*/jsx_runtime_.jsx(OutsideClick, {
        onClickOutside: this.close,
        children: /*#__PURE__*/jsx_runtime_.jsx(components/* ContrastContainer */["do"], {
          rounded: true,
          width: options.width,
          height: options.height,
          onMobile: {
            height: "unset"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread(_objectSpread({}, props), {}, {
            close: this.close
          }))
        })
      })
    });
  }

}

/* harmony default export */ const modal_Modal = (Modal);
;// CONCATENATED MODULE: ./src/components/genericComponents/outsideClick/OutsideClick.jsx


function OutsideClick({
  onClickOutside = () => {},
  children
}) {
  external_react_default().useEffect(() => {
    const container = document.getElementById("container");

    function mouseInside(e) {
      if (!(container !== null && container !== void 0 && container.contains(e.target))) {
        onClickOutside();
      }
    }

    document.addEventListener("click", mouseInside);
    return () => document.removeEventListener("click", mouseInside);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      maxWidth: "100%"
    },
    id: "container",
    children: children
  });
}
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
;// CONCATENATED MODULE: ./src/cookies/deleteUser.js

function deleteUser(id) {
  const cookie = (0,external_nookies_.parseCookies)();
  const users = cookie.users ? JSON.parse(cookie.users) : [];
  const indexToRemove = users.map(item => item.id).indexOf(id);
  users.splice(indexToRemove, 1);
  const stringUsers = JSON.stringify(users);
  (0,external_nookies_.setCookie)(null, "users", stringUsers, {
    maxAge: 60 * 60 * 24 * 1 //1 dia

  });
  return users;
}
;// CONCATENATED MODULE: ./src/cookies/editUser.js
function editUser_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function editUser_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { editUser_ownKeys(Object(source), true).forEach(function (key) { editUser_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { editUser_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function editUser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function editUser(id, userData) {
  const cookie = (0,external_nookies_.parseCookies)();
  const users = cookie.users ? JSON.parse(cookie.users) : [];
  const indexToEdit = users.map(item => item.id).indexOf(id);
  let selectedUser = users[indexToEdit];
  selectedUser = editUser_objectSpread(editUser_objectSpread({}, selectedUser), userData);
  users.splice(indexToEdit, 1, selectedUser);
  const stringUsers = JSON.stringify(users);
  (0,external_nookies_.setCookie)(null, "users", stringUsers, {
    maxAge: 60 * 60 * 24 * 1 //1 dia

  });
  return users;
}
// EXTERNAL MODULE: ./src/cookies/getUsers.js
var getUsers = __webpack_require__(8390);
// EXTERNAL MODULE: ./src/components/genericComponents/index.js + 17 modules
var genericComponents = __webpack_require__(4901);
;// CONCATENATED MODULE: ./src/components/home/UserDetailsSection.jsx
function UserDetailsSection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function UserDetailsSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserDetailsSection_ownKeys(Object(source), true).forEach(function (key) { UserDetailsSection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserDetailsSection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserDetailsSection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function UserDetailsSection({
  title,
  content = []
}) {
  const {
    0: editMode,
    1: setEditMode
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Container */.W2, {
    className: "column-item",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Row */.X2, {
      align: "center",
      justify: "space-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components/* Text */.xv, {
        variant: "h2",
        children: title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Row */.X2, {
        spacing: 2,
        align: "center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components/* IconButton */.hU, {
          className: "row-item",
          withoutPadding: true,
          bgColor: "transparent",
          type: "button",
          onClick: () => setEditMode(!editMode),
          children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            icon: editMode ? free_solid_svg_icons_.faTimes : free_solid_svg_icons_.faPen
          })
        }), editMode && /*#__PURE__*/jsx_runtime_.jsx(components/* IconButton */.hU, {
          className: "row-item",
          withoutPadding: true,
          bgColor: "transparent",
          type: "submit",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
            icon: free_solid_svg_icons_.faCheck
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components/* Divider */.iz, {
      margin: "sm",
      color: "primary"
    }), content.map((item, index) => editMode && item.value ? /*#__PURE__*/jsx_runtime_.jsx(genericComponents/* CustomInput */.t7, UserDetailsSection_objectSpread(UserDetailsSection_objectSpread({}, item), {}, {
      defaultValue: item.value,
      readOnly: item.name === "cpf"
    })) : item.value && /*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Row */.X2, {
      className: "column-item",
      spacing: 1,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Text */.xv, {
        className: "row-item",
        variant: "h3",
        children: [item.label, ":"]
      }), /*#__PURE__*/jsx_runtime_.jsx(components/* Text */.xv, {
        className: "row-item",
        variant: "h4",
        children: item.value
      })]
    }, index))]
  });
}
;// CONCATENATED MODULE: ./src/components/home/UserDetails.jsx
function UserDetails_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function UserDetails_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserDetails_ownKeys(Object(source), true).forEach(function (key) { UserDetails_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserDetails_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserDetails_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function UserDetails({
  id,
  users,
  setName
}) {
  const {
    0: userDetails,
    1: setUserDetails
  } = (0,external_react_.useState)({});

  const setUserDetailsAndUpdate = newDetails => {
    const newUsers = users;
    const indexToEdit = newUsers.map(item => item.id).indexOf(userDetails.id);
    newUsers[indexToEdit] = UserDetails_objectSpread(UserDetails_objectSpread({}, newUsers[indexToEdit]), newDetails);
    editUser(userDetails.id, newDetails);
    setUserDetails(state => UserDetails_objectSpread(UserDetails_objectSpread({}, state), newDetails));
  };

  (0,external_react_.useEffect)(() => {
    const selectedUser = (0,getUsers/* default */.Z)(id);
    setUserDetails(selectedUser);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(genericComponents/* Form */.l0, {
    onSubmit: data => {
      setUserDetailsAndUpdate(data);

      if (data.name) {
        setName(data.name);
      }

      genericComponents/* openFeedbackModal.successModal */.IU.successModal("Information edited!");
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Column */.sg, {
      fullWidth: true,
      spacing: 4,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components/* Text */.xv, {
        className: "column-item",
        textAlign: "center",
        variant: "h1",
        children: userDetails.name
      }), /*#__PURE__*/jsx_runtime_.jsx(UserDetailsSection, {
        title: "Basic data",
        content: [{
          label: "Name",
          value: userDetails.name,
          name: "name"
        }, {
          label: "Last name",
          value: userDetails.lastName,
          name: "lastName"
        }, {
          label: "E-mail",
          value: userDetails.email,
          name: "email",
          validation: "isEmail"
        }, {
          label: "Phone",
          value: userDetails.phone,
          name: "phone",
          validation: "isPhone",
          mask: "phoneMask"
        }]
      }), /*#__PURE__*/jsx_runtime_.jsx(UserDetailsSection, {
        title: "Address",
        content: [{
          label: "CEP",
          value: userDetails.cep,
          name: "cep",
          validation: "isCep",
          mask: "cepMask"
        }, {
          label: "Address 01",
          value: userDetails.address1,
          name: "address1"
        }, {
          label: "Address 02",
          value: userDetails.address2,
          name: "address2"
        }]
      }), /*#__PURE__*/jsx_runtime_.jsx(UserDetailsSection, {
        title: "Personal data",
        content: [{
          label: "Birthdate",
          value: userDetails.birthdate,
          name: "birthdate"
        }, {
          label: "CPF",
          value: userDetails.cpf,
          name: "cpf",
          validation: 'isCpf',
          mask: 'cpfMask'
        }, {
          label: "Salary",
          value: userDetails.salary,
          name: "salary",
          mask: 'moneyMask'
        }]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/home/UsersCards.jsx










function UsersCards({
  details,
  setUsers,
  users
}) {
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)('');
  (0,external_react_.useEffect)(() => {
    const selectedUser = (0,getUsers/* default */.Z)(details.id);
    setName(`${selectedUser.name} ${selectedUser.lastName}`);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(components/* ContrastContainer */["do"], {
    className: "row-item",
    rounded: true,
    width: "400px",
    boxShadow: "0 10px 10px -10px gray",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Column */.sg, {
      spacing: 1,
      align: "flex-start",
      fullWidth: true,
      wrap: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components/* Text */.xv, {
        className: "column-item",
        children: name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Row */.X2, {
        spacing: 2,
        className: "column-item",
        fullWidth: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(components/* ContainedButton */.FO, {
          className: "row-item",
          fullWidth: true,
          onClick: () => openModal.defaultModal(UserDetails, {
            width: '900px',
            height: '700px',
            props: {
              id: details.id,
              users,
              setName
            }
          }),
          children: "Details"
        }), /*#__PURE__*/jsx_runtime_.jsx(components/* OutlinedButton */.Uc, {
          className: "row-item",
          fullWidth: true,
          color: "error",
          onClick: () => {
            const newUsers = deleteUser(details.id);
            setUsers(newUsers);
            genericComponents/* openFeedbackModal.successModal */.IU.successModal("Usuário deletado com sucesso!");
          },
          children: "Delete user"
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/index.js








/***/ }),

/***/ 8390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getUsers)
/* harmony export */ });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);

function getUsers(id) {
  const cookie = (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)();
  const users = cookie.users ? JSON.parse(cookie.users) : [];

  if (!!id) {
    const indexToGet = users.map(item => item.id).indexOf(id);
    return users[indexToGet];
  }

  return users;
}

/***/ }),

/***/ 8742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pB": () => (/* binding */ move),
/* harmony export */   "xw": () => (/* binding */ movePadding),
/* harmony export */   "pG": () => (/* binding */ moveTop)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const move = (from, to) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{left:", ";}to{left:", "}"], from, to);

const movePadding = (from, to) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{padding:", ";}to{padding:", "}"], from, to);

const moveTop = (from, to) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{top:", ";}to{top:", ";}"], from, to);



/***/ }),

/***/ 793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mainTheme = {
  colors: {
    tertiary: "#f2f2f2",
    secondary: "#fff",
    primary: "#00a335",
    text: "#424749",
    inputPlaceholder: "#7c7c7c",
    disabled: "#7c7c7c",
    error: "#ff5757",
    transparent: 'rgba(0, 0, 0, 0)'
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    sideBarWidth: "250px",
    navContentPadding: "266px"
  },
  fontSize: {
    sm: "11px",
    md: "13px",
    lg: "15px",
    xl: "18px",
    xxl: "24px"
  },
  fonts: {
    h1: {
      size: "24px",
      weight: 700
    },
    h2: {
      size: "18px",
      weight: 600
    },
    h3: {
      size: "15px",
      weight: 500
    },
    h4: {
      size: "15px",
      weight: 400
    },
    h5: {
      size: "13px",
      weight: 400
    },
    h6: {
      size: "11px",
      weight: 400
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainTheme);

/***/ })

};
;