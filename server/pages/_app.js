"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/styles/globals.js

/* harmony default export */ const globals = ((0,external_styled_components_.createGlobalStyle)(["*{font-family:\"Montserrat\",sans-serif;padding:0;margin:0;box-sizing:border-box;}html,body,body > div:first-child,div#__next{height:100%;width:100%;}::-webkit-scrollbar{width:8px;}::-webkit-scrollbar-track{background-color:", ";}::-webkit-scrollbar-thumb{background-color:", ";border-radius:5px;}"], props => props.theme.colors.tertiary, props => props.theme.colors.secondary));
// EXTERNAL MODULE: ./src/components/index.js + 17 modules
var components = __webpack_require__(7372);
// EXTERNAL MODULE: ./src/styles/themes/mainTheme.js
var mainTheme = __webpack_require__(793);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/styles/components/index.js + 10 modules
var styles_components = __webpack_require__(3630);
// EXTERNAL MODULE: ./src/components/genericComponents/feedbackModal/openFeedbackModal.js
var openFeedbackModal = __webpack_require__(9322);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/styles/animations/move.js
var move = __webpack_require__(8742);
;// CONCATENATED MODULE: ./src/animations/feedbackModal/feedbackModalAnimation.js

const MOVE_FROM_TOP = (0,move/* moveTop */.pG)('-100px', '10px');
const MOVE_TO_TOP = (0,move/* moveTop */.pG)("10px", "-100px");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/genericComponents/feedbackModal/FeedbackModal.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class FeedbackModal extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false,
      type: "",
      text: "",
      animation: ""
    });

    _defineProperty(this, "close", () => {
      const {
        open
      } = this.state;

      if (open) {
        this.setState({
          open: false,
          animation: MOVE_TO_TOP
        });
      }
    });

    _defineProperty(this, "setModalProps", (text, type) => {
      this.setState({
        text,
        type,
        open: true,
        animation: MOVE_FROM_TOP
      });
    });

    _defineProperty(this, "getTypeModal", type => {
      const modalType = {
        success: {
          bgColor: "primary",
          color: "secondary"
        },
        error: {
          bgColor: "error",
          color: "secondary"
        }
      };
      return modalType[type];
    });
  }

  componentDidMount() {
    (0,openFeedbackModal/* setFeedbackModalRef */.ky)(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.open && this.state.open) {
      setTimeout(() => {
        this.close();
      }, 3000);
    }
  }

  render() {
    const {
      text,
      type,
      animation
    } = this.state;
    const theme = this.getTypeModal(type);
    return /*#__PURE__*/jsx_runtime_.jsx(styles_components/* Container */.W2, {
      fullWidth: true,
      position: "absolute",
      zIndex: 2000,
      top: "-100px",
      align: "center",
      animationName: animation,
      animationDuration: "0.5s",
      animationFillMode: "forwards",
      onMobile: {
        height: "unset"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(styles_components/* ContrastContainer */["do"], {
        bgColor: theme === null || theme === void 0 ? void 0 : theme.bgColor,
        rounded: true,
        boxShadow: "0 0 10px 0 gray",
        zIndex: 2500,
        children: /*#__PURE__*/jsx_runtime_.jsx(styles_components/* Text */.xv, {
          color: theme === null || theme === void 0 ? void 0 : theme.color,
          children: text
        })
      })
    });
  }

}

/* harmony default export */ const feedbackModal_FeedbackModal = (FeedbackModal);
;// CONCATENATED MODULE: ./src/pages/_app.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Users Registration"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
      theme: mainTheme/* default */.Z,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components/* NavMenu */.Ml, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      }), /*#__PURE__*/jsx_runtime_.jsx(globals, {}), /*#__PURE__*/jsx_runtime_.jsx(components/* Modal */.u_, {}), /*#__PURE__*/jsx_runtime_.jsx(feedbackModal_FeedbackModal, {})]
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,61,901,372], () => (__webpack_exec__(6777)));
module.exports = __webpack_exports__;

})();