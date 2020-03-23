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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/global/Card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_variables__ = __webpack_require__("./styles/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_player__ = __webpack_require__("react-player");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_player__);
var _jsxFileName = "E:\\Work\\sportscard-frontend-master\\components\\global\\Card.js";






var Card = function Card(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4119621196", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].greyLight, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white]]]) + " " + 'card shadow'
  }, props.headerTitle ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4119621196", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].greyLight, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white]]]) + " " + ("card-header " + props.headerClass || "")
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4119621196", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].greyLight, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white]]])
  }, props.headerTitle, props.headerInfo ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4119621196", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].greyLight, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white]]])
  }, props.headerInfo) : null), props.linkName && props.linkTo ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: props.linkTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.linkName ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4119621196", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].greyLight, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white]]])
  }, props.linkName) : null) : null) : null, props.video ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_player___default.a, {
    url: props.video,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }) : null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4119621196", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].greyLight, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white]]]) + " " + "card-video"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4119621196", [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].greyLight, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white]]]) + " " + ('card-inner padding-' + props.padding || "")
  }, props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4119621196",
    css: ".card.__jsx-style-dynamic-selector{border-radius:5px;background:".concat(__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, ";overflow:hidden;margin-bottom:1.5rem;}.card-header.__jsx-style-dynamic-selector{background:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, ";padding:0.25rem 1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card-header.white.__jsx-style-dynamic-selector{background:none;padding:0.5rem 1rem;border-bottom:solid 1px ").concat(__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].greyLight, ";}.card-header.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{font-family:'proxima-nova',sans-serif;font-weight:700;font-style:italic;font-size:1rem;color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, ";display:block;margin:0;}.card-header.white.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, ";}.card-header.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-family:'open-sans',sans-serif;font-weight:300;font-style:italic;margin-left:0.25rem;display:inline-block;}.card-header.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-family:'proxima-nova',sans-serif;font-weight:700;font-style:italic;color:").concat(__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, ";font-size:0.75rem;display:block;margin:0;text-align:right;}.padding-small.__jsx-style-dynamic-selector{padding:0.75rem;}.padding-medium.__jsx-style-dynamic-selector{padding:1rem;}.padding-large.__jsx-style-dynamic-selector{padding:1.25rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGdsb2JhbFxcQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm9CLEFBRytCLEFBTXNCLEFBT3hCLEFBS3VCLEFBU0osQUFHQyxBQU9HLEFBVXZCLEFBR0gsQUFHRyxhQUZwQixHQXJDd0IsQUFrQ3hCLEFBTUEsRUFyRDRDLGlCQTJCNUMsQUFHb0IsQ0FoQnFDLEVBSXJDLEFBbUJBLEVBL0JLLFdBeUJILEdBWkEsQUFtQkEsSUFyQ0YsR0FNSCxRQXlCTyxHQVpMLEFBbUJvQixFQXJDZCxhQW1CYyxFQU52QyxBQWtCeUIsTUE5QnpCLFlBcUNzQixHQU50QixZQVprQixHQW1CQSxVQWpDZ0IsQ0FlckIsR0FtQkEsTUFsQmIsR0FtQnFCLGlCQUNyQixxRkFuQ3VCLDZGQUN2QiIsImZpbGUiOiJjb21wb25lbnRzXFxnbG9iYWxcXENhcmQuanMiLCJzb3VyY2VSb290IjoiRTpcXFdvcmtcXHNwb3J0c2NhcmQtZnJvbnRlbmQtbWFzdGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb2xvcnN9IGZyb20gJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVmlkZW8gZnJvbSAncmVhY3QtcGxheWVyJ1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgc2hhZG93Jz5cbiAgICAgICAgeyBwcm9wcy5oZWFkZXJUaXRsZSA/IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYXJkLWhlYWRlciBcIiArIHByb3BzLmhlYWRlckNsYXNzfT5cbiAgICAgICAgICAgIDxoMj57IHByb3BzLmhlYWRlclRpdGxlIH17IHByb3BzLmhlYWRlckluZm8gPzxzcGFuPntwcm9wcy5oZWFkZXJJbmZvfTwvc3Bhbj46IG51bGwgfTwvaDI+XG4gICAgICAgICAgICB7IHByb3BzLmxpbmtOYW1lICYmIHByb3BzLmxpbmtUbyA/XG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5saW5rVG99PlxuICAgICAgICAgICAgICAgIHsgcHJvcHMubGlua05hbWUgP1xuICAgICAgICAgICAgICAgIDxhPntwcm9wcy5saW5rTmFtZX08L2E+XG4gICAgICAgICAgICAgICAgOiBudWxsIH1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA6IG51bGwgfVxuICAgICAgICB7IHByb3BzLnZpZGVvID8gXG4gICAgICAgICAgICA8VmlkZW8gdXJsPXtwcm9wcy52aWRlb30gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgOiBudWxsIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXZpZGVvXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NhcmQtaW5uZXIgcGFkZGluZy0nICsgcHJvcHMucGFkZGluZ30+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgIHsvKiBzdHlsZXMgKi99XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JlZW59O1xuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtaGVhZGVyLndoaXRlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAke2NvbG9ycy5ncmV5TGlnaHR9O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWhlYWRlciBoMiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWhlYWRlci53aGl0ZSBoMiB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2t9O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWhlYWRlciBoMiBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1oZWFkZXIgYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3Byb3hpbWEtbm92YScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZGRpbmctc21hbGwge1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucGFkZGluZy1tZWRpdW0ge1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucGFkZGluZy1sYXJnZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZCJdfQ== */\n/*@ sourceURL=components\\global\\Card.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].green, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].greyLight, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].black, __WEBPACK_IMPORTED_MODULE_2__styles_variables__["a" /* colors */].white]
  }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Card);

/***/ }),

/***/ "./components/global/Meta.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_variables__ = __webpack_require__("./styles/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss_global_scss__ = __webpack_require__("./styles/scss/global.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss_global_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_scss_global_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);
var _jsxFileName = "E:\\Work\\sportscard-frontend-master\\components\\global\\Meta.js";








__WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeStart = function (url) {
  console.log("Loading: ".concat(url));
  __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/gin2nns.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })));
});

/***/ }),

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

/***/ "./layouts/Main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_global_Nav__ = __webpack_require__("./components/global/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_global_Meta__ = __webpack_require__("./components/global/Meta.js");
var _jsxFileName = "E:\\Work\\sportscard-frontend-master\\layouts\\Main.js";




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "div_parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-2617940141"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_global_Meta__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    id: "main",
    role: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2617940141"
  }, children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2617940141",
    css: "#div_parent.jsx-2617940141{position:absolute,;}.jsx-2617940141,#main.jsx-2617940141{height:100%;left:0;right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dCLEFBSUksQUFFZSxZQUNMLE9BSFQsQUFJVSxRQUNWIiwiZmlsZSI6ImxheW91dHNcXE1haW4uanMiLCJzb3VyY2VSb290IjoiRTpcXFdvcmtcXHNwb3J0c2NhcmQtZnJvbnRlbmQtbWFzdGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL2dsb2JhbC9OYXYnXHJcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvZ2xvYmFsL01ldGEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdiBpZD1cImRpdl9wYXJlbnRcIj5cclxuICAgIDxNZXRhIC8+XHJcbiAgICA8c2VjdGlvbiBpZD1cIm1haW5cIiByb2xlPVwibWFpblwiPlxyXG4gICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAjZGl2X3BhcmVudCB7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlLFxyXG4gICAgfSxcclxuICAgICNtYWluIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKSJdfQ== */\n/*@ sourceURL=layouts\\Main.js */"
  }));
});

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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_Main__ = __webpack_require__("./layouts/Main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_sportscard_api__ = __webpack_require__("./lib/sportscard-api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_variables__ = __webpack_require__("./styles/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_global_SearchBox__ = __webpack_require__("./components/global/SearchBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_global_Card__ = __webpack_require__("./components/global/Card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_responsive__ = __webpack_require__("react-responsive");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_responsive__);

var _jsxFileName = "E:\\Work\\sportscard-frontend-master\\pages\\index.js";



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__layouts_Main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.hasOwnProperty('homePageData') == false ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, " Loading homePageData ") : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "main"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "div_section1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: {
      backgroundImage: 'url(' + props.homePageData.background_image.url + ')'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "img1"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    id: "div_search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + 'text1'
  }, " ", __WEBPACK_IMPORTED_MODULE_5__styles_variables__["c" /* strings */].become_fan), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + 'text2'
  }, " ", __WEBPACK_IMPORTED_MODULE_5__styles_variables__["c" /* strings */].find_best_players_teams), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_global_SearchBox__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "chevron gradient-green mar-top-70"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "desc"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "first"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "title"
  }, props.homePageData.tagline_blocks[0].value.heading), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "content"
  }, props.homePageData.tagline_blocks[0].value.text)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "sec"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "title"
  }, props.homePageData.tagline_blocks[1].value.heading), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "content"
  }, props.homePageData.tagline_blocks[1].value.text)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "third"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "title"
  }, props.homePageData.tagline_blocks[2].value.heading), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "content"
  }, props.homePageData.tagline_blocks[2].value.text))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "btn"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, props.homePageData.cta_text))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "chevron gradient-green mar-top-70"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "sub gradient-gray"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "text1"
  }, props.homePageData.subheading), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "text2"
  }, props.homePageData.subheading_text), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "video-clip"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: "../static/resources/play-button@2x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "chevron gradient-blue chevron-blue"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "feature"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "title"
  }, " ", props.homePageData.features_subheading, " "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "items"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + ""
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, props.homePageData.features_blocks[0].value.heading), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + ""
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, props.homePageData.features_blocks[1].value.heading), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "item-content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: {
      backgroundImage: 'url(' + props.homePageData.features_blocks[0].value.image.url + ')'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "img"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, props.homePageData.features_blocks[0].value.description))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "gradient-blue"
  }, props.homePageData.features_cta_text)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "chevron gradient-green mar-top-70"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "testimonials gradient-gray"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + 'title'
  }, props.homePageData.testimonials[0].type), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + 'content'
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + 'heading'
  }, props.homePageData.testimonials[0].value.heading), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + 'text'
  }, props.homePageData.testimonials[0].value.description)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "arrow"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: {
      backgroundImage: 'url(' + props.homePageData.testimonials[0].value.image.url + ')'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "img"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "arrow-left"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "arrow-right"
  }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "chevron gradient-green mar-top-70"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "partners"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "title"
  }, props.homePageData.partners_subheading), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "content"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: {
      backgroundImage: 'url(' + props.homePageData.partners[0].value.image.url + ')'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "img"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "desc"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "heading"
  }, props.homePageData.partners[0].value.heading), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "text"
  }, props.homePageData.partners[0].value.description))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "items"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: {
      backgroundImage: 'url(' + props.homePageData.partners[0].value.image.url + ')'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "img"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: {
      backgroundImage: 'url(' + props.homePageData.partners[1].value.image.url + ')'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "img"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: {
      backgroundImage: 'url(' + props.homePageData.partners[2].value.image.url + ')'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "img"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "arrow-left"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "arrow-right"
  }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "chevron gradient-green mar-top-70"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "register gradient-blue"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "title"
  }, props.homePageData.features_cta_text), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "subtitle"
  }, "If you want to know more about our platform, leave your details below and we will be in touch"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "input-group"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, "name"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, "email address"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "input-group"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, "phone number"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, "sporting code"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("input", {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "msg"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, "message"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("textarea", {
    rows: "4",
    cols: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "gradient-green"
  }, "enquire   now")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "chevron gradient-green mar-top-70"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "footer gradient-gray"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "link"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, "terms."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, "privacy")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "company-name"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, "\xA9 Sports Card 2018", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }), "Website by TechEquipt")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]]) + " " + "social-links"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: "../static/resources/icon-facebook@2x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: "../static/resources/icon-twitter@2x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: "../static/resources/icon-linkedin@2x.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    className: __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a.dynamic([["3088227798", [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]]])
  }))))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "3088227798",
    css: "@media ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, "{#div_search.__jsx-style-dynamic-selector{position:absolute;width:35%;height:130px;top:280px;}#div_section1.__jsx-style-dynamic-selector>.img1.__jsx-style-dynamic-selector{height:700px;background-size:100% 700px;-webkit-clip-path:polygon(52% 82%,100% 0,100% 16%,52% 100%,0 15%,0 0);-webkit-clip-path:polygon(0 0,100% 0,100% 90%,50% 100%,0 90%,0 0);clip-path:polygon(0 0,100% 0,100% 90%,50% 100%,0 90%,0 0);}#div_section1.__jsx-style-dynamic-selector>.chevron.__jsx-style-dynamic-selector{height:100px;-webkit-clip-path:polygon(52% 82%,100% 0,100% 16%,52% 100%,0 15%,0 0);-webkit-clip-path:polygon(50% 70%,100% 0,100% 25%,50% 95%,0 25%,0 0);clip-path:polygon(50% 70%,100% 0,100% 25%,50% 95%,0 25%,0 0);}#div_section1.__jsx-style-dynamic-selector>.desc.__jsx-style-dynamic-selector{height:400px;margin-top:-75px;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 17%,100% 0,100% 83%,50% 100%,0 83%,0 0);clip-path:polygon(50% 17%,100% 0,100% 83%,50% 100%,0 83%,0 0);}div.desc.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:inline-block;width:30%;top:0px;vertical-align:top;margin-left:3%;}div.desc.__jsx-style-dynamic-selector>.btn.__jsx-style-dynamic-selector{width:25%;}div.desc.__jsx-style-dynamic-selector>.btn.__jsx-style-dynamic-selector>button.__jsx-style-dynamic-selector{font-size:16px;}#div_section1.__jsx-style-dynamic-selector>.sub.__jsx-style-dynamic-selector{height:890px;margin-top:-76px;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 8%,100% 0,100% 92.5%,50% 100%,0 92.5%,0 0);clip-path:polygon(50% 8%,100% 0,100% 92.5%,50% 100%,0 92.5%,0 0);}#div_section1.__jsx-style-dynamic-selector>.sub.__jsx-style-dynamic-selector>p.__jsx-style-dynamic-selector{margin:0px;padding:0px;}div.sub.__jsx-style-dynamic-selector>.video-clip.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{margin-top:182px;margin-left:-27px;}.chevron-blue.__jsx-style-dynamic-selector{margin-top:-71px;}#div_section1.__jsx-style-dynamic-selector>.feature.__jsx-style-dynamic-selector{height:700px;margin-top:-75px;background-color:#e1e1e1;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 10%,100% 0,100% 90%,50% 100%,0 90%,0 0);clip-path:polygon(50% 10%,100% 0,100% 90%,50% 100%,0 90%,0 0);}#div_section1.__jsx-style-dynamic-selector>.testimonials.__jsx-style-dynamic-selector{height:500px;margin-top:-75px;background-color:#e1e1e1;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 14%,100% 0,100% 86%,50% 100%,0 86%,0 0);clip-path:polygon(50% 14%,100% 0,100% 86%,50% 100%,0 86%,0 0);}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector{height:700px;margin-top:-78px;background-color:#e1e1e1;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 10%,100% 0,100% 90%,50% 100%,0 90%,0 0);clip-path:polygon(50% 10%,100% 0,100% 90%,50% 100%,0 90%,0 0);}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector{height:700px;margin-top:-78px;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 10%,100% 0,100% 90%,50% 100%,0 90%,0 0);clip-path:polygon(50% 10%,100% 0,100% 90%,50% 100%,0 90%,0 0);}#div_section1.__jsx-style-dynamic-selector>.footer.__jsx-style-dynamic-selector{height:120px;margin-top:-78px;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 60%,100% 0,100% 100%,50% 100%,0 100%,0 0);clip-path:polygon(50% 60%,100% 0,100% 100%,50% 100%,0 100%,0 0);}}@media ").concat(__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, "{#div_search.__jsx-style-dynamic-selector{width:75%;height:120px;top:220px;}.__jsx-style-dynamic-selector,#div_search.__jsx-style-dynamic-selector>.text1.__jsx-style-dynamic-selector{font-size:20px;}.__jsx-style-dynamic-selector,#div_search.__jsx-style-dynamic-selector>.text2.__jsx-style-dynamic-selector{font-size:10px;}#div_section1.__jsx-style-dynamic-selector>.img1.__jsx-style-dynamic-selector{height:400px;background-size:100% 400px;-webkit-clip-path:polygon(52% 82%,100% 0,100% 16%,52% 100%,0 15%,0 0);-webkit-clip-path:polygon(0 0,100% 0,100% 90%,50% 100%,0 90%,0 0);clip-path:polygon(0 0,100% 0,100% 90%,50% 100%,0 90%,0 0);}div.chevron.__jsx-style-dynamic-selector{height:80px;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 50%,100% 0,100% 30%,50% 80%,0 30%,0 0);clip-path:polygon(50% 50%,100% 0,100% 30%,50% 80%,0 30%,0 0);}#div_section1.__jsx-style-dynamic-selector>.desc.__jsx-style-dynamic-selector{height:800px;margin-top:-56px;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 5%,100% 0,100% 95%,50% 100%,0 95%,0 0);clip-path:polygon(50% 5%,100% 0,100% 95%,50% 100%,0 95%,0 0);}div.desc.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(2),div.desc.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(3){margin-top:70px;}div.desc.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(3){margin-bottom:50px;}div.desc.__jsx-style-dynamic-selector>.btn.__jsx-style-dynamic-selector{width:70%;}div.desc.__jsx-style-dynamic-selector>.btn.__jsx-style-dynamic-selector>button.__jsx-style-dynamic-selector{font-size:16px;}#div_section1.__jsx-style-dynamic-selector>.sub.__jsx-style-dynamic-selector{height:690px;margin-top:-56px;-webkit-clip-path:polygon(50% 20%,100% 0,100% 70%,50% 70%,0 100%,0 0);-webkit-clip-path:polygon(50% 5.5%,100% 0,100% 94.5%,50% 100%,0 94.5%,0 0);clip-path:polygon(50% 5.5%,100% 0,100% 94.5%,50% 100%,0 94.5%,0 0);}div.sub.__jsx-style-dynamic-selector>.video-clip.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{margin-top:58px;margin-left:-27px;}.chevron-blue.__jsx-style-dynamic-selector{margin-top:-56px;}}div.main.__jsx-style-dynamic-selector{margin-top:0px;}#div_section1.__jsx-style-dynamic-selector>.img1.__jsx-style-dynamic-selector{background-repeat:no-repeat;width:100%;margin-top:0;z-index:120;}#div_search.__jsx-style-dynamic-selector{position:absolute;left:0;right:0;background-color:").concat(__WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue, ";z-index:100;text-align:center;margin:0 auto;}#div_search.__jsx-style-dynamic-selector>.text1.__jsx-style-dynamic-selector{font-size:30px;font-style:italic;font-weight:bold;padding-top:0px;margin:0px;}#div_search.__jsx-style-dynamic-selector>.text2.__jsx-style-dynamic-selector{font-size:12px;font-style:normal;font-weight:normal;padding-top:0px;margin-top:0px;margin-bottom:10px;}#div_section1.__jsx-style-dynamic-selector{position:static;margin:0;padding:0;}p.__jsx-style-dynamic-selector{color:white;margin-top:3px;}#div_section1.__jsx-style-dynamic-selector>.chevron.__jsx-style-dynamic-selector{width:100%;box-shadow:10px 10px;z-index:119;}#div_section1.__jsx-style-dynamic-selector>.desc.__jsx-style-dynamic-selector{background-image:linear-gradient(to right,#37609a,#1e3554);width:100%;z-index:118;text-align:center;padding-top:110px;}div.desc.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector{margin:0 auto;width:70%;}div.desc.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>p.title.__jsx-style-dynamic-selector{font-size:36px;font-style:italic;line-height:0px;text-align:left;margin-bottom:30px;}div.desc.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>p.content.__jsx-style-dynamic-selector{color:#ddd;text-align:left;font-size:16px;}div.desc.__jsx-style-dynamic-selector>.btn.__jsx-style-dynamic-selector>button.__jsx-style-dynamic-selector{color:white;font-weight:bold;background-image:linear-gradient(to right,#8dc051,#71a73c);border:none;height:34px;width:100%;box-shadow:0px 1px 5px #333;}#div_section1.__jsx-style-dynamic-selector>.sub.__jsx-style-dynamic-selector{width:100%;z-index:116;padding-top:120px;text-align:center;padding-left:15%;padding-right:15%;}div.sub.__jsx-style-dynamic-selector>.text1.__jsx-style-dynamic-selector{color:white;font-weight:bold;font-size:36px;font-style:italic;margin-bottom:15px !important;}div.sub.__jsx-style-dynamic-selector>.text2.__jsx-style-dynamic-selector{font-size:14px;font-style:italic;}div.sub.__jsx-style-dynamic-selector>.video-clip.__jsx-style-dynamic-selector{background-image:url('../static/images/sub-img.png');background-size:100%;background-repeat:no-repeat;width:100%;height:440px;margin-top:40px;}div.sub.__jsx-style-dynamic-selector>.video-clip.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{width:60px;height:60px;z-index:100;position:absolute;cursor:pointer;}#div_section1.__jsx-style-dynamic-selector>.feature.__jsx-style-dynamic-selector{text-align:center;padding-top:110px;}.feature.__jsx-style-dynamic-selector>.title.__jsx-style-dynamic-selector{color:#558d28;font-size:36px;font-style:italic;font-weight:bold;}.feature.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector{width:100%;}.feature.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:inline-block;width:130px;color:black;font-weight:bold;vertical-align:top;margin-left:30px;}.feature.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>p.__jsx-style-dynamic-selector{margin-bottom:0;padding-bottom:0;}.feature.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(2)>p.__jsx-style-dynamic-selector{color:black;}.feature.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-child>div.__jsx-style-dynamic-selector{margin-top:4px;}.feature.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-child>p.__jsx-style-dynamic-selector{color:#558d28;border-bottom:3px solid;}.feature.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-child>div.__jsx-style-dynamic-selector:after{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #558d28;content:'';}.feature.__jsx-style-dynamic-selector>.item-content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;}.feature.__jsx-style-dynamic-selector>.item-content.__jsx-style-dynamic-selector>.img.__jsx-style-dynamic-selector{height:300px;width:400px;background-size:400px 300px;margin-right:40px;}.feature.__jsx-style-dynamic-selector>.item-content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(2){width:40%;text-align:left;}.feature.__jsx-style-dynamic-selector>.item-content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(2)>p.__jsx-style-dynamic-selector{color:black;}.feature.__jsx-style-dynamic-selector>button.__jsx-style-dynamic-selector{margin-top:40px;border:none;height:34px;width:250px;font-size:18px;color:white;font-weight:bold;}.testimonials.__jsx-style-dynamic-selector{text-align:center;padding-top:110px;}.testimonials.__jsx-style-dynamic-selector>.title.__jsx-style-dynamic-selector{font-size:34px;color:white;font-weight:bold;font-style:italic;margin-bottom:20px;}.testimonials.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;}.testimonials.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-child{width:50%;text-align:left;margin-right:30px;}.testimonials.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-child>p.__jsx-style-dynamic-selector:first-child{font-weight:bold;}.testimonials.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.arrow.__jsx-style-dynamic-selector{content:'';border-top:15px solid transparent;border-bottom:15px solid transparent;border-right:15px solid #1b3150;margin-top:85px;margin-left:1px;}.testimonials.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.img.__jsx-style-dynamic-selector{width:200px;height:200px;border-radius:50%;border:5px solid #1b3150;background-position:358px 0px;background-size:500px;margin-left:-1px;}.testimonials.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>.arrow-left.__jsx-style-dynamic-selector{background-image:url('../static/resources/arrow-left@2x.png');background-size:25px;width:25px;height:19px;position:absolute;left:calc(50% - 25% - 180px);margin-top:100px;}.testimonials.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>.arrow-right.__jsx-style-dynamic-selector{background-image:url('../static/resources/arrow-right@2x.png');background-size:25px;width:25px;height:19px;position:absolute;right:calc(50% - 25% - 180px);margin-top:100px;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector{padding-top:110px;text-align:center;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.title.__jsx-style-dynamic-selector{font-size:34px;color:#558d28;font-style:italic;font-weight:bold;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>.img.__jsx-style-dynamic-selector{background-size:180px;background-repeat:no-repeat;background-position:60px 30px;width:300px;height:200px;background-color:white;box-shadow:0px 2px 2px #999;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>.desc.__jsx-style-dynamic-selector{width:40%;margin-left:20px;text-align:left;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>.desc.__jsx-style-dynamic-selector>p.__jsx-style-dynamic-selector{color:black;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>.desc.__jsx-style-dynamic-selector>p.__jsx-style-dynamic-selector:first-child{font-size:20px;font-weight:bold;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector>.desc.__jsx-style-dynamic-selector>p.__jsx-style-dynamic-selector:nth-child(2){line-height:18px;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(1),#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(2),#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(3){background-size:160px;background-repeat:no-repeat;background-position:40px 30px;width:250px;height:180px;background-color:white;box-shadow:0px 2px 2px #999;display:inline-block;vertical-align:top;margin-left:20px;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.arrow-left.__jsx-style-dynamic-selector{background-image:url('../static/resources/arrow-left@2x.png');background-size:25px;width:25px;height:19px;position:absolute;left:calc(50% - 25% - 160px);margin-top:-100px;}#div_section1.__jsx-style-dynamic-selector>.partners.__jsx-style-dynamic-selector>.items.__jsx-style-dynamic-selector>div.arrow-right.__jsx-style-dynamic-selector{background-image:url('../static/resources/arrow-right@2x.png');background-size:25px;width:25px;height:19px;position:absolute;right:calc(50% - 25% - 160px);margin-top:-100px;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector{padding-top:110px;text-align:center;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>.title.__jsx-style-dynamic-selector{font-size:34px;font-style:italic;font-weight:bold;margin-bottom:20px;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>.subtitle.__jsx-style-dynamic-selector{font-style:italic;width:400px;margin:0 auto;margin-bottom:20px;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>.input-group.__jsx-style-dynamic-selector{color:white;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>.input-group.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;text-align:left;margin-left:20px;width:250px;margin-bottom:10px;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>.input-group.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector{margin-bottom:3px;padding-bottom:0;font-size:12px;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>.input-group.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>input.__jsx-style-dynamic-selector{width:100%;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>.msg.__jsx-style-dynamic-selector{width:520px;margin:0 auto;text-align:left;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>.msg.__jsx-style-dynamic-selector>label.__jsx-style-dynamic-selector{margin-bottom:3px;padding-bottom:0;font-size:12px;color:white;margin-left:10px;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>.msg.__jsx-style-dynamic-selector>textarea.__jsx-style-dynamic-selector{width:100%;margin-left:10px;}#div_section1.__jsx-style-dynamic-selector>.register.__jsx-style-dynamic-selector>button.__jsx-style-dynamic-selector{border:none;width:150px;height:35px;margin-top:30px;font-weight:900px;color:white;font-size:20px;}#div_section1.__jsx-style-dynamic-selector>.footer.__jsx-style-dynamic-selector{padding-top:80px;}#div_section1.__jsx-style-dynamic-selector>.footer.__jsx-style-dynamic-selector>.link.__jsx-style-dynamic-selector{text-align:center;width:30%;margin:0 auto;}#div_section1.__jsx-style-dynamic-selector>.footer.__jsx-style-dynamic-selector>.link.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector{margin-right:10px;-webkit-text-decoration:none;text-decoration:none;font-style:italic;}#div_section1.__jsx-style-dynamic-selector>.footer.__jsx-style-dynamic-selector>.company-name.__jsx-style-dynamic-selector{float:right;position:absolute;right:20px;margin-top:-30px;}#div_section1.__jsx-style-dynamic-selector>.footer.__jsx-style-dynamic-selector>.company-name.__jsx-style-dynamic-selector>p.__jsx-style-dynamic-selector{text-align:right;font-size:12px;margin-bottom:0;padding-bottom:0;}.social-links.__jsx-style-dynamic-selector{margin-top:-30px;margin-left:30px;}.social-links.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{margin-right:10px;}.social-links.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector:first-child>img.__jsx-style-dynamic-selector{width:10px;}.social-links.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector:nth-child(2)>img.__jsx-style-dynamic-selector,.social-links.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector:nth-child(3)>img.__jsx-style-dynamic-selector{width:15px;}.mar-top-50.__jsx-style-dynamic-selector{margin-top:-50px;}.mar-top-70.__jsx-style-dynamic-selector{margin-top:-70px;}.mar-top-71.__jsx-style-dynamic-selector{margin-top:-72px;}.gradient-green.__jsx-style-dynamic-selector{background-image:linear-gradient(to right,#8dc051,#71a73c);}.gradient-blue.__jsx-style-dynamic-selector{background-image:linear-gradient(to right,#3a64a0,#1f3656);}.gradient-gray.__jsx-style-dynamic-selector{background-image:linear-gradient(to right,#5f5f5f,#2e2e2e);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySnNCLEFBSWtDLEFBTUosQUFNQSxBQUtBLEFBTVEsQUFPWCxBQUdLLEFBR0YsQUFNRixBQUlNLEFBSUEsQUFHSixBQU9BLEFBT0EsQUFPQSxBQU1BLEFBU0osQUFLTSxBQUdBLEFBR0YsQUFNRCxBQUtDLEFBT0csQUFHRyxBQUdULEFBR0ssQUFHRixBQU1HLEFBSUMsQUFLSixBQUdhLEFBTVgsQUFTRixBQU9BLEFBUUEsQUFLSixBQUlBLEFBS2tELEFBTy9DLEFBTUMsQUFPSixBQUtDLEFBVUQsQUFRQyxBQU9HLEFBSXNDLEFBUTFDLEFBT08sQUFJSixBQU1ILEFBR1UsQUFRTCxBQUlKLEFBR0csQUFHRCxBQUlOLEFBUWEsQUFJUixBQU1ILEFBSUUsQUFHSSxBQVNFLEFBSUgsQUFPTSxBQUlYLEFBS08sQUFHTixBQVFDLEFBU2tELEFBU0MsQUFTN0MsQUFJSCxBQU1NLEFBSUMsQUFTWixBQUtFLEFBR0csQUFJRSxBQUtLLEFBWXdDLEFBU0MsQUFTN0MsQUFJSCxBQU1HLEFBTU4sQUFHUyxBQVFILEFBS1AsQUFHQyxBQUtNLEFBT1AsQUFJQyxBQVNLLEFBR0MsQUFLQSxBQUtOLEFBTUssQUFNQSxBQUlDLEFBR1AsQUFJQSxBQU1NLEFBR0EsQUFHQSxBQUc0QyxBQUdBLEFBR0EsUUF0UnBELEVBMVFULEFBMkRjLEFBbUNkLEFBOExrQixBQStCRixBQWtFQyxDQWpYSCxBQWlKTyxBQXlCTCxBQWVKLEFBMkJBLEFBaUJkLEFBa0ZvQyxBQXlJcEMsQUFlbUIsQUE2Q25CLEFBSUEsQ0FoYytFLEFBNkUvRCxBQWtDRyxBQWtCQSxBQW1EbkIsQUFnQ0EsQUEyQ2UsQUF1RGYsQUEwREEsQUFtQmdCLEFBZ0JGLEFBc0JNLENBN2dCVyxBQU1nRCxBQUsxRCxBQW1CQSxBQWlCQSxBQU9BLEFBT0EsQUFPQSxBQU1BLEFBb0JVLEFBV1YsQUFtQkEsQUFrTFAsQ0E3R0YsQUFrRUssQUEyQlMsQ0FuUXhCLEFBNkRBLEFBR0EsQUE4QkEsQUFrQkYsQUFrQm9CLEFBT0EsQUFtQ0EsQUFxQ0EsQUErQ3BCLEFBNkNjLEFBMERFLEFBMkJHLEFBMkNDLENBeFZsQixBQWtCb0IsQUEwQ1osQUF3R1MsQUF1Q0wsQ0FuUlEsQUFJcEIsQUEwRkEsQUE2SmtDLEFBcURwQyxBQXlFQSxBQStGQSxBQW1CaUIsQUFNRSxBQWlCbkIsQUFHQSxBQUdBLENBdGpCYSxBQTBKTCxBQTJHWSxBQXFFQSxBQTJEckIsQUFxRXFCLEFBVU4sQUFpQkssQUFhQSxBQXVCUCxBQUtXLEFBcUJ2QixDQTFhRSxFQWxHWSxBQTJQQSxBQThCTyxBQXFDQSxBQXlEQSxBQStFQSxDQTNFUyxBQTBCQSxDQWpZNUIsQUErQ1csQUEwSU8sQUEyQk4sQ0F2RGQsQUFzVGMsQ0FuV0wsQUF3QkUsQUFrSW1CLEFBcURWLENBL0NwQixBQStCb0IsQUFvSkYsQ0F0VGxCLEFBNkJpQixBQTBIRSxBQTZFRCxDQTNaRixBQW1KSCxBQThLQyxBQXdMZCxBQWdCZ0IsQ0FoVCtDLEFBa0I5QyxBQThCRyxBQStIQSxDQXZYMkQsQUFtQkEsQUFpQmxELEFBT0EsQUFPQSxBQU9rRCxBQU1BLEFBK0JBLEFBbUJBLEFBa1YvRCxBQStESCxDQTVmRCxDQW9LRSxBQXdPZCxBQXNIa0IsQ0EvYmhCLEFBaUU4QyxBQVE3QixBQU9FLEFBbUNILEFBcUNsQixBQWdDYyxBQVFkLEFBb0xtQixDQXRVakIsQUF1WkYsQ0FqZkUsQUFxSUYsQUE0RW9CLEFBc09ILEFBYUEsQ0E3T2pCLEFBcUVBLEFBMERBLEFBc0VBLEFBb0RrQixFQTFObEIsQ0E1UXVCLEFBNEhSLENBOUlnRSxBQThGQSxBQTRNL0UsQUFrQmMsQUFtQmQsQUF5REEsQUErRWtCLENBNWRMLEFBbU9PLEFBZ1RELENBL1RuQixBQXlSQSxBQTRCQSxDQWhLMkIsQUFrRDNCLENBaE9BLEFBZ0RvQixBQW1HQSxBQVdwQixBQTJIcUIsQ0FsTUYsQUE4RW9CLEVBdkZwQixBQStIQSxDQWlKQSxDQTVVRCxDQTFDQSxBQThPYyxBQTBCQSxBQW1DWCxBQXVCckIsQUFhYyxDQWpmWixBQXVTbUMsQ0FwSnZCLEFBc0JJLEFBd0pELEFBNExHLENBMVFHLEFBV04sQUFxREcsRUEvUDJELEFBT0EsQUFPQSxDQTBaNUQsRUFyY0EsQUE0Zm5CLENBdFZhLEFBc0NNLEFBbVZuQixBQUdBLEFBR0EsR0FqVmdDLEFBdUNYLEFBNERBLEFBaUNFLEFBc0VBLEFBNkRKLENBMUhJLEFBc0VBLEFBc0J2QixDQWhVQSxBQXFIQSxBQStIQSxDQTNMcUIsQUE0VXJCLENBdFhhLENBK0pDLENBeEpHLEFBcUZqQixBQTBHZ0MsQUFtS1osQ0E5RHBCLENBaFJjLEFBZ1VBLENBMU1kLEVBNVJFLEFBcWNZLENBek9nQixFQWhCVixDQWhFcEIsRUFWYSxBQXlLTSxBQWdMbkIsQ0FsR2MsQUEwQkEsQ0F4SkssQUE0RG5CLENBdk9zRSxBQXVGbEQsQUFpS2MsQUErSmpCLENBcmZxRCxBQWlLakQsQUFxTVIsQUFzRUEsQ0F4T2IsQUEyS2EsQUFzRUEsQ0ErQlEsQ0F0TFUsQUFxTy9CLEVBclRjLEdBN0RNLENBaUZwQixBQXNLZSxBQTBCQSxFQXZNZixBQTRJYyxBQXNFQSxDQTdEQSxBQXNFQSxDQTVIZCxDQTRMQSxDQTVPQSxBQXNGd0IsRUExVitDLEFBbUJHLEFBc0NILEFBTUUsQUErQkgsQUFtQk0sQUErRHhELEFBeUJOLEVBN0NkLEFBeUVhLEVBME9iLENBNUV5QixBQTBCQSxDQTNETCxBQXNFQSxDQTdEQSxBQXNFQSxFQXJTSixDQXZKbUQsQUE4RkEsRUF1SHRELENBNEJFLENBMkdHLENBeERMLEdBeEdiLEVBMEttQixHQTlNbkIsQUE4RDhCLENBd0pDLEFBc0VBLENBcFl3QyxBQU9BLEFBT0EsQUF5VHZDLEFBc0VBLENBM01kLEFBbURsQixFQTBHOEIsQUEwQkEsRUE1RVosT0FVbEIsS0FwSEEsSUEyR0EsS0F2SUEsRUF3Sm1CLEFBc0VDLEVBN0RELEFBc0VDLENBOUNwQixBQTBCdUIsY0ExRHZCLENBc0VBLENBN0RBLENBc0VBLElBcEJxQixtQkFDRixnQkF4VWpCLENBOUZBLEFBdWFGLGlCQW5VRSxFQTlGQSxBQXlEQSxFQXBFQSxBQThGQSxFQXBCQSxFQTVDQSxJQThGQSxlQTVFQSxBQU9BLEFBT0EiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6XFxXb3JrXFxzcG9ydHNjYXJkLWZyb250ZW5kLW1hc3RlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2xheW91dHMvTWFpbidcclxuaW1wb3J0IHsgU3BvcnRzY2FyZEFQSSB9IGZyb20gJy4uL2xpYi9zcG9ydHNjYXJkLWFwaSdcclxuaW1wb3J0IHsgY29sb3JzLCBtZWRpYVF1ZXJpZXMsIHN0cmluZ3MgfSBmcm9tICcuLi9zdHlsZXMvdmFyaWFibGVzJztcclxuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuLi9jb21wb25lbnRzL2dsb2JhbC9TZWFyY2hCb3gnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2dsb2JhbC9DYXJkJztcclxuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxyXG4gIDxQYWdlPlxyXG4gICAge1xyXG4gICAgICAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2hvbWVQYWdlRGF0YScpID09IGZhbHNlKSA/XHJcbiAgICAgICAgPGRpdj4gTG9hZGluZyBob21lUGFnZURhdGEgPC9kaXY+XHJcbiAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZGl2X3NlY3Rpb24xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nMVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgcHJvcHMuaG9tZVBhZ2VEYXRhLmJhY2tncm91bmRfaW1hZ2UudXJsICsgJyknfX0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZGl2X3NlYXJjaFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dDEnPiB7c3RyaW5ncy5iZWNvbWVfZmFufTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQyJz4ge3N0cmluZ3MuZmluZF9iZXN0X3BsYXllcnNfdGVhbXN9PC9wPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hCb3g+PC9TZWFyY2hCb3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZXZyb24gZ3JhZGllbnQtZ3JlZW4gbWFyLXRvcC03MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuaG9tZVBhZ2VEYXRhLnRhZ2xpbmVfYmxvY2tzWzBdLnZhbHVlLmhlYWRpbmd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50XCI+e3Byb3BzLmhvbWVQYWdlRGF0YS50YWdsaW5lX2Jsb2Nrc1swXS52YWx1ZS50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuaG9tZVBhZ2VEYXRhLnRhZ2xpbmVfYmxvY2tzWzFdLnZhbHVlLmhlYWRpbmd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50XCI+e3Byb3BzLmhvbWVQYWdlRGF0YS50YWdsaW5lX2Jsb2Nrc1sxXS52YWx1ZS50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGlyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5ob21lUGFnZURhdGEudGFnbGluZV9ibG9ja3NbMl0udmFsdWUuaGVhZGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnRcIj57cHJvcHMuaG9tZVBhZ2VEYXRhLnRhZ2xpbmVfYmxvY2tzWzJdLnZhbHVlLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+e3Byb3BzLmhvbWVQYWdlRGF0YS5jdGFfdGV4dH08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hldnJvbiBncmFkaWVudC1ncmVlbiBtYXItdG9wLTcwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViIGdyYWRpZW50LWdyYXlcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0MVwiPntwcm9wcy5ob21lUGFnZURhdGEuc3ViaGVhZGluZ308L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dDJcIj57cHJvcHMuaG9tZVBhZ2VEYXRhLnN1YmhlYWRpbmdfdGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1jbGlwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL3Jlc291cmNlcy9wbGF5LWJ1dHRvbkAyeC5wbmcnLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hldnJvbiBncmFkaWVudC1ibHVlIGNoZXZyb24tYmx1ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPiB7cHJvcHMuaG9tZVBhZ2VEYXRhLmZlYXR1cmVzX3N1YmhlYWRpbmd9IDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMuaG9tZVBhZ2VEYXRhLmZlYXR1cmVzX2Jsb2Nrc1swXS52YWx1ZS5oZWFkaW5nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+e3Byb3BzLmhvbWVQYWdlRGF0YS5mZWF0dXJlc19ibG9ja3NbMV0udmFsdWUuaGVhZGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBwcm9wcy5ob21lUGFnZURhdGEuZmVhdHVyZXNfYmxvY2tzWzBdLnZhbHVlLmltYWdlLnVybCArICcpJ319PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cD57cHJvcHMuaG9tZVBhZ2VEYXRhLmZlYXR1cmVzX2Jsb2Nrc1swXS52YWx1ZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdyYWRpZW50LWJsdWVcIj57cHJvcHMuaG9tZVBhZ2VEYXRhLmZlYXR1cmVzX2N0YV90ZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGV2cm9uIGdyYWRpZW50LWdyZWVuIG1hci10b3AtNzBcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbHMgZ3JhZGllbnQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGl0bGUnPntwcm9wcy5ob21lUGFnZURhdGEudGVzdGltb25pYWxzWzBdLnR5cGV9PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGVhZGluZyc+e3Byb3BzLmhvbWVQYWdlRGF0YS50ZXN0aW1vbmlhbHNbMF0udmFsdWUuaGVhZGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dCc+e3Byb3BzLmhvbWVQYWdlRGF0YS50ZXN0aW1vbmlhbHNbMF0udmFsdWUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgcHJvcHMuaG9tZVBhZ2VEYXRhLnRlc3RpbW9uaWFsc1swXS52YWx1ZS5pbWFnZS51cmwgKyAnKSd9fT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGV2cm9uIGdyYWRpZW50LWdyZWVuIG1hci10b3AtNzBcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyc1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb3BzLmhvbWVQYWdlRGF0YS5wYXJ0bmVyc19zdWJoZWFkaW5nfTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBwcm9wcy5ob21lUGFnZURhdGEucGFydG5lcnNbMF0udmFsdWUuaW1hZ2UudXJsICsgJyknfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPntwcm9wcy5ob21lUGFnZURhdGEucGFydG5lcnNbMF0udmFsdWUuaGVhZGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57cHJvcHMuaG9tZVBhZ2VEYXRhLnBhcnRuZXJzWzBdLnZhbHVlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBwcm9wcy5ob21lUGFnZURhdGEucGFydG5lcnNbMF0udmFsdWUuaW1hZ2UudXJsICsgJyknfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgcHJvcHMuaG9tZVBhZ2VEYXRhLnBhcnRuZXJzWzFdLnZhbHVlLmltYWdlLnVybCArICcpJ319PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHByb3BzLmhvbWVQYWdlRGF0YS5wYXJ0bmVyc1syXS52YWx1ZS5pbWFnZS51cmwgKyAnKSd9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hldnJvbiBncmFkaWVudC1ncmVlbiBtYXItdG9wLTcwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXIgZ3JhZGllbnQtYmx1ZVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb3BzLmhvbWVQYWdlRGF0YS5mZWF0dXJlc19jdGFfdGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5JZiB5b3Ugd2FudCB0byBrbm93IG1vcmUgYWJvdXQgb3VyIHBsYXRmb3JtLCBsZWF2ZSB5b3VyIGRldGFpbHMgYmVsb3cgYW5kIHdlIHdpbGwgYmUgaW4gdG91Y2g8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPm5hbWU8L2xhYmVsPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+ZW1haWwgYWRkcmVzczwvbGFiZWw+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+cGhvbmUgbnVtYmVyPC9sYWJlbD48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPnNwb3J0aW5nIGNvZGU8L2xhYmVsPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2dcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPm1lc3NhZ2U8L2xhYmVsPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIGNvbHM9XCI1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+IFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ3JhZGllbnQtZ3JlZW5cIj5lbnF1aXJlICAgbm93PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZXZyb24gZ3JhZGllbnQtZ3JlZW4gbWFyLXRvcC03MFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlciBncmFkaWVudC1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8YT50ZXJtcy48L2E+XHJcbiAgICAgICAgICAgICAgICA8YT5wcml2YWN5PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8cD7CqSBTcG9ydHMgQ2FyZCAyMDE4PGJyPjwvYnI+V2Vic2l0ZSBieSBUZWNoRXF1aXB0PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8YT48aW1nIHNyYz1cIi4uL3N0YXRpYy9yZXNvdXJjZXMvaWNvbi1mYWNlYm9va0AyeC5wbmdcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGE+PGltZyBzcmM9XCIuLi9zdGF0aWMvcmVzb3VyY2VzL2ljb24tdHdpdHRlckAyeC5wbmdcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGE+PGltZyBzcmM9XCIuLi9zdGF0aWMvcmVzb3VyY2VzL2ljb24tbGlua2VkaW5AMngucG5nXCIvPjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgQG1lZGlhICR7bWVkaWFRdWVyaWVzLm1lZGl1bVVwfSB7XHJcbiAgICAgICAgICAgICAgI2Rpdl9zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozNSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTMwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6MjgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAuaW1nMSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTIlIDgyJSwgMTAwJSAwLCAxMDAlIDE2JSwgNTIlIDEwMCUsIDAgMTUlLCAwIDApO1xyXG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDkwJSwgNTAlIDEwMCUsIDAgOTAlLCAwIDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLmNoZXZyb24ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUyJSA4MiUsIDEwMCUgMCwgMTAwJSAxNiUsIDUyJSAxMDAlLCAwIDE1JSwgMCAwKTtcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNzAlLCAxMDAlIDAsIDEwMCUgMjUlLCA1MCUgOTUlLCAwIDI1JSwgMCAwKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5kZXNjIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNzVweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAyMCUsIDEwMCUgMCwgMTAwJSA3MCUsIDUwJSA3MCUsIDAgMTAwJSwgMCAwKTtcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMTclLCAxMDAlIDAsIDEwMCUgODMlLCA1MCUgMTAwJSwgMCA4MyUsIDAgMCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRpdi5kZXNjID4gLmNvbnRlbnQgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkaXYuZGVzYyA+IC5idG57XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkaXYuZGVzYyA+IC5idG4gPiBidXR0b257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAuc3ViIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODkwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNzZweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAyMCUsIDEwMCUgMCwgMTAwJSA3MCUsIDUwJSA3MCUsIDAgMTAwJSwgMCAwKTtcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgOCUsIDEwMCUgMCwgMTAwJSA5Mi41JSwgNTAlIDEwMCUsIDAgOTIuNSUsIDAgMCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAuc3ViID4gcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkaXYuc3ViID4gLnZpZGVvLWNsaXAgPiBpbWd7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxODJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjdweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmNoZXZyb24tYmx1ZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNzFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5mZWF0dXJlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNzVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMjAlLCAxMDAlIDAsIDEwMCUgNzAlLCA1MCUgNzAlLCAwIDEwMCUsIDAgMCk7XHJcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDEwJSwgMTAwJSAwLCAxMDAlIDkwJSwgNTAlIDEwMCUsIDAgOTAlLCAwIDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnRlc3RpbW9uaWFscyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTc1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDIwJSwgMTAwJSAwLCAxMDAlIDcwJSwgNTAlIDcwJSwgMCAxMDAlLCAwIDApO1xyXG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAxNCUsIDEwMCUgMCwgMTAwJSA4NiUsIDUwJSAxMDAlLCAwIDg2JSwgMCAwKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5wYXJ0bmVycyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTc4cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDIwJSwgMTAwJSAwLCAxMDAlIDcwJSwgNTAlIDcwJSwgMCAxMDAlLCAwIDApO1xyXG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAxMCUsIDEwMCUgMCwgMTAwJSA5MCUsIDUwJSAxMDAlLCAwIDkwJSwgMCAwKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5yZWdpc3RlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTc4cHg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMjAlLCAxMDAlIDAsIDEwMCUgNzAlLCA1MCUgNzAlLCAwIDEwMCUsIDAgMCk7XHJcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDEwJSwgMTAwJSAwLCAxMDAlIDkwJSwgNTAlIDEwMCUsIDAgOTAlLCAwIDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTc4cHg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMjAlLCAxMDAlIDAsIDEwMCUgNzAlLCA1MCUgNzAlLCAwIDEwMCUsIDAgMCk7XHJcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDYwJSwgMTAwJSAwLCAxMDAlIDEwMCUsIDUwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgJHttZWRpYVF1ZXJpZXMuc21hbGxPbmx5fSB7XHJcbiAgICAgICAgICAgICAgI2Rpdl9zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6NzUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEyMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOjIyMHB4O1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgI2Rpdl9zZWFyY2g+LnRleHQxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgI2Rpdl9zZWFyY2g+LnRleHQye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLmltZzEge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA0MDBweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUyJSA4MiUsIDEwMCUgMCwgMTAwJSAxNiUsIDUyJSAxMDAlLCAwIDE1JSwgMCAwKTtcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA5MCUsIDUwJSAxMDAlLCAwIDkwJSwgMCAwKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGl2LmNoZXZyb24ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDIwJSwgMTAwJSAwLCAxMDAlIDcwJSwgNTAlIDcwJSwgMCAxMDAlLCAwIDApO1xyXG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MCUsIDEwMCUgMCwgMTAwJSAzMCUsIDUwJSA4MCUsIDAgMzAlLCAwIDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLmRlc2Mge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01NnB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDIwJSwgMTAwJSAwLCAxMDAlIDcwJSwgNTAlIDcwJSwgMCAxMDAlLCAwIDApO1xyXG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1JSwgMTAwJSAwLCAxMDAlIDk1JSwgNTAlIDEwMCUsIDAgOTUlLCAwIDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkaXYuZGVzYyA+IC5jb250ZW50ID4gZGl2Om50aC1jaGlsZCgyKSxcclxuICAgICAgICAgICAgICBkaXYuZGVzYyA+IC5jb250ZW50ID4gZGl2Om50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRpdi5kZXNjID4gLmNvbnRlbnQgPiBkaXY6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGl2LmRlc2MgPiAuYnRue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGl2LmRlc2MgPiAuYnRuID4gYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnN1YiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY5MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU2cHg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMjAlLCAxMDAlIDAsIDEwMCUgNzAlLCA1MCUgNzAlLCAwIDEwMCUsIDAgMCk7XHJcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUuNSUsIDEwMCUgMCwgMTAwJSA5NC41JSwgNTAlIDEwMCUsIDAgOTQuNSUsIDAgMCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRpdi5zdWIgPiAudmlkZW8tY2xpcCA+IGltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI3cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jaGV2cm9uLWJsdWV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTZweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpdi5tYWlue1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLmltZzEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWFyY2gge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmFscGhhQmx1ZX07XHJcbiAgICAgICAgICAgICAgei1pbmRleDoxMDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXZfc2VhcmNoPi50ZXh0MXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWFyY2g+LnRleHQye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXZfc2VjdGlvbjEge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOnN0YXRpYztcclxuICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5jaGV2cm9uIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTE5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAuZGVzY3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNzYwOWEsICMxZTM1NTQpO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDExODtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdi5kZXNjID4gLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2LmRlc2MgPiAuY29udGVudCA+IGRpdntcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYuZGVzYyA+IC5jb250ZW50ID4gZGl2ID4gcC50aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdi5kZXNjID4gLmNvbnRlbnQgPiBkaXYgPiBwLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2LmRlc2MgPiAuYnRuID4gYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4ZGMwNTEsICM3MWE3M2MpO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggIzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnN1YiB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTE2O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdi5zdWIgPiAudGV4dDF7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdi5zdWIgPiAudGV4dDJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYuc3ViID4gLnZpZGVvLWNsaXB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zdGF0aWMvaW1hZ2VzL3N1Yi1pbWcucG5nJyk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdi5zdWIgPiAudmlkZW8tY2xpcCA+IGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5mZWF0dXJlIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mZWF0dXJlID4gLnRpdGxle1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTU4ZDI4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZlYXR1cmUgPiAuaXRlbXN7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZlYXR1cmUgPiAuaXRlbXMgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmVhdHVyZSA+IC5pdGVtcyA+IGRpdiA+IHB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmVhdHVyZSA+IC5pdGVtcyA+IGRpdjpudGgtY2hpbGQoMikgPiBwe1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmVhdHVyZSA+IC5pdGVtcyA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mZWF0dXJlID4gLml0ZW1zID4gZGl2OmZpcnN0LWNoaWxkID4gcHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzU1OGQyODtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZlYXR1cmUgPiAuaXRlbXMgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDA7IFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzU1OGQyODtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmVhdHVyZSA+IC5pdGVtLWNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mZWF0dXJlID4gLml0ZW0tY29udGVudCA+IC5pbWcge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHggMzAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mZWF0dXJlID4gLml0ZW0tY29udGVudCA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mZWF0dXJlID4gLml0ZW0tY29udGVudCA+IGRpdjpudGgtY2hpbGQoMikgPiBwIHtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZlYXR1cmUgPiBidXR0b24ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGVzdGltb25pYWxzIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXN0aW1vbmlhbHMgPiAudGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRlc3RpbW9uaWFscyA+IC5jb250ZW50ID4gZGl2IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGVzdGltb25pYWxzID4gLmNvbnRlbnQgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRlc3RpbW9uaWFscyA+IC5jb250ZW50ID4gZGl2OmZpcnN0LWNoaWxkID4gcDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRlc3RpbW9uaWFscyA+IC5jb250ZW50ID4gZGl2LmFycm93IHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkICMxYjMxNTA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXN0aW1vbmlhbHMgPiAuY29udGVudCA+IGRpdi5pbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMxYjMxNTA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzU4cHggMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRlc3RpbW9uaWFscyA+IC5jb250ZW50ID4gLmFycm93LWxlZnR7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zdGF0aWMvcmVzb3VyY2VzL2Fycm93LWxlZnRAMngucG5nJyk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyNSUgLSAxODBweCk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRlc3RpbW9uaWFscyA+IC5jb250ZW50ID4gLmFycm93LXJpZ2h0e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3RhdGljL3Jlc291cmNlcy9hcnJvdy1yaWdodEAyeC5wbmcnKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogY2FsYyg1MCUgLSAyNSUgLSAxODBweCk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5wYXJ0bmVycyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAucGFydG5lcnMgPiAudGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzU1OGQyODtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5wYXJ0bmVycyA+IC5jb250ZW50ID4gZGl2IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnBhcnRuZXJzID4gLmNvbnRlbnQgPiAuaW1nIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE4MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNjBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4ICM5OTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5wYXJ0bmVycyA+IC5jb250ZW50ID4gLmRlc2Mge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnBhcnRuZXJzID4gLmNvbnRlbnQgPiAuZGVzYyA+IHAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnBhcnRuZXJzID4gLmNvbnRlbnQgPiAuZGVzYyA+IHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnBhcnRuZXJzID4gLmNvbnRlbnQgPiAuZGVzYyA+IHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnBhcnRuZXJzID4gLml0ZW1zID4gZGl2Om50aC1jaGlsZCgxKSxcclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5wYXJ0bmVycyA+IC5pdGVtcyA+IGRpdjpudGgtY2hpbGQoMiksXHJcbiAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAucGFydG5lcnMgPiAuaXRlbXMgPiBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE2MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4ICM5OTk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5wYXJ0bmVycyA+IC5pdGVtcyA+IGRpdi5hcnJvdy1sZWZ0IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3N0YXRpYy9yZXNvdXJjZXMvYXJyb3ctbGVmdEAyeC5wbmcnKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1JSAtIDE2MHB4KTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5wYXJ0bmVycyA+IC5pdGVtcyA+IGRpdi5hcnJvdy1yaWdodCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zdGF0aWMvcmVzb3VyY2VzL2Fycm93LXJpZ2h0QDJ4LnBuZycpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDI1JSAtIDE2MHB4KTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5yZWdpc3RlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnJlZ2lzdGVyID4gLnRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5yZWdpc3RlciA+IC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAucmVnaXN0ZXIgPiAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnJlZ2lzdGVyID4gLmlucHV0LWdyb3VwID4gZGl2IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAucmVnaXN0ZXIgPiAuaW5wdXQtZ3JvdXAgPiBkaXYgPiBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnJlZ2lzdGVyID4gLmlucHV0LWdyb3VwID4gZGl2ID4gaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAucmVnaXN0ZXIgPiAubXNnIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnJlZ2lzdGVyID4gLm1zZyA+IGxhYmVsIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnJlZ2lzdGVyID4gLm1zZyA+IHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLnJlZ2lzdGVyID4gYnV0dG9uIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLmZvb3RlciA+IC5saW5rIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGl2X3NlY3Rpb24xID4gLmZvb3RlciA+IC5saW5rID4gYSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpdl9zZWN0aW9uMSA+IC5mb290ZXIgPiAuY29tcGFueS1uYW1lIHtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXZfc2VjdGlvbjEgPiAuZm9vdGVyID4gLmNvbXBhbnktbmFtZSA+IHAge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtbGlua3Mge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtbGlua3MgPiBhID4gaW1nIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNvY2lhbC1saW5rcyA+IGE6Zmlyc3QtY2hpbGQgPiBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtbGlua3MgPiBhOm50aC1jaGlsZCgyKSA+IGltZyxcclxuICAgICAgICAgICAgLnNvY2lhbC1saW5rcyA+IGE6bnRoLWNoaWxkKDMpID4gaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAubWFyLXRvcC01MCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hci10b3AtNzAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXItdG9wLTcxIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNzJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ3JhZGllbnQtZ3JlZW4ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzhkYzA1MSwgIzcxYTczYyk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ncmFkaWVudC1ibHVlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzYTY0YTAsICMxZjM2NTYpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ3JhZGllbnQtZ3JheSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNWY1ZjVmLCAjMmUyZTJlKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuICA8L1BhZ2U+XHJcbilcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGN0eCkge1xyXG4gIGxldCBob21lUGFnZURhdGFcclxuICBob21lUGFnZURhdGEgPSBhd2FpdCBuZXcgU3BvcnRzY2FyZEFQSShjdHgpLmhvbWVwYWdlKClcclxuICByZXR1cm4ge1xyXG4gICAgaG9tZVBhZ2VEYXRhOiBob21lUGFnZURhdGFcclxuICB9IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXX0= */\n/*@ sourceURL=pages\\index.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].mediumUp, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["b" /* mediaQueries */].smallOnly, __WEBPACK_IMPORTED_MODULE_5__styles_variables__["a" /* colors */].alphaBlue]
  })));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var homePageData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new __WEBPACK_IMPORTED_MODULE_4__lib_sportscard_api__["a" /* SportscardAPI */](ctx).homepage();

          case 2:
            homePageData = _context.sent;
            return _context.abrupt("return", {
              homePageData: homePageData
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

// Defines routes extra to those handled by the next.js
// file structure (pages/<page>.js)
var routes = __webpack_require__("next-routes");

module.exports = routes() // Name   Page      Pattern
.add('player-details', pattern = '/player/:slug', page = 'player').add('player-edit', pattern = '/:me(me)/', page = 'player').add('player-tab', pattern = '/player/:slug/:tab', page = 'player').add('search', pattern = 'search/:q', page = 'search');

/***/ }),

/***/ "./styles/scss/global.scss":
/***/ (function(module, exports) {



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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-player":
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-responsive":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map