"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/rooms/[roomId]/page",{

/***/ "(app-pages-browser)/./src/app/rooms/[roomId]/video-player.tsx":
/*!*************************************************!*\
  !*** ./src/app/rooms/[roomId]/video-player.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DevFinderVideo: function() { return /* binding */ DevFinderVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stream-io/video-react-sdk */ \"(app-pages-browser)/./node_modules/@stream-io/video-react-sdk/dist/index.es.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ DevFinderVideo auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;\nconst token = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYzE1YWNjNDYtOTY2MS00ODIyLTk2MjItZjQ2ZGM0YWVhZGU3In0.DT9LMGb-t4R2og5jUpAMqZojNLYSf2u3HxZzq2QW84E\";\nconst DevFinderVideo = (param)=>{\n    let { room } = param;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [client, setClient] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    3;\n    const [call, setCall] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!room) return;\n        if (!session.data) return;\n        const userId = session.data.user.id;\n        const client = new _stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_1__.StreamVideoClient({\n            apiKey,\n            user: {\n                id: userId\n            },\n            token\n        });\n        setClient(client);\n        const call = client.call(\"default\", room.id);\n        call.join({\n            create: true\n        });\n        setCall(call);\n        return ()=>{\n            call.leave();\n            client.disconnectUser();\n        };\n    }, [\n        session,\n        room\n    ]);\n    return client && call && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_1__.StreamVideo, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_1__.StreamTheme, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_1__.StreamCall, {\n                call: call,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_1__.SpeakerLayout, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_1__.CallControls, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n                lineNumber: 50,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n        lineNumber: 48,\n        columnNumber: 7\n    }, undefined);\n};\n_s(DevFinderVideo, \"MlEbExGSG0B/rTxIeBx/2Qb8STQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = DevFinderVideo;\nvar _c;\n$RefreshReg$(_c, \"DevFinderVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcm9vbXMvW3Jvb21JZF0vdmlkZW8tcGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBV29DO0FBQ1M7QUFDRDtBQUU1QyxNQUFNUyxTQUFTQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLDBCQUEwQjtBQUNyRCxNQUFNQyxRQUNKO0FBRUssTUFBTUMsaUJBQWlCO1FBQUMsRUFBRUMsSUFBSSxFQUFrQjs7SUFDckQsTUFBTUMsVUFBVVYsMkRBQVVBO0lBQzFCLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBMkI7SUFDL0Q7SUFDQSxNQUFNLENBQUNXLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQWM7SUFDOUNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDUSxNQUFNO1FBQ1gsSUFBSSxDQUFDQyxRQUFRSyxJQUFJLEVBQUU7UUFDbkIsTUFBTUMsU0FBU04sUUFBUUssSUFBSSxDQUFDRSxJQUFJLENBQUNDLEVBQUU7UUFDbkMsTUFBTVAsU0FBUyxJQUFJWix5RUFBaUJBLENBQUM7WUFDbkNJO1lBQ0FjLE1BQU07Z0JBQUVDLElBQUlGO1lBQU87WUFDbkJUO1FBQ0Y7UUFDQUssVUFBVUQ7UUFDVixNQUFNRSxPQUFPRixPQUFPRSxJQUFJLENBQUMsV0FBV0osS0FBS1MsRUFBRTtRQUMzQ0wsS0FBS00sSUFBSSxDQUFDO1lBQUVDLFFBQVE7UUFBSztRQUN6Qk4sUUFBUUQ7UUFFUixPQUFPO1lBQ0xBLEtBQUtRLEtBQUs7WUFDVlYsT0FBT1csY0FBYztRQUN2QjtJQUNGLEdBQUc7UUFBQ1o7UUFBU0Q7S0FBSztJQUVsQixPQUNFRSxVQUNBRSxzQkFDRSw4REFBQ2YsbUVBQVdBO1FBQUNhLFFBQVFBO2tCQUNuQiw0RUFBQ2QsbUVBQVdBO3NCQUNWLDRFQUFDRCxrRUFBVUE7Z0JBQUNpQixNQUFNQTs7a0NBQ2hCLDhEQUFDbEIscUVBQWFBOzs7OztrQ0FDZCw4REFBQ0Qsb0VBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekIsRUFBRTtHQXRDV2M7O1FBQ0tSLHVEQUFVQTs7O0tBRGZRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcm9vbXMvW3Jvb21JZF0vdmlkZW8tcGxheWVyLnRzeD9kOWFkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IFJvb20gfSBmcm9tICdAL2RiL3NjaGVtYSc7XHJcbmltcG9ydCB7XHJcbiAgQ2FsbCxcclxuICBDYWxsQ29udHJvbHMsXHJcbiAgU3BlYWtlckxheW91dCxcclxuICBTdHJlYW1DYWxsLFxyXG4gIFN0cmVhbVRoZW1lLFxyXG4gIFN0cmVhbVZpZGVvLFxyXG4gIFN0cmVhbVZpZGVvQ2xpZW50LFxyXG59IGZyb20gJ0BzdHJlYW0taW8vdmlkZW8tcmVhY3Qtc2RrJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJFQU1fQVBJX0tFWSE7XHJcbmNvbnN0IHRva2VuID1cclxuICAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb2lZekUxWVdOak5EWXRPVFkyTVMwME9ESXlMVGsyTWpJdFpqUTJaR00wWVdWaFpHVTNJbjAuRFQ5TE1HYi10NFIyb2c1alVwQU1xWm9qTkxZU2YydTNIeFp6cTJRVzg0RSc7XHJcblxyXG5leHBvcnQgY29uc3QgRGV2RmluZGVyVmlkZW8gPSAoeyByb29tIH06IHsgcm9vbTogUm9vbSB9KSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGU8U3RyZWFtVmlkZW9DbGllbnQgfCBudWxsPihudWxsKTtcclxuICAzO1xyXG4gIGNvbnN0IFtjYWxsLCBzZXRDYWxsXSA9IHVzZVN0YXRlPENhbGwgfCBudWxsPihudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyb29tKSByZXR1cm47XHJcbiAgICBpZiAoIXNlc3Npb24uZGF0YSkgcmV0dXJuO1xyXG4gICAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5kYXRhLnVzZXIuaWQ7XHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgU3RyZWFtVmlkZW9DbGllbnQoe1xyXG4gICAgICBhcGlLZXksXHJcbiAgICAgIHVzZXI6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gICAgICB0b2tlbixcclxuICAgIH0pO1xyXG4gICAgc2V0Q2xpZW50KGNsaWVudCk7XHJcbiAgICBjb25zdCBjYWxsID0gY2xpZW50LmNhbGwoJ2RlZmF1bHQnLCByb29tLmlkKTtcclxuICAgIGNhbGwuam9pbih7IGNyZWF0ZTogdHJ1ZSB9KTtcclxuICAgIHNldENhbGwoY2FsbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2FsbC5sZWF2ZSgpO1xyXG4gICAgICBjbGllbnQuZGlzY29ubmVjdFVzZXIoKTtcclxuICAgIH07XHJcbiAgfSwgW3Nlc3Npb24sIHJvb21dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGNsaWVudCAmJlxyXG4gICAgY2FsbCAmJiAoXHJcbiAgICAgIDxTdHJlYW1WaWRlbyBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgPFN0cmVhbVRoZW1lPlxyXG4gICAgICAgICAgPFN0cmVhbUNhbGwgY2FsbD17Y2FsbH0+XHJcbiAgICAgICAgICAgIDxTcGVha2VyTGF5b3V0IC8+XHJcbiAgICAgICAgICAgIDxDYWxsQ29udHJvbHMgLz5cclxuICAgICAgICAgIDwvU3RyZWFtQ2FsbD5cclxuICAgICAgICA8L1N0cmVhbVRoZW1lPlxyXG4gICAgICA8L1N0cmVhbVZpZGVvPlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDYWxsQ29udHJvbHMiLCJTcGVha2VyTGF5b3V0IiwiU3RyZWFtQ2FsbCIsIlN0cmVhbVRoZW1lIiwiU3RyZWFtVmlkZW8iLCJTdHJlYW1WaWRlb0NsaWVudCIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJFQU1fQVBJX0tFWSIsInRva2VuIiwiRGV2RmluZGVyVmlkZW8iLCJyb29tIiwic2Vzc2lvbiIsImNsaWVudCIsInNldENsaWVudCIsImNhbGwiLCJzZXRDYWxsIiwiZGF0YSIsInVzZXJJZCIsInVzZXIiLCJpZCIsImpvaW4iLCJjcmVhdGUiLCJsZWF2ZSIsImRpc2Nvbm5lY3RVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/rooms/[roomId]/video-player.tsx\n"));

/***/ })

});