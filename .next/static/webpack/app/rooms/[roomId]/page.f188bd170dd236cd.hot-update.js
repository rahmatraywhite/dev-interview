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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DevFinderVideo: function() { return /* binding */ DevFinderVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _stream_io_video_react_sdk_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stream-io/video-react-sdk/dist/css/styles.css */ \"(app-pages-browser)/./node_modules/@stream-io/video-react-sdk/dist/css/styles.css\");\n/* harmony import */ var _stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stream-io/video-react-sdk */ \"(app-pages-browser)/./node_modules/@stream-io/video-react-sdk/dist/index.es.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ DevFinderVideo auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;\nconst token = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYzE1YWNjNDYtOTY2MS00ODIyLTk2MjItZjQ2ZGM0YWVhZGU3In0.DT9LMGb-t4R2og5jUpAMqZojNLYSf2u3HxZzq2QW84E\";\nconst DevFinderVideo = (param)=>{\n    let { room } = param;\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [client, setClient] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [call, setCall] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!room || !session.data) return;\n        const userId = session.data.user.id;\n        var _session_data_user_name, _session_data_user_image;\n        const client = new _stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_2__.StreamVideoClient({\n            apiKey,\n            user: {\n                id: userId,\n                name: (_session_data_user_name = session.data.user.name) !== null && _session_data_user_name !== void 0 ? _session_data_user_name : undefined,\n                image: (_session_data_user_image = session.data.user.image) !== null && _session_data_user_image !== void 0 ? _session_data_user_image : undefined\n            },\n            token\n        });\n        setClient(client);\n        const newCall = client.call(\"default\", room.id);\n        newCall.join({\n            create: true\n        });\n        setCall(newCall);\n        return ()=>{\n            if (call) call.leave();\n            if (client) client.disconnectUser();\n        };\n    }, [\n        session,\n        room\n    ]);\n    return client && call && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_2__.StreamVideo, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_2__.StreamTheme, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_2__.StreamCall, {\n                call: call,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_2__.SpeakerLayout, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stream_io_video_react_sdk__WEBPACK_IMPORTED_MODULE_2__.CallControls, {\n                        onLeave: ()=>{\n                            router.push(\"/\");\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n                lineNumber: 56,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\TYO\\\\Desktop\\\\LEARN\\\\dev-finder\\\\src\\\\app\\\\rooms\\\\[roomId]\\\\video-player.tsx\",\n        lineNumber: 54,\n        columnNumber: 7\n    }, undefined);\n};\n_s(DevFinderVideo, \"xPaUZt0+wx042uW8K/AZTvI/d58=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = DevFinderVideo;\nvar _c;\n$RefreshReg$(_c, \"DevFinderVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcm9vbXMvW3Jvb21JZF0vdmlkZW8tcGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFd0Q7QUFTcEI7QUFDUztBQUNEO0FBQ0E7QUFHNUMsTUFBTVUsU0FBU0MsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQywwQkFBMEI7QUFDckQsTUFBTUMsUUFDSjtBQUVLLE1BQU1DLGlCQUFpQjtRQUFDLEVBQUVDLElBQUksRUFBa0I7O0lBQ3JELE1BQU1DLFVBQVVYLDJEQUFVQTtJQUMxQixNQUFNLENBQUNZLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQTJCO0lBQy9ELE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBYztJQUM5QyxNQUFNYyxTQUFTYiwwREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDUyxRQUFRLENBQUNDLFFBQVFNLElBQUksRUFBRTtRQUM1QixNQUFNQyxTQUFTUCxRQUFRTSxJQUFJLENBQUNFLElBQUksQ0FBQ0MsRUFBRTtZQUt6QlQseUJBQ0NBO1FBTFgsTUFBTUMsU0FBUyxJQUFJYix5RUFBaUJBLENBQUM7WUFDbkNLO1lBQ0FlLE1BQU07Z0JBQ0pDLElBQUlGO2dCQUNKRyxNQUFNVixDQUFBQSwwQkFBQUEsUUFBUU0sSUFBSSxDQUFDRSxJQUFJLENBQUNFLElBQUksY0FBdEJWLHFDQUFBQSwwQkFBMEJXO2dCQUNoQ0MsT0FBT1osQ0FBQUEsMkJBQUFBLFFBQVFNLElBQUksQ0FBQ0UsSUFBSSxDQUFDSSxLQUFLLGNBQXZCWixzQ0FBQUEsMkJBQTJCVztZQUNwQztZQUNBZDtRQUNGO1FBQ0FLLFVBQVVEO1FBQ1YsTUFBTVksVUFBVVosT0FBT0UsSUFBSSxDQUFDLFdBQVdKLEtBQUtVLEVBQUU7UUFDOUNJLFFBQVFDLElBQUksQ0FBQztZQUFFQyxRQUFRO1FBQUs7UUFDNUJYLFFBQVFTO1FBRVIsT0FBTztZQUNMLElBQUlWLE1BQU1BLEtBQUthLEtBQUs7WUFDcEIsSUFBSWYsUUFBUUEsT0FBT2dCLGNBQWM7UUFDbkM7SUFDRixHQUFHO1FBQUNqQjtRQUFTRDtLQUFLO0lBRWxCLE9BQ0VFLFVBQ0FFLHNCQUNFLDhEQUFDaEIsbUVBQVdBO1FBQUNjLFFBQVFBO2tCQUNuQiw0RUFBQ2YsbUVBQVdBO3NCQUNWLDRFQUFDRCxrRUFBVUE7Z0JBQUNrQixNQUFNQTs7a0NBQ2hCLDhEQUFDbkIscUVBQWFBOzs7OztrQ0FDZCw4REFBQ0Qsb0VBQVlBO3dCQUNYbUMsU0FBUzs0QkFDUGIsT0FBT2MsSUFBSSxDQUFDO3dCQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2QsRUFBRTtHQTlDV3JCOztRQUNLVCx1REFBVUE7UUFHWEcsc0RBQVNBOzs7S0FKYk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yb29tcy9bcm9vbUlkXS92aWRlby1wbGF5ZXIudHN4P2Q5YWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0ICdAc3RyZWFtLWlvL3ZpZGVvLXJlYWN0LXNkay9kaXN0L2Nzcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHtcclxuICBDYWxsLFxyXG4gIENhbGxDb250cm9scyxcclxuICBTcGVha2VyTGF5b3V0LFxyXG4gIFN0cmVhbUNhbGwsXHJcbiAgU3RyZWFtVGhlbWUsXHJcbiAgU3RyZWFtVmlkZW8sXHJcbiAgU3RyZWFtVmlkZW9DbGllbnQsXHJcbn0gZnJvbSAnQHN0cmVhbS1pby92aWRlby1yZWFjdC1zZGsnO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gJ0AvZGIvc2NoZW1hJztcclxuXHJcbmNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkVBTV9BUElfS0VZITtcclxuY29uc3QgdG9rZW4gPVxyXG4gICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlYMmxrSWpvaVl6RTFZV05qTkRZdE9UWTJNUzAwT0RJeUxUazJNakl0WmpRMlpHTTBZV1ZoWkdVM0luMC5EVDlMTUdiLXQ0UjJvZzVqVXBBTXFab2pOTFlTZjJ1M0h4WnpxMlFXODRFJztcclxuXHJcbmV4cG9ydCBjb25zdCBEZXZGaW5kZXJWaWRlbyA9ICh7IHJvb20gfTogeyByb29tOiBSb29tIH0pID0+IHtcclxuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZTxTdHJlYW1WaWRlb0NsaWVudCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtjYWxsLCBzZXRDYWxsXSA9IHVzZVN0YXRlPENhbGwgfCBudWxsPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcm9vbSB8fCAhc2Vzc2lvbi5kYXRhKSByZXR1cm47XHJcbiAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmRhdGEudXNlci5pZDtcclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBTdHJlYW1WaWRlb0NsaWVudCh7XHJcbiAgICAgIGFwaUtleSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGlkOiB1c2VySWQsXHJcbiAgICAgICAgbmFtZTogc2Vzc2lvbi5kYXRhLnVzZXIubmFtZSA/PyB1bmRlZmluZWQsXHJcbiAgICAgICAgaW1hZ2U6IHNlc3Npb24uZGF0YS51c2VyLmltYWdlID8/IHVuZGVmaW5lZCxcclxuICAgICAgfSxcclxuICAgICAgdG9rZW4sXHJcbiAgICB9KTtcclxuICAgIHNldENsaWVudChjbGllbnQpO1xyXG4gICAgY29uc3QgbmV3Q2FsbCA9IGNsaWVudC5jYWxsKCdkZWZhdWx0Jywgcm9vbS5pZCk7XHJcbiAgICBuZXdDYWxsLmpvaW4oeyBjcmVhdGU6IHRydWUgfSk7XHJcbiAgICBzZXRDYWxsKG5ld0NhbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChjYWxsKSBjYWxsLmxlYXZlKCk7XHJcbiAgICAgIGlmIChjbGllbnQpIGNsaWVudC5kaXNjb25uZWN0VXNlcigpO1xyXG4gICAgfTtcclxuICB9LCBbc2Vzc2lvbiwgcm9vbV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgY2xpZW50ICYmXHJcbiAgICBjYWxsICYmIChcclxuICAgICAgPFN0cmVhbVZpZGVvIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICA8U3RyZWFtVGhlbWU+XHJcbiAgICAgICAgICA8U3RyZWFtQ2FsbCBjYWxsPXtjYWxsfT5cclxuICAgICAgICAgICAgPFNwZWFrZXJMYXlvdXQgLz5cclxuICAgICAgICAgICAgPENhbGxDb250cm9sc1xyXG4gICAgICAgICAgICAgIG9uTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU3RyZWFtQ2FsbD5cclxuICAgICAgICA8L1N0cmVhbVRoZW1lPlxyXG4gICAgICA8L1N0cmVhbVZpZGVvPlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDYWxsQ29udHJvbHMiLCJTcGVha2VyTGF5b3V0IiwiU3RyZWFtQ2FsbCIsIlN0cmVhbVRoZW1lIiwiU3RyZWFtVmlkZW8iLCJTdHJlYW1WaWRlb0NsaWVudCIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJFQU1fQVBJX0tFWSIsInRva2VuIiwiRGV2RmluZGVyVmlkZW8iLCJyb29tIiwic2Vzc2lvbiIsImNsaWVudCIsInNldENsaWVudCIsImNhbGwiLCJzZXRDYWxsIiwicm91dGVyIiwiZGF0YSIsInVzZXJJZCIsInVzZXIiLCJpZCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJpbWFnZSIsIm5ld0NhbGwiLCJqb2luIiwiY3JlYXRlIiwibGVhdmUiLCJkaXNjb25uZWN0VXNlciIsIm9uTGVhdmUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/rooms/[roomId]/video-player.tsx\n"));

/***/ })

});