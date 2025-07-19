/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/WebGLProgressiveBlur.tsx":
/*!*********************************************!*\
  !*** ./components/WebGLProgressiveBlur.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebGLProgressiveBlur: () => (/* binding */ WebGLProgressiveBlur),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst WebGLProgressiveBlur = (props)=>{\n    const blurStrength = props.blurStrength || 15;\n    const topHeight = props.topHeight || 25;\n    const bottomHeight = props.bottomHeight || 25;\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, [\n        // Flou progressif HAUT\n        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            key: \"blur-top\",\n            style: {\n                position: \"fixed\",\n                top: 0,\n                left: 0,\n                right: 0,\n                height: topHeight + \"%\",\n                backdropFilter: \"blur(\" + blurStrength + \"px)\",\n                WebkitBackdropFilter: \"blur(\" + blurStrength + \"px)\",\n                mask: \"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)\",\n                WebkitMask: \"linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)\",\n                pointerEvents: \"none\",\n                zIndex: 9999\n            }\n        }),\n        // Flou progressif BAS\n        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            key: \"blur-bottom\",\n            style: {\n                position: \"fixed\",\n                bottom: 0,\n                left: 0,\n                right: 0,\n                height: bottomHeight + \"%\",\n                backdropFilter: \"blur(\" + blurStrength + \"px)\",\n                WebkitBackdropFilter: \"blur(\" + blurStrength + \"px)\",\n                mask: \"linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)\",\n                WebkitMask: \"linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)\",\n                pointerEvents: \"none\",\n                zIndex: 9999\n            }\n        }),\n        // Structure Control CMS cachée\n        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"figure\", {\n            key: \"control-structure\",\n            className: \"media\",\n            style: {\n                display: \"none\"\n            }\n        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n            alt: \"Progressive Blur Effect\"\n        }))\n    ]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebGLProgressiveBlur);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dlYkdMUHJvZ3Jlc3NpdmVCbHVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLHVCQUF1QixDQUFDQztJQUM1QixNQUFNQyxlQUFlRCxNQUFNQyxZQUFZLElBQUk7SUFDM0MsTUFBTUMsWUFBWUYsTUFBTUUsU0FBUyxJQUFJO0lBQ3JDLE1BQU1DLGVBQWVILE1BQU1HLFlBQVksSUFBSTtJQUUzQyxxQkFBT0wsMERBQW1CLENBQUMsT0FBTyxNQUFNO1FBQ3RDLHVCQUF1QjtzQkFDdkJBLDBEQUFtQixDQUFDLE9BQU87WUFDekJPLEtBQUs7WUFDTEMsT0FBTztnQkFDTEMsVUFBVTtnQkFDVkMsS0FBSztnQkFDTEMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsUUFBUVQsWUFBWTtnQkFDcEJVLGdCQUFnQixVQUFVWCxlQUFlO2dCQUN6Q1ksc0JBQXNCLFVBQVVaLGVBQWU7Z0JBQy9DYSxNQUFNO2dCQUNOQyxZQUFZO2dCQUNaQyxlQUFlO2dCQUNmQyxRQUFRO1lBQ1Y7UUFDRjtRQUVBLHNCQUFzQjtzQkFDdEJuQiwwREFBbUIsQ0FBQyxPQUFPO1lBQ3pCTyxLQUFLO1lBQ0xDLE9BQU87Z0JBQ0xDLFVBQVU7Z0JBQ1ZXLFFBQVE7Z0JBQ1JULE1BQU07Z0JBQ05DLE9BQU87Z0JBQ1BDLFFBQVFSLGVBQWU7Z0JBQ3ZCUyxnQkFBZ0IsVUFBVVgsZUFBZTtnQkFDekNZLHNCQUFzQixVQUFVWixlQUFlO2dCQUMvQ2EsTUFBTTtnQkFDTkMsWUFBWTtnQkFDWkMsZUFBZTtnQkFDZkMsUUFBUTtZQUNWO1FBQ0Y7UUFFQSwrQkFBK0I7c0JBQy9CbkIsMERBQW1CLENBQUMsVUFBVTtZQUM1Qk8sS0FBSztZQUNMYyxXQUFXO1lBQ1hiLE9BQU87Z0JBQUVjLFNBQVM7WUFBTztRQUMzQixpQkFBR3RCLDBEQUFtQixDQUFDLE9BQU87WUFBRXVCLEtBQUs7UUFBMEI7S0FDaEU7QUFDSDtBQUVnQztBQUNoQyxpRUFBZXRCLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmdsLXByb2dyZXNzaXZlLWJsdXItY250cmwvLi9jb21wb25lbnRzL1dlYkdMUHJvZ3Jlc3NpdmVCbHVyLnRzeD84NGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFdlYkdMUHJvZ3Jlc3NpdmVCbHVyID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgYmx1clN0cmVuZ3RoID0gcHJvcHMuYmx1clN0cmVuZ3RoIHx8IDE1O1xuICBjb25zdCB0b3BIZWlnaHQgPSBwcm9wcy50b3BIZWlnaHQgfHwgMjU7XG4gIGNvbnN0IGJvdHRvbUhlaWdodCA9IHByb3BzLmJvdHRvbUhlaWdodCB8fCAyNTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgW1xuICAgIC8vIEZsb3UgcHJvZ3Jlc3NpZiBIQVVUXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAga2V5OiAnYmx1ci10b3AnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGhlaWdodDogdG9wSGVpZ2h0ICsgJyUnLFxuICAgICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoJyArIGJsdXJTdHJlbmd0aCArICdweCknLFxuICAgICAgICBXZWJraXRCYWNrZHJvcEZpbHRlcjogJ2JsdXIoJyArIGJsdXJTdHJlbmd0aCArICdweCknLFxuICAgICAgICBtYXNrOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSgwLDAsMCwwLjkpIDIwJSwgcmdiYSgwLDAsMCwwLjcpIDQwJSwgcmdiYSgwLDAsMCwwLjQpIDYwJSwgcmdiYSgwLDAsMCwwLjIpIDgwJSwgcmdiYSgwLDAsMCwwKSAxMDAlKScsXG4gICAgICAgIFdlYmtpdE1hc2s6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDEpIDAlLCByZ2JhKDAsMCwwLDAuOSkgMjAlLCByZ2JhKDAsMCwwLDAuNykgNDAlLCByZ2JhKDAsMCwwLDAuNCkgNjAlLCByZ2JhKDAsMCwwLDAuMikgODAlLCByZ2JhKDAsMCwwLDApIDEwMCUpJyxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICB6SW5kZXg6IDk5OTlcbiAgICAgIH1cbiAgICB9KSxcbiAgICBcbiAgICAvLyBGbG91IHByb2dyZXNzaWYgQkFTXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAga2V5OiAnYmx1ci1ib3R0b20nLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGhlaWdodDogYm90dG9tSGVpZ2h0ICsgJyUnLFxuICAgICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoJyArIGJsdXJTdHJlbmd0aCArICdweCknLFxuICAgICAgICBXZWJraXRCYWNrZHJvcEZpbHRlcjogJ2JsdXIoJyArIGJsdXJTdHJlbmd0aCArICdweCknLFxuICAgICAgICBtYXNrOiAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSgwLDAsMCwwLjkpIDIwJSwgcmdiYSgwLDAsMCwwLjcpIDQwJSwgcmdiYSgwLDAsMCwwLjQpIDYwJSwgcmdiYSgwLDAsMCwwLjIpIDgwJSwgcmdiYSgwLDAsMCwwKSAxMDAlKScsXG4gICAgICAgIFdlYmtpdE1hc2s6ICdsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDEpIDAlLCByZ2JhKDAsMCwwLDAuOSkgMjAlLCByZ2JhKDAsMCwwLDAuNykgNDAlLCByZ2JhKDAsMCwwLDAuNCkgNjAlLCByZ2JhKDAsMCwwLDAuMikgODAlLCByZ2JhKDAsMCwwLDApIDEwMCUpJyxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICB6SW5kZXg6IDk5OTlcbiAgICAgIH1cbiAgICB9KSxcbiAgICBcbiAgICAvLyBTdHJ1Y3R1cmUgQ29udHJvbCBDTVMgY2FjaMOpZVxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScsIHtcbiAgICAgIGtleTogJ2NvbnRyb2wtc3RydWN0dXJlJyxcbiAgICAgIGNsYXNzTmFtZTogJ21lZGlhJyxcbiAgICAgIHN0eWxlOiB7IGRpc3BsYXk6ICdub25lJyB9XG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBhbHQ6ICdQcm9ncmVzc2l2ZSBCbHVyIEVmZmVjdCcgfSkpXG4gIF0pO1xufTtcblxuZXhwb3J0IHsgV2ViR0xQcm9ncmVzc2l2ZUJsdXIgfTtcbmV4cG9ydCBkZWZhdWx0IFdlYkdMUHJvZ3Jlc3NpdmVCbHVyOyAiXSwibmFtZXMiOlsiUmVhY3QiLCJXZWJHTFByb2dyZXNzaXZlQmx1ciIsInByb3BzIiwiYmx1clN0cmVuZ3RoIiwidG9wSGVpZ2h0IiwiYm90dG9tSGVpZ2h0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJoZWlnaHQiLCJiYWNrZHJvcEZpbHRlciIsIldlYmtpdEJhY2tkcm9wRmlsdGVyIiwibWFzayIsIldlYmtpdE1hc2siLCJwb2ludGVyRXZlbnRzIiwiekluZGV4IiwiYm90dG9tIiwiY2xhc3NOYW1lIiwiZGlzcGxheSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WebGLProgressiveBlur.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cntrl_site_sdk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cntrl-site/sdk-nextjs */ \"@cntrl-site/sdk-nextjs\");\n/* harmony import */ var _cntrl_site_sdk_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cntrl_site_sdk_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cntrl_site_sdk_style_sdk_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cntrl-site/sdk/style/sdk.css */ \"./node_modules/@cntrl-site/sdk/dist/sdk.css\");\n/* harmony import */ var _cntrl_site_sdk_style_sdk_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cntrl_site_sdk_style_sdk_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_WebGLProgressiveBlur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WebGLProgressiveBlur */ \"./components/WebGLProgressiveBlur.tsx\");\n\n\n\n\n\n// Enregistrer le composant WebGL Progressive Blur pour Control CMS\n_cntrl_site_sdk_nextjs__WEBPACK_IMPORTED_MODULE_2__.customItems.define(\"webgl-progressive-blur\", _components_WebGLProgressiveBlur__WEBPACK_IMPORTED_MODULE_4__.WebGLProgressiveBlur);\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cntrl_site_sdk_nextjs__WEBPACK_IMPORTED_MODULE_2__.CntrlProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/ludovicveltz/Documents/SOLWEIG-IZAR/webgl-progressive-blur-main/pages/_app.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ludovicveltz/Documents/SOLWEIG-IZAR/webgl-progressive-blur-main/pages/_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUV1QztBQUM3QjtBQUNtQztBQUUxRSxtRUFBbUU7QUFDbkVDLCtEQUFXQSxDQUFDRSxNQUFNLENBQUMsMEJBQTBCRCxrRkFBb0JBO0FBRWpFLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDN0MscUJBQ0UsOERBQUNOLGlFQUFhQTtrQkFDWiw0RUFBQ0s7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViZ2wtcHJvZ3Jlc3NpdmUtYmx1ci1jbnRybC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBDbnRybFByb3ZpZGVyLCBjdXN0b21JdGVtcyB9IGZyb20gJ0BjbnRybC1zaXRlL3Nkay1uZXh0anMnO1xuaW1wb3J0ICdAY250cmwtc2l0ZS9zZGsvc3R5bGUvc2RrLmNzcyc7XG5pbXBvcnQgeyBXZWJHTFByb2dyZXNzaXZlQmx1ciB9IGZyb20gJy4uL2NvbXBvbmVudHMvV2ViR0xQcm9ncmVzc2l2ZUJsdXInO1xuXG4vLyBFbnJlZ2lzdHJlciBsZSBjb21wb3NhbnQgV2ViR0wgUHJvZ3Jlc3NpdmUgQmx1ciBwb3VyIENvbnRyb2wgQ01TXG5jdXN0b21JdGVtcy5kZWZpbmUoJ3dlYmdsLXByb2dyZXNzaXZlLWJsdXInLCBXZWJHTFByb2dyZXNzaXZlQmx1cik7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENudHJsUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DbnRybFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiQ250cmxQcm92aWRlciIsImN1c3RvbUl0ZW1zIiwiV2ViR0xQcm9ncmVzc2l2ZUJsdXIiLCJkZWZpbmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "@cntrl-site/sdk-nextjs":
/*!*****************************************!*\
  !*** external "@cntrl-site/sdk-nextjs" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@cntrl-site/sdk-nextjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@cntrl-site"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();