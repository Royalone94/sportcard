module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/global/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_variables__ = __webpack_require__("./styles/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_SearchBox__ = __webpack_require__("./components/global/SearchBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
var _jsxFileName = "E:\\Work\\sportscard-frontend-master\\components\\global\\Nav.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
    _this.state = {
      showMenu: 'hide-menu'
    };
    _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Nav, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      var show = this.state.showMenu === 'hide-menu' ? 'show-menu' : 'hide-menu';
      this.setState({
        showMenu: show
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]]) + " " + (this.state.showMenu + ' nav shadow' || "")
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]]) + " " + "nav-left"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/sportscard-logo.png",
        alt: "Sports Card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]]) + " " + "logo"
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]]) + " " + "nav-right"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]]) + " " + "links"
      }, this.props.authed == undefined || this.props.authed == false ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]])
      }, "log in")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        id: "signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]])
      }, "sign up"))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]])
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        route: "me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]])
      }, "My SportsCard")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routes__["Link"], {
        href: "/logout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]])
      }, "Log Out")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "button",
        "aria-label": "Menu",
        "aria-controls": "navigation",
        onClick: this.toggleMenu.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]]) + " " + "hamburger hamburger--squeeze"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]]) + " " + "hamburger-box"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1217054296", [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]]]) + " " + "hamburger-inner"
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1217054296",
        css: ".nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, ";padding:0 1rem;height:4.25rem;z-index:101;position:fixed;top:0;left:0;width:100%;}.nav-left.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}h1.__jsx-style-dynamic-selector{margin:0 1.5rem 0 0;cursor:pointer;}.logo.__jsx-style-dynamic-selector{display:block;max-width:170px;}.nav-right.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.search.__jsx-style-dynamic-selector{display:none;}a.__jsx-style-dynamic-selector{display:none;color:white;margin-left:1rem;font-family:'proxima-nova',sans-serif;font-weight:700;font-style:italic;-webkit-text-decoration:none;text-decoration:none;}a#signup.__jsx-style-dynamic-selector{background:linear-gradient( 90deg, ").concat(__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, " 0%, ").concat(__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, " 100%);padding:2px 15px;}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, ";}@media ").concat(__WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, "{a.__jsx-style-dynamic-selector,.search.__jsx-style-dynamic-selector{display:unset;}.hamburger.__jsx-style-dynamic-selector{display:none !important;}}@media ").concat(__WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, "{.show-menu.__jsx-style-dynamic-selector .nav-right.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100%;background-color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding-top:5rem;}.show-menu.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector,.show-menu.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.show-menu.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-top:0;}.show-menu.__jsx-style-dynamic-selector .links.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{margin:0.5rem 0;}.show-menu.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector,.show-menu.__jsx-style-dynamic-selector .search.__jsx-style-dynamic-selector{display:unset;}}.hamburger.__jsx-style-dynamic-selector{padding:0 15px;display:inline-block;cursor:pointer;-webkit-transition-property:opacity,filter;transition-property:opacity,filter;-webkit-transition-duration:0.15s;transition-duration:0.15s;-webkit-transition-timing-function:linear;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;position:fixed;top:0;right:1rem;height:4.25rem;}.hamburger.__jsx-style-dynamic-selector:hover{opacity:0.7;}.hamburger-box.__jsx-style-dynamic-selector{width:40px;height:24px;display:inline-block;position:relative;}.hamburger-inner.__jsx-style-dynamic-selector{display:block;top:50%;margin-top:-2px;}.hamburger-inner.__jsx-style-dynamic-selector,.hamburger-inner.__jsx-style-dynamic-selector::before,.hamburger-inner.__jsx-style-dynamic-selector::after{width:40px;height:4px;background-color:").concat(__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white, ";border-radius:4px;position:absolute;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:0.15s;transition-duration:0.15s;-webkit-transition-timing-function:ease;transition-timing-function:ease;}.hamburger-inner.__jsx-style-dynamic-selector::before,.hamburger-inner.__jsx-style-dynamic-selector::after{content:\"\";display:block;}.hamburger-inner.__jsx-style-dynamic-selector::before{top:-10px;}.hamburger-inner.__jsx-style-dynamic-selector::after{bottom:-10px;}.hamburger--squeeze.__jsx-style-dynamic-selector .hamburger-inner.__jsx-style-dynamic-selector{-webkit-transition-duration:0.075s;transition-duration:0.075s;-webkit-transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);}.hamburger--squeeze.__jsx-style-dynamic-selector .hamburger-inner.__jsx-style-dynamic-selector::before{-webkit-transition:top 0.075s 0.12s ease,opacity 0.075s ease;transition:top 0.075s 0.12s ease,opacity 0.075s ease;}.hamburger--squeeze.__jsx-style-dynamic-selector .hamburger-inner.__jsx-style-dynamic-selector::after{-webkit-transition:bottom 0.075s 0.12s ease,-webkit-transform 0.075s cubic-bezier(0.55,0.055,0.675,0.19);-webkit-transition:bottom 0.075s 0.12s ease,transform 0.075s cubic-bezier(0.55,0.055,0.675,0.19);transition:bottom 0.075s 0.12s ease,transform 0.075s cubic-bezier(0.55,0.055,0.675,0.19);}.show-menu.__jsx-style-dynamic-selector .hamburger--squeeze.__jsx-style-dynamic-selector .hamburger-inner.__jsx-style-dynamic-selector{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition-delay:0.12s;transition-delay:0.12s;-webkit-transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);transition-timing-function:cubic-bezier(0.215,0.61,0.355,1);}.show-menu.__jsx-style-dynamic-selector .hamburger--squeeze.__jsx-style-dynamic-selector .hamburger-inner.__jsx-style-dynamic-selector::before{top:0;opacity:0;-webkit-transition:top 0.075s ease,opacity 0.075s 0.12s ease;transition:top 0.075s ease,opacity 0.075s 0.12s ease;}.show-menu.__jsx-style-dynamic-selector .hamburger--squeeze.__jsx-style-dynamic-selector .hamburger-inner.__jsx-style-dynamic-selector::after{bottom:0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:bottom 0.075s ease,-webkit-transform 0.075s 0.12s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:bottom 0.075s ease,transform 0.075s 0.12s cubic-bezier(0.215,0.61,0.355,1);transition:bottom 0.075s ease,transform 0.075s 0.12s cubic-bezier(0.215,0.61,0.355,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdsb2JhbFxcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFZ0IsQUFHb0IsQUFhQSxBQUtPLEFBSU4sQUFJRixBQU1DLEFBR0EsQUFZc0IsQUFLZCxBQU9OLEFBR1UsQUFLVCxBQVlzQixBQU14QixBQUd3QixBQUl2QixBQU1BLEFBc0JILEFBSUQsQUFPRyxBQU9ILEFBV0EsQUFJRCxBQUdHLEFBR2MsQUFJMkIsQUFHdUMsQUFHckUsQUFLbEIsQUFLRyxNQUpDLEdBS2UsQ0ExQjFCLENBN0JhLEFBY0QsQUFXRyxDQTdCZixDQXhGQSxBQUdhLEFBa0RaLEFBdUVELENBdElpQixBQXFDaEIsQUFpQ2tCLEFBdUNWLENBaEVELEFBK0JjLENBbkJjLEFBU2pCLEFBdUZvQyxJQTdKdkMsQ0FrRFAsQ0FnRVEsQUFPOEIsQ0FkekIsQ0EvRHJCLENBMUJpQixBQWtIbEIsR0FqRmEsRUE5Q2IsS0FKQSxDQWdGZ0IsRUFrQ2hCLENBL0RjLEdBakMwQixFQXlGckIsTUExRWlCLENBbUJpQyxBQTZCaEMsV0EyQnJDLEFBZ0NtRSxNQW5CaEQsR0FsSEwsR0ExQmlCLEFBYVgsTUF5QkgsSUFtSU8sQ0FwSHhCLENBd0ZtQixJQTdEMEIsTUF6QzFCLEFBNkl3RSxDQTVHOUMsTUF6QjNCLENBK0ZhLFVBdEdULEFBMkh0QixNQW5IQSxTQXFEMkIsQ0EyRTNCLFFBTmdFLE9BL0k1QyxtQkFjcEIsR0EzQjRCLENBbUVjLE9BUlEsY0F4RTlCLEFBcUdlLE9BMERuQyxzQkFqQjJCLG9CQW5IRCx1QkFzRHpCLElBcUJhLENBb0VkLE1BNUpBLE1BeUZlLEFBd0NrQixFQXRFTyxFQXhFQyxTQW9LekMsQ0E3RHFCLEtBOUJGLGVBK0JXLFVBdkdkLGFBMEJoQixFQXpCZ0IsSUF1R04sU0FDQSxBQXFDVixFQTVJYSxPQXdHSyxLQXZHRixZQXdHQSxFQXVFaEIsQ0E5S08sTUFDQyxNQXVHaUIsQ0F0R2IsV0FDWixZQXNHd0MscUJBQ04sZUFDVCxNQUNLLFdBQ0ksZUFDbEMiLCJmaWxlIjoiY29tcG9uZW50c1xcZ2xvYmFsXFxOYXYuanMiLCJzb3VyY2VSb290IjoiRTpcXFdvcmtcXHNwb3J0c2NhcmQtZnJvbnRlbmQtbWFzdGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjb2xvcnMsIG1lZGlhUXVlcmllcyB9IGZyb20gJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2dsb2JhbC9TZWFyY2hCb3gnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNob3dNZW51OiAnaGlkZS1tZW51J1xyXG5cdFx0fTtcclxuXHRcdHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlTWVudSgpIHtcclxuXHRcdHZhciBzaG93ID0gdGhpcy5zdGF0ZS5zaG93TWVudSA9PT0gJ2hpZGUtbWVudScgPyAnc2hvdy1tZW51JyA6ICdoaWRlLW1lbnUnO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNZW51OiBzaG93IH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PG5hdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd01lbnUgKyAnIG5hdiBzaGFkb3cnfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdi1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHQ8aDE+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvc3BvcnRzY2FyZC1sb2dvLnBuZ1wiIGFsdD1cIlNwb3J0cyBDYXJkXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdi1yaWdodFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5hdXRoZWQgPT0gdW5kZWZpbmVkIHx8IHRoaXMucHJvcHMuYXV0aGVkID09IGZhbHNlID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5sb2cgaW48L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBpZD1cInNpZ251cFwiPnNpZ24gdXA8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgcm91dGU9XCJtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5NeSBTcG9ydHNDYXJkPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9sb2dvdXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+TG9nIE91dDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGFtYnVyZ2VyIGhhbWJ1cmdlci0tc3F1ZWV6ZVwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiTWVudVwiXHJcblx0XHRcdFx0XHRcdGFyaWEtY29udHJvbHM9XCJuYXZpZ2F0aW9uXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7Lyogc3R5bGVzICovfVxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdC5uYXYge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7Y29sb3JzLmJsdWV9O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDFyZW07XHJcblx0XHRcdFx0XHRcdGhlaWdodDogNC4yNXJlbTtcclxuXHRcdFx0XHRcdFx0ei1pbmRleDogMTAxO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQubmF2LWxlZnQge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRoMSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAxLjVyZW0gMCAwO1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQubG9nbyB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDE3MHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lm5hdi1yaWdodCB7XHJcblx0XHRcdFx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zZWFyY2gge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDFyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAncHJveGltYS1ub3ZhJywgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YSNzaWdudXAge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIDkwZGVnLFxyXG5cdFx0XHRcdFx0XHRcdCR7Y29sb3JzLmxpZ2h0Z3JlZW59IDAlLFxyXG5cdFx0XHRcdFx0XHRcdCR7Y29sb3JzLmRhcmtncmVlbn0gMTAwJSk7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDJweCAxNXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGE6aG92ZXIge1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAke2NvbG9ycy5kYXJrb3JhbmdlfTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRAbWVkaWEgJHttZWRpYVF1ZXJpZXMubGFyZ2VVcH0ge1xyXG5cdFx0XHRcdFx0XHRhLFxyXG5cdFx0XHRcdFx0XHQuc2VhcmNoIHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiB1bnNldDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuaGFtYnVyZ2VyIHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdEBtZWRpYSAke21lZGlhUXVlcmllcy5sYXJnZURvd259IHtcclxuXHRcdFx0XHRcdFx0LnNob3ctbWVudSAubmF2LXJpZ2h0IHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmx1ZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdFx0LnNob3ctbWVudSAubGlua3MsXHJcblx0XHRcdFx0XHRcdC5zaG93LW1lbnUgLmxpbmtzIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuc2hvdy1tZW51IC5saW5rcyBzcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93LW1lbnUgLmxpbmtzIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHQuc2hvdy1tZW51IGEsXHJcblx0XHRcdFx0XHRcdC5zaG93LW1lbnUgLnNlYXJjaCB7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvKiBIQU1CVVJHRVIgTUVOVSAqL1xyXG5cdFx0XHRcdFx0LmhhbWJ1cmdlciB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMTVweDtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGZpbHRlcjtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcblx0XHRcdFx0XHRcdGZvbnQ6IGluaGVyaXQ7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiBpbmhlcml0O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogdmlzaWJsZTtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQuMjVyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuaGFtYnVyZ2VyOmhvdmVyIHtcclxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMC43O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5oYW1idXJnZXItYm94IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMjRweDtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LmhhbWJ1cmdlci1pbm5lciB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTJweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5oYW1idXJnZXItaW5uZXIsXHJcblx0XHRcdFx0XHQuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXHJcblx0XHRcdFx0XHQuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMud2hpdGV9O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXHJcblx0XHRcdFx0XHQuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcclxuXHRcdFx0XHRcdFx0dG9wOiAtMTBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0Ym90dG9tOiAtMTBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lciB7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDc1cztcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmhhbWJ1cmdlci0tc3F1ZWV6ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIDAuMTJzIGVhc2UsIG9wYWNpdHkgMC4wNzVzIGVhc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuaGFtYnVyZ2VyLS1zcXVlZXplIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIDAuMDc1cyAwLjEycyBlYXNlLCB0cmFuc2Zvcm0gMC4wNzVzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnNob3ctbWVudSAuaGFtYnVyZ2VyLS1zcXVlZXplIC5oYW1idXJnZXItaW5uZXIge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuc2hvdy1tZW51IC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMC4wNzVzIGVhc2UsIG9wYWNpdHkgMC4wNzVzIDAuMTJzIGVhc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuc2hvdy1tZW51IC5oYW1idXJnZXItLXNxdWVlemUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJvdHRvbSAwLjA3NXMgZWFzZSwgdHJhbnNmb3JtIDAuMDc1cyAwLjEycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRhdXRoZWQ6IHN0YXRlLmF1dGhlZFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE5hdilcclxuIl19 */\n/*@ sourceURL=components\\global\\Nav.js */"),
        dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].lightgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkgreen, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].darkorange, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeUp, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["b" /* mediaQueries */].largeDown, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].blue, __WEBPACK_IMPORTED_MODULE_3__styles_variables__["a" /* colors */].white]
      }));
    }
  }]);

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    authed: state.authed
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Nav));

/***/ }),

/***/ "./components/global/SearchBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_variables__ = __webpack_require__("./styles/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
var _jsxFileName = "E:\\Work\\sportscard-frontend-master\\components\\global\\SearchBox.js";





var SearchBox = function SearchBox(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Form"], {
    className: "search",
    action: "/search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2476305638", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green]]]) + " " + "position-relative form-group"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"], {
    "for": "search",
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Search"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    type: "search",
    name: "q",
    id: "search",
    placeholder: "Search for a player, team or brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2476305638", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green]]]) + " " + "form-control"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2476305638", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green]]]) + " " + "search-button btn btn-link"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/icons/icon-search.svg",
    alt: "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2476305638", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green]]])
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2476305638",
    css: ".search.__jsx-style-dynamic-selector{margin-left:1.5rem;}.form-group.__jsx-style-dynamic-selector{margin-bottom:0;}input[type='search'].__jsx-style-dynamic-selector{background:".concat(__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, ";border:none;height:35px;margin-bottom:0;border-radius:1.5rem;font-size:12px;color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, ";width:90%;margin:0 auto;}input[type='search'].__jsx-style-dynamic-selector:focus{border:solid 1px ").concat(__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, ";}button.__jsx-style-dynamic-selector{position:absolute;top:44%;right:15px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border-radius:50%;border:none;}button.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdsb2JhbFxcU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHOEIsQUFHSCxBQUd3QixBQVdNLEFBRzVCLEFBUVAsV0FDYixLQXpCQSxFQWlCVSxDQXBCVixPQXFCYSxXQUNnQixHQWhCZixNQVdkLE1BVmMsWUFDSSxnQkFDSyxxQkFDTixlQUNvQixjQVlqQixrQkFDTixHQVpGLFNBYVosQ0FaZ0IsY0FDaEIiLCJmaWxlIjoiY29tcG9uZW50c1xcZ2xvYmFsXFxTZWFyY2hCb3guanMiLCJzb3VyY2VSb290IjoiRTpcXFdvcmtcXHNwb3J0c2NhcmQtZnJvbnRlbmQtbWFzdGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcydcclxuaW1wb3J0IHsgRm9ybSwgTGFiZWwgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuY29uc3QgU2VhcmNoQm94ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8Rm9ybSBjbGFzc05hbWU9XCJzZWFyY2hcIiBhY3Rpb249XCIvc2VhcmNoXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxMYWJlbCBmb3I9XCJzZWFyY2hcIiBoaWRkZW4+U2VhcmNoPC9MYWJlbD5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCIgXHJcbiAgICAgICAgICBuYW1lPVwicVwiIFxyXG4gICAgICAgICAgaWQ9XCJzZWFyY2hcIiBcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIHBsYXllciwgdGVhbSBvciBicmFuZFwiIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uIGJ0biBidG4tbGlua1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb25zL2ljb24tc2VhcmNoLnN2Z1wiIGFsdD1cIlNlYXJjaFwiLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBzdHlsZXMgKi99XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9J3NlYXJjaCddIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3JzLndoaXRlfTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2t9O1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPSdzZWFyY2gnXTpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ncmVlbn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDQ0JTtcclxuICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24gaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9Gb3JtPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3giXX0= */\n/*@ sourceURL=components\\global\\SearchBox.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (SearchBox);

/***/ }),

/***/ "./lib/cookie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__("js-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);

var setCookie = function setCookie(key, value) {
  if (process.browser) {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(key, value, {
      expires: 1,
      path: "/"
    });
  }
};
var removeCookie = function removeCookie(key) {
  if (process.browser) {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(key, {
      expires: 1
    });
  }
};
var getCookie = function getCookie(key, req) {
  return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

var getCookieFromBrowser = function getCookieFromBrowser(key) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(key);
};

var getCookieFromServer = function getCookieFromServer(key, req) {
  if (req.hasOwnProperty('req')) {
    req = req.req;
  }

  if (!req.headers || !req.headers.cookie) {
    return undefined;
  }

  var rawCookie = req.headers.cookie.split(";").find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  });

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split("=")[1];
};

/***/ }),

/***/ "./lib/sportscard-api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportscardAPI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cookie__ = __webpack_require__("./lib/cookie.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Connection helpers for the Sportscard API Backend


var API_ENVIRONMENTS = {
  'production': 'https://sportscard-api.techequipt.com.au',
  'default': 'https://sportscard-api.techequipt.com.au' // 'default': 'http://localhost:8000',

};
var API_BASE = API_ENVIRONMENTS["development"] != undefined ? API_ENVIRONMENTS["development"] : API_ENVIRONMENTS['default'];
var SportscardAPI =
/*#__PURE__*/
function () {
  function SportscardAPI(ctx, token, api_base) {
    _classCallCheck(this, SportscardAPI);

    this.jwtCookieName = 'jwt';
    this.API_BASE = api_base != undefined ? api_base : API_BASE;
    this.default_headers = {
      // Set default headers for JSON APIs
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (ctx || token) {
      this.authToken = token != undefined ? token : Object(__WEBPACK_IMPORTED_MODULE_2__cookie__["a" /* getCookie */])(this.jwtCookieName, ctx);
    }
  }

  _createClass(SportscardAPI, [{
    key: "_get_endpoint",
    value: function _get_endpoint(endpoint) {
      // Adds the base API to the endpoint
      return this.API_BASE + endpoint;
    }
  }, {
    key: "_get_headers",
    value: function _get_headers(headers) {
      // Combine the default + auth token headers
      headers = _objectSpread({}, headers, this.default_headers);

      if (this.authToken) {
        headers['Authorization'] = 'JWT ' + this.authToken;
      }

      return headers;
    }
  }, {
    key: "_objToQueryString",
    value: function _objToQueryString(obj) {
      // Used by the _get method, turns the data dict into querystring
      var keyValuePairs = [];

      for (var key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }

      return keyValuePairs.join('&');
    }
  }, {
    key: "_post",
    value: function () {
      var _post2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(endpoint, data) {
        var headers,
            res,
            ret,
            _args = arguments;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                _context.next = 3;
                return fetch(this._get_endpoint(endpoint), {
                  method: "post",
                  body: JSON.stringify(data),
                  headers: this._get_headers(headers)
                });

              case 3:
                res = _context.sent;

                if (!(res.ok === true)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return res.json();

              case 7:
                ret = _context.sent;
                return _context.abrupt("return", ret);

              case 9:
                return _context.abrupt("return", {
                  'error': res.status
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function _post(_x, _x2) {
        return _post2.apply(this, arguments);
      };
    }()
  }, {
    key: "_get",
    value: function () {
      var _get2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(endpoint, data) {
        var headers,
            res,
            ret,
            _args2 = arguments;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                headers = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
                _context2.next = 3;
                return fetch(this._get_endpoint(endpoint) + '?' + this._objToQueryString(data), {
                  headers: this._get_headers(headers)
                });

              case 3:
                res = _context2.sent;

                if (!(res.ok === true)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 7;
                return res.json();

              case 7:
                ret = _context2.sent;
                return _context2.abrupt("return", ret);

              case 9:
                return _context2.abrupt("return", {
                  'error': res.status
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function _get(_x3, _x4) {
        return _get2.apply(this, arguments);
      };
    }()
  }, {
    key: "_patch",
    value: function () {
      var _patch2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(endpoint, data) {
        var headers,
            res,
            ret,
            _args3 = arguments;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                headers = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                _context3.next = 3;
                return fetch(this._get_endpoint(endpoint), {
                  method: "patch",
                  body: JSON.stringify(data),
                  headers: this._get_headers(headers)
                });

              case 3:
                res = _context3.sent;

                if (!(res.ok === true)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 7;
                return res.json();

              case 7:
                ret = _context3.sent;
                return _context3.abrupt("return", ret);

              case 9:
                return _context3.abrupt("return", {
                  'error': res.status
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function _patch(_x5, _x6) {
        return _patch2.apply(this, arguments);
      };
    }()
  }, {
    key: "_options",
    value: function () {
      var _options2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(endpoint) {
        var headers,
            res,
            ret,
            _args4 = arguments;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                headers = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                _context4.next = 3;
                return fetch(this._get_endpoint(endpoint), {
                  method: "options",
                  headers: this._get_headers(headers)
                });

              case 3:
                res = _context4.sent;

                if (!(res.ok === true)) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 7;
                return res.json();

              case 7:
                ret = _context4.sent;
                return _context4.abrupt("return", ret);

              case 9:
                return _context4.abrupt("return", {
                  'error': res.status
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function _options(_x7) {
        return _options2.apply(this, arguments);
      };
    }() // Data Return Methods

  }, {
    key: "loggedIn",
    value: function () {
      var _loggedIn = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.authToken != undefined);

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function loggedIn() {
        return _loggedIn.apply(this, arguments);
      };
    }()
  }, {
    key: "authorized",
    value: function () {
      var _authorized = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6() {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.authToken) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return", false);

              case 2:
                endpoint = '/rest-auth/token-verify/';
                _context6.next = 5;
                return this._post(endpoint, {
                  'token': this.authToken
                });

              case 5:
                res = _context6.sent;

                if (!(res.token != undefined)) {
                  _context6.next = 10;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_2__cookie__["c" /* setCookie */])(this.jwtCookieName, res.token, {
                  expires: new Date().setFullYear(new Date().getFullYear() + 1)
                });
                this.authToken = res.token;
                return _context6.abrupt("return", true);

              case 10:
                return _context6.abrupt("return", false);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function authorized() {
        return _authorized.apply(this, arguments);
      };
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(user, pass) {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // Authenticates a user with the REST API and returns the response
                // A successful login will have the response key "key" which is the JWT
                endpoint = '/rest-auth/login/';
                _context7.next = 3;
                return this._post(endpoint, {
                  'username': user,
                  'password': pass
                });

              case 3:
                res = _context7.sent;

                if (res.token) {
                  Object(__WEBPACK_IMPORTED_MODULE_2__cookie__["c" /* setCookie */])(this.jwtCookieName, res.token, {
                    expires: new Date().setFullYear(new Date().getFullYear() + 1)
                  });
                  this.authToken = res.token;
                }

                return _context7.abrupt("return", res);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function login(_x8, _x9) {
        return _login.apply(this, arguments);
      };
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8() {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // Logout the current active user
                endpoint = '/rest-auth/logout/';
                _context8.next = 3;
                return this._post(endpoint);

              case 3:
                res = _context8.sent;
                Object(__WEBPACK_IMPORTED_MODULE_2__cookie__["b" /* removeCookie */])(this.jwtCookieName);
                return _context8.abrupt("return", res);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function logout() {
        return _logout.apply(this, arguments);
      };
    }()
  }, {
    key: "profile",
    value: function () {
      var _profile = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee9() {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                // get's user profile of the current user
                endpoint = '/profile/';
                _context9.next = 3;
                return this._get(endpoint);

              case 3:
                res = _context9.sent;
                return _context9.abrupt("return", res);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function profile() {
        return _profile.apply(this, arguments);
      };
    }()
  }, {
    key: "homepage",
    value: function () {
      var _homepage = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee10() {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                // Gets the page "Home" from the CMS API
                endpoint = '/content/pages/4/';
                _context10.next = 3;
                return this._get(endpoint);

              case 3:
                res = _context10.sent;
                return _context10.abrupt("return", res);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function homepage() {
        return _homepage.apply(this, arguments);
      };
    }()
  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee11(q) {
        var endpoint, data, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                // Search Players, Coaches and Organisations
                endpoint = '/search/';
                data = {};

                if (q) {
                  data['q'] = q;
                }

                _context11.next = 5;
                return this._get(endpoint, data);

              case 5:
                res = _context11.sent;
                return _context11.abrupt("return", res);

              case 7:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function search(_x10) {
        return _search.apply(this, arguments);
      };
    }()
  }, {
    key: "me",
    value: function () {
      var _me = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee12() {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                // Get my profile
                endpoint = '/players/me/';
                _context12.next = 3;
                return this._get(endpoint);

              case 3:
                res = _context12.sent;
                return _context12.abrupt("return", res);

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function me() {
        return _me.apply(this, arguments);
      };
    }()
  }, {
    key: "player",
    value: function () {
      var _player = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee13(slug) {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                // Get details of a given player by slug
                endpoint = '/players/' + slug;
                _context13.next = 3;
                return this._get(endpoint);

              case 3:
                res = _context13.sent;
                return _context13.abrupt("return", res);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function player(_x11) {
        return _player.apply(this, arguments);
      };
    }()
  }, {
    key: "playerCareer",
    value: function () {
      var _playerCareer = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee14(slug) {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                // Given a player slug, retrieve their career items
                endpoint = '/players/' + slug + '/career/';
                _context14.next = 3;
                return this._get(endpoint);

              case 3:
                res = _context14.sent;
                return _context14.abrupt("return", res);

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function playerCareer(_x12) {
        return _playerCareer.apply(this, arguments);
      };
    }()
  }, {
    key: "playerMedia",
    value: function () {
      var _playerMedia = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee15(slug) {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                // Given a player slug, retrieve their media items
                endpoint = '/players/' + slug + '/media/';
                _context15.next = 3;
                return this._get(endpoint);

              case 3:
                res = _context15.sent;
                return _context15.abrupt("return", res);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function playerMedia(_x13) {
        return _playerMedia.apply(this, arguments);
      };
    }()
  }, {
    key: "players",
    value: function () {
      var _players = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee16(q) {
        var endpoint, data, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                // Given search term q - search these players
                endpoint = '/players/';
                data = {};

                if (q) {
                  data['q'] = q;
                }

                _context16.next = 5;
                return this._get(endpoint, data);

              case 5:
                res = _context16.sent;
                return _context16.abrupt("return", res);

              case 7:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function players(_x14) {
        return _players.apply(this, arguments);
      };
    }()
  }, {
    key: "sports",
    value: function () {
      var _sports = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee17(q) {
        var endpoint, data, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                // Given search term q - query sports
                endpoint = '/sports/';
                data = {};

                if (q) {
                  data['q'] = q;
                }

                _context17.next = 5;
                return this._get(endpoint, data);

              case 5:
                res = _context17.sent;
                return _context17.abrupt("return", res);

              case 7:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function sports(_x15) {
        return _sports.apply(this, arguments);
      };
    }()
  }, {
    key: "sport",
    value: function () {
      var _sport = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee18(slug, params) {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                // Given a sport slug - this will pull it's detailed data
                endpoint = '/sports/' + slug + '/';
                _context18.next = 3;
                return this._get(endpoint, params);

              case 3:
                res = _context18.sent;
                return _context18.abrupt("return", res);

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function sport(_x16, _x17) {
        return _sport.apply(this, arguments);
      };
    }()
  }, {
    key: "registerOptions",
    value: function () {
      var _registerOptions = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee19() {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                // Gets the options on the registration form. Used to provide enum field options for select boxes
                endpoint = '/rest-auth/registration/';
                _context19.next = 3;
                return this._options(endpoint);

              case 3:
                res = _context19.sent;
                return _context19.abrupt("return", res);

              case 5:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      return function registerOptions() {
        return _registerOptions.apply(this, arguments);
      };
    }()
  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee20(formData) {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                // Register the user
                endpoint = '/rest-auth/registration/';
                _context20.next = 3;
                return this._post(endpoint, formData);

              case 3:
                res = _context20.sent;
                return _context20.abrupt("return", rest);

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      return function register(_x18) {
        return _register.apply(this, arguments);
      };
    }()
  }, {
    key: "follow",
    value: function () {
      var _follow = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee21(targetUserId) {
        var endpoint, data, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                endpoint = '/following/';
                data = {
                  'target': targetUserId
                };
                _context21.next = 4;
                return this._post(endpoint, data);

              case 4:
                res = _context21.sent;

              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      return function follow(_x19) {
        return _follow.apply(this, arguments);
      };
    }()
  }, {
    key: "feed",
    value: function () {
      var _feed = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee22() {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                endpoint = '/feed/';
                _context22.next = 3;
                return this._get(endpoint);

              case 3:
                res = _context22.sent;
                return _context22.abrupt("return", res);

              case 5:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      return function feed() {
        return _feed.apply(this, arguments);
      };
    }()
  }, {
    key: "cheer",
    value: function () {
      var _cheer = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee23(postId) {
        var endpoint, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                endpoint = '/cheer/';
                data = {
                  'post': postId
                };
                _context23.next = 4;
                return this._post(endpoint);

              case 4:
                res = _context23.sent;

              case 5:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      return function cheer(_x20) {
        return _cheer.apply(this, arguments);
      };
    }()
  }]);

  return SportscardAPI;
}();

/***/ }),

/***/ "./lib/with-redux-store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("./store.js");

var _jsxFileName = "E:\\Work\\sportscard-frontend-master\\lib\\with-redux-store.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__store__["b" /* initializeStore */])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(__WEBPACK_IMPORTED_MODULE_2__store__["b" /* initializeStore */])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["a"] = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithRedux, _React$Component);

      _createClass(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps.call(App, appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      function AppWithRedux(props) {
        var _this;

        _classCallCheck(this, AppWithRedux);

        _this = _possibleConstructorReturn(this, (AppWithRedux.__proto__ || Object.getPrototypeOf(AppWithRedux)).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      _createClass(AppWithRedux, [{
        key: "render",
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }));
        }
      }]);

      return AppWithRedux;
    }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component)
  );
});

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_with_redux_store__ = __webpack_require__("./lib/with-redux-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_sportscard_api__ = __webpack_require__("./lib/sportscard-api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_global_Nav__ = __webpack_require__("./components/global/Nav.js");

var _jsxFileName = "E:\\Work\\sportscard-frontend-master\\pages\\_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var SportscardApp =
/*#__PURE__*/
function (_App) {
  _inherits(SportscardApp, _App);

  function SportscardApp() {
    _classCallCheck(this, SportscardApp);

    return _possibleConstructorReturn(this, (SportscardApp.__proto__ || Object.getPrototypeOf(SportscardApp)).apply(this, arguments));
  }

  _createClass(SportscardApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          reduxStore = _props.reduxStore;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"], {
        store: reduxStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_global_Nav__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps, SC;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {}; // Add a sportscard context aware API object into redux

                SC = new __WEBPACK_IMPORTED_MODULE_5__lib_sportscard_api__["a" /* SportscardAPI */](ctx);
                ctx.reduxStore.dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_6__store__["a" /* actionTypes */].SETAPI,
                  obj: SC
                });

                if (!Component.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return Component.getInitialProps(ctx);

              case 7:
                pageProps = _context.sent;

              case 8:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return SportscardApp;
}(__WEBPACK_IMPORTED_MODULE_1_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__lib_with_redux_store__["a" /* default */])(SportscardApp));

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

// Defines routes extra to those handled by the next.js
// file structure (pages/<page>.js)
var routes = __webpack_require__("next-routes");

module.exports = routes() // Name   Page      Pattern
.add('player-details', pattern = '/player/:slug', page = 'player').add('player-edit', pattern = '/:me(me)/', page = 'player').add('player-tab', pattern = '/player/:slug/:tab', page = 'player').add('search', pattern = 'search/:q', page = 'search');

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* unused harmony export loginAction */
/* unused harmony export setSportsCardAPI */
/* unused harmony export setProfile */
/* unused harmony export reducer */
/* harmony export (immutable) */ __webpack_exports__["b"] = initializeStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
// Redux Store.
// Primary use at this stage is to store the authenticated state and a global (context aware)
// SportscardAPI object



var initialState = {
  authed: false,
  jwt: '',
  SportsCardAPI: false,
  profile: null
};
var actionTypes = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
  SETAPI: 'SETAPI',
  SETPROFILE: 'SETPROFILE'
};
var loginAction = function loginAction(jwt) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.LOGIN,
      authed: true,
      jwt: jwt
    });
  };
};
var setSportsCardAPI = function setSportsCardAPI(obj) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SETAPI,
      obj: obj
    });
  };
};
var setProfile = function setProfile(prof) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SETPROFILE,
      prof: prof
    });
  };
}; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.LOGOUT:
      return Object.assign({}, state, initialState);

    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        authed: action.authed,
        jwt: action.jwt
      });

    case actionTypes.SETAPI:
      return Object.assign({}, state, {
        SportsCardAPI: action.obj,
        jwt: action.obj.authToken,
        authed: action.obj.authToken != undefined
      });

    case actionTypes.SETPROFILE:
      return Object.assign({}, state, {
        profile: action.profile
      });

    default:
      return state;
  }
}; // ACTIONS

function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
}

/***/ }),

/***/ "./styles/variables.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* unused harmony export socialColors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mediaQueries; });
// global colors
var colors = {
  blue: '#1F3656',
  blueLight: '#314C71',
  green: '#558D28',
  black: '#222222',
  greyMedium: '#444444',
  greyLight: '#EFEFEF',
  white: '#FEFEFE',
  lightgreen: '#79D232',
  darkgreen: '#589229',
  darkorange: '#FF5C29',
  alphaBlue: '#1F365688'
};
var strings = {
  become_fan: 'Become a fan...',
  find_best_players_teams: 'Find the best players and teams in Australia' // social colors

};
var socialColors = {
  facebook: '#3b5998',
  twitter: '#00aced',
  googlePlus: '#dd4b39',
  youtube: '#bb0000',
  linkedin: '#007bb6',
  pinterest: '#cb2027',
  instagram: '#517fa4' // media queries

};
var mediaQueries = {
  smallOnly: "(max-width: 639px)",
  mediumUp: "(min-width: 640px)",
  mediumOnly: "(min-width: 640px) and (max-width: 1023px)",
  mediumDown: "(max-width: 1023px)",
  largeUp: "(min-width: 1024px)",
  largeOnly: "(min-width: 1024px) and (max-width: 1439px)",
  largeDown: "(max-width: 1439px)",
  xlargeUp: "(min-width: 1440px)",
  xlargeOnly: "(min-width: 1441px) and (max-width: 1919px)",
  xlargeDown: "(min-width: 1919px)",
  xxlargeUp: "(min-width: 1920px)",
  xxlargeOnly: "(min-width: 1920px) and (max-width: 9999999px)",
  xxlargeDown: "(max-width: 9999999px)"
};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map