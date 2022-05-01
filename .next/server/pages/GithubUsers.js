"use strict";
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
exports.id = "pages/GithubUsers";
exports.ids = ["pages/GithubUsers"];
exports.modules = {

/***/ "./pages/GithubUsers.js":
/*!******************************!*\
  !*** ./pages/GithubUsers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    static async getInitialProps() {\n        const res = await fetch(\"https://www.webull.com/quote/fx-usdrub\");\n        let m = await res.text();\n        return {\n            m\n        };\n    }\n    render() {\n        let ss = this.props.m;\n        let s = \"Real-time Quotes | Provided by Refinitiv\";\n        ss = ss.substring(ss.lastIndexOf(s) + s.length);\n        ss = ss.substring(0, 160);\n        ss = ss.substring(100, ss.lastIndexOf(\"</div>\"));\n        ss = ss.substring(ss.lastIndexOf(\">\") + 1);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: ss\n                }, void 0, false, {\n                    fileName: \"D:\\\\ReactProjects\\\\react-next\\\\pages\\\\GithubUsers.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"D:\\\\ReactProjects\\\\react-next\\\\pages\\\\GithubUsers.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\ReactProjects\\\\react-next\\\\pages\\\\GithubUsers.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this);\n    }\n});;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HaXRodWJVc2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXlCO0FBR3pCLGlFQUFlLGNBQWNBLHdEQUFlO0lBQ3hDLGFBQWFFLGVBQWUsR0FBRztRQUMzQixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDO1FBQ2pFLElBQUlDLENBQUMsR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtRQUN4QixPQUFPO1lBQUNELENBQUM7U0FBQztLQUNiO0lBRURFLE1BQU0sR0FBRztRQUNMLElBQUlDLEVBQUUsR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osQ0FBQztRQUNyQixJQUFJSyxDQUFDLEdBQUcsMENBQTBDO1FBQ2xERixFQUFFLEdBQUdBLEVBQUUsQ0FBQ0csU0FBUyxDQUFDSCxFQUFFLENBQUNJLFdBQVcsQ0FBQ0YsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQ0csTUFBTSxDQUFDO1FBQy9DTCxFQUFFLEdBQUdBLEVBQUUsQ0FBQ0csU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDekJILEVBQUUsR0FBR0EsRUFBRSxDQUFDRyxTQUFTLENBQUMsR0FBRyxFQUFFSCxFQUFFLENBQUNJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoREosRUFBRSxHQUFHQSxFQUFFLENBQUNHLFNBQVMsQ0FBQ0gsRUFBRSxDQUFDSSxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLHFCQUNJLDhEQUFDRSxLQUFHOzs4QkFDQSw4REFBQ0MsSUFBRTs4QkFBRVAsRUFBRTs7Ozs7d0JBQU07OEJBQ2IsOERBQUNRLElBQUU7Ozs7d0JBQUU7Ozs7OztnQkFDSCxDQUFDO0tBRWQ7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHQvLi9wYWdlcy9HaXRodWJVc2Vycy5qcz9hYTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy53ZWJ1bGwuY29tL3F1b3RlL2Z4LXVzZHJ1YicpO1xyXG4gICAgICAgIGxldCBtID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgICAgICByZXR1cm4ge219XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBzcyA9IHRoaXMucHJvcHMubVxyXG4gICAgICAgIGxldCBzID0gXCJSZWFsLXRpbWUgUXVvdGVzIHwgUHJvdmlkZWQgYnkgUmVmaW5pdGl2XCJcclxuICAgICAgICBzcyA9IHNzLnN1YnN0cmluZyhzcy5sYXN0SW5kZXhPZihzKSArIHMubGVuZ3RoKVxyXG4gICAgICAgIHNzID0gc3Muc3Vic3RyaW5nKDAsIDE2MClcclxuICAgICAgICBzcyA9IHNzLnN1YnN0cmluZygxMDAsIHNzLmxhc3RJbmRleE9mKFwiPC9kaXY+XCIpKVxyXG4gICAgICAgIHNzID0gc3Muc3Vic3RyaW5nKHNzLmxhc3RJbmRleE9mKFwiPlwiKSArIDEpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT57c3N9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxuXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZmV0Y2giLCJtIiwidGV4dCIsInJlbmRlciIsInNzIiwicHJvcHMiLCJzIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJsZW5ndGgiLCJkaXYiLCJoMSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/GithubUsers.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/GithubUsers.js"));
module.exports = __webpack_exports__;

})();