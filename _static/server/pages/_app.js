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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebGLProgressiveBlur: () => (/* binding */ WebGLProgressiveBlur)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst WebGLProgressiveBlur = ({ blurStrength = 25, topHeight = 25, bottomHeight = 25 })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"fixed\",\n                    top: 0,\n                    left: 0,\n                    right: 0,\n                    height: `${topHeight}%`,\n                    backdropFilter: `blur(${blurStrength}px)`,\n                    WebkitBackdropFilter: `blur(${blurStrength}px)`,\n                    mask: `linear-gradient(to bottom, \n            rgba(0,0,0,1) 0%, \n            rgba(0,0,0,0.9) 20%,\n            rgba(0,0,0,0.7) 40%,\n            rgba(0,0,0,0.4) 60%,\n            rgba(0,0,0,0.2) 80%,\n            rgba(0,0,0,0) 100%)`,\n                    WebkitMask: `linear-gradient(to bottom, \n            rgba(0,0,0,1) 0%, \n            rgba(0,0,0,0.9) 20%,\n            rgba(0,0,0,0.7) 40%,\n            rgba(0,0,0,0.4) 60%,\n            rgba(0,0,0,0.2) 80%,\n            rgba(0,0,0,0) 100%)`,\n                    pointerEvents: \"none\",\n                    zIndex: 9999\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ludovicveltz/Documents/SOLWEIG-IZAR/webgl-progressive-blur-main/components/WebGLProgressiveBlur.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"fixed\",\n                    bottom: 0,\n                    left: 0,\n                    right: 0,\n                    height: `${bottomHeight}%`,\n                    backdropFilter: `blur(${blurStrength}px)`,\n                    WebkitBackdropFilter: `blur(${blurStrength}px)`,\n                    mask: `linear-gradient(to top, \n            rgba(0,0,0,1) 0%, \n            rgba(0,0,0,0.9) 20%,\n            rgba(0,0,0,0.7) 40%,\n            rgba(0,0,0,0.4) 60%,\n            rgba(0,0,0,0.2) 80%,\n            rgba(0,0,0,0) 100%)`,\n                    WebkitMask: `linear-gradient(to top, \n            rgba(0,0,0,1) 0%, \n            rgba(0,0,0,0.9) 20%,\n            rgba(0,0,0,0.7) 40%,\n            rgba(0,0,0,0.4) 60%,\n            rgba(0,0,0,0.2) 80%,\n            rgba(0,0,0,0) 100%)`,\n                    pointerEvents: \"none\",\n                    zIndex: 9999\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ludovicveltz/Documents/SOLWEIG-IZAR/webgl-progressive-blur-main/components/WebGLProgressiveBlur.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"fixed\",\n                    top: \"20px\",\n                    right: \"20px\",\n                    background: \"rgba(0,0,0,0.8)\",\n                    color: \"white\",\n                    padding: \"8px 12px\",\n                    borderRadius: \"6px\",\n                    fontSize: \"12px\",\n                    fontFamily: \"monospace\",\n                    zIndex: 10000\n                },\n                children: [\n                    \"\\uD83C\\uDF1F Progressive Blur Fluide | Haut: \",\n                    topHeight,\n                    \"% | Bas: \",\n                    bottomHeight,\n                    \"% | Max: \",\n                    blurStrength,\n                    \"px\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ludovicveltz/Documents/SOLWEIG-IZAR/webgl-progressive-blur-main/components/WebGLProgressiveBlur.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dlYkdMUHJvZ3Jlc3NpdmVCbHVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFRbkIsTUFBTUMsdUJBQTRELENBQUMsRUFDeEVDLGVBQWUsRUFBRSxFQUNqQkMsWUFBWSxFQUFFLEVBQ2RDLGVBQWUsRUFBRSxFQUNsQjtJQUNDLHFCQUNFOzswQkFFRSw4REFBQ0M7Z0JBQ0NDLE9BQU87b0JBQ0xDLFVBQVU7b0JBQ1ZDLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLFFBQVEsQ0FBQyxFQUFFUixVQUFVLENBQUMsQ0FBQztvQkFDdkJTLGdCQUFnQixDQUFDLEtBQUssRUFBRVYsYUFBYSxHQUFHLENBQUM7b0JBQ3pDVyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUVYLGFBQWEsR0FBRyxDQUFDO29CQUMvQ1ksTUFBTSxDQUFDOzs7Ozs7K0JBTWMsQ0FBQztvQkFDdEJDLFlBQVksQ0FBQzs7Ozs7OytCQU1RLENBQUM7b0JBQ3RCQyxlQUFlO29CQUNmQyxRQUFRO2dCQUNWOzs7Ozs7MEJBSUYsOERBQUNaO2dCQUNDQyxPQUFPO29CQUNMQyxVQUFVO29CQUNWVyxRQUFRO29CQUNSVCxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxRQUFRLENBQUMsRUFBRVAsYUFBYSxDQUFDLENBQUM7b0JBQzFCUSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUVWLGFBQWEsR0FBRyxDQUFDO29CQUN6Q1csc0JBQXNCLENBQUMsS0FBSyxFQUFFWCxhQUFhLEdBQUcsQ0FBQztvQkFDL0NZLE1BQU0sQ0FBQzs7Ozs7OytCQU1jLENBQUM7b0JBQ3RCQyxZQUFZLENBQUM7Ozs7OzsrQkFNUSxDQUFDO29CQUN0QkMsZUFBZTtvQkFDZkMsUUFBUTtnQkFDVjs7Ozs7OzBCQUlGLDhEQUFDWjtnQkFDQ0MsT0FBTztvQkFDTEMsVUFBVTtvQkFDVkMsS0FBSztvQkFDTEUsT0FBTztvQkFDUFMsWUFBWTtvQkFDWkMsT0FBTztvQkFDUEMsU0FBUztvQkFDVEMsY0FBYztvQkFDZEMsVUFBVTtvQkFDVkMsWUFBWTtvQkFDWlAsUUFBUTtnQkFDVjs7b0JBQ0Q7b0JBQ3FDZDtvQkFBVTtvQkFBVUM7b0JBQWE7b0JBQVVGO29CQUFhOzs7Ozs7Ozs7QUFJcEcsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmdsLXByb2dyZXNzaXZlLWJsdXItY250cmwvLi9jb21wb25lbnRzL1dlYkdMUHJvZ3Jlc3NpdmVCbHVyLnRzeD84NGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBXZWJHTFByb2dyZXNzaXZlQmx1clByb3BzIHtcbiAgYmx1clN0cmVuZ3RoPzogbnVtYmVyO1xuICB0b3BIZWlnaHQ/OiBudW1iZXI7XG4gIGJvdHRvbUhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFdlYkdMUHJvZ3Jlc3NpdmVCbHVyOiBSZWFjdC5GQzxXZWJHTFByb2dyZXNzaXZlQmx1clByb3BzPiA9ICh7IFxuICBibHVyU3RyZW5ndGggPSAyNSxcbiAgdG9wSGVpZ2h0ID0gMjUsXG4gIGJvdHRvbUhlaWdodCA9IDI1XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBGTE9VIFBST0dSRVNTSUYgSEFVVCAtIEVmZmV0IGZsdWlkZSBhdmVjIG1hc2sgZ3JhZGllbnQgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgaGVpZ2h0OiBgJHt0b3BIZWlnaHR9JWAsXG4gICAgICAgICAgYmFja2Ryb3BGaWx0ZXI6IGBibHVyKCR7Ymx1clN0cmVuZ3RofXB4KWAsXG4gICAgICAgICAgV2Via2l0QmFja2Ryb3BGaWx0ZXI6IGBibHVyKCR7Ymx1clN0cmVuZ3RofXB4KWAsXG4gICAgICAgICAgbWFzazogYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwxKSAwJSwgXG4gICAgICAgICAgICByZ2JhKDAsMCwwLDAuOSkgMjAlLFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwwLjcpIDQwJSxcbiAgICAgICAgICAgIHJnYmEoMCwwLDAsMC40KSA2MCUsXG4gICAgICAgICAgICByZ2JhKDAsMCwwLDAuMikgODAlLFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwwKSAxMDAlKWAsXG4gICAgICAgICAgV2Via2l0TWFzazogYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwxKSAwJSwgXG4gICAgICAgICAgICByZ2JhKDAsMCwwLDAuOSkgMjAlLFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwwLjcpIDQwJSxcbiAgICAgICAgICAgIHJnYmEoMCwwLDAsMC40KSA2MCUsXG4gICAgICAgICAgICByZ2JhKDAsMCwwLDAuMikgODAlLFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwwKSAxMDAlKWAsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgIHpJbmRleDogOTk5OVxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgey8qIEZMT1UgUFJPR1JFU1NJRiBCQVMgLSBFZmZldCBmbHVpZGUgYXZlYyBtYXNrIGdyYWRpZW50ICovfVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIGhlaWdodDogYCR7Ym90dG9tSGVpZ2h0fSVgLFxuICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiBgYmx1cigke2JsdXJTdHJlbmd0aH1weClgLFxuICAgICAgICAgIFdlYmtpdEJhY2tkcm9wRmlsdGVyOiBgYmx1cigke2JsdXJTdHJlbmd0aH1weClgLFxuICAgICAgICAgIG1hc2s6IGBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBcbiAgICAgICAgICAgIHJnYmEoMCwwLDAsMSkgMCUsIFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwwLjkpIDIwJSxcbiAgICAgICAgICAgIHJnYmEoMCwwLDAsMC43KSA0MCUsXG4gICAgICAgICAgICByZ2JhKDAsMCwwLDAuNCkgNjAlLFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwwLjIpIDgwJSxcbiAgICAgICAgICAgIHJnYmEoMCwwLDAsMCkgMTAwJSlgLFxuICAgICAgICAgIFdlYmtpdE1hc2s6IGBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBcbiAgICAgICAgICAgIHJnYmEoMCwwLDAsMSkgMCUsIFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwwLjkpIDIwJSxcbiAgICAgICAgICAgIHJnYmEoMCwwLDAsMC43KSA0MCUsXG4gICAgICAgICAgICByZ2JhKDAsMCwwLDAuNCkgNjAlLFxuICAgICAgICAgICAgcmdiYSgwLDAsMCwwLjIpIDgwJSxcbiAgICAgICAgICAgIHJnYmEoMCwwLDAsMCkgMTAwJSlgLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICB6SW5kZXg6IDk5OTlcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBCYWRnZSBkZSBkZWJ1ZyBmaXhlICovfVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHRvcDogJzIwcHgnLFxuICAgICAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC44KScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgcGFkZGluZzogJzhweCAxMnB4JyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZScsXG4gICAgICAgICAgekluZGV4OiAxMDAwMFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICDwn4yfIFByb2dyZXNzaXZlIEJsdXIgRmx1aWRlIHwgSGF1dDoge3RvcEhlaWdodH0lIHwgQmFzOiB7Ym90dG9tSGVpZ2h0fSUgfCBNYXg6IHtibHVyU3RyZW5ndGh9cHhcbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTsgIl0sIm5hbWVzIjpbIlJlYWN0IiwiV2ViR0xQcm9ncmVzc2l2ZUJsdXIiLCJibHVyU3RyZW5ndGgiLCJ0b3BIZWlnaHQiLCJib3R0b21IZWlnaHQiLCJkaXYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiaGVpZ2h0IiwiYmFja2Ryb3BGaWx0ZXIiLCJXZWJraXRCYWNrZHJvcEZpbHRlciIsIm1hc2siLCJXZWJraXRNYXNrIiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsImJvdHRvbSIsImJhY2tncm91bmQiLCJjb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WebGLProgressiveBlur.tsx\n");

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