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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Ffam.sihlen%2Fdevelop%2Fdojohub%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffam.sihlen%2Fdevelop%2Fdojohub&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Ffam.sihlen%2Fdevelop%2Fdojohub%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffam.sihlen%2Fdevelop%2Fdojohub&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_fam_sihlen_develop_dojohub_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/fam.sihlen/develop/dojohub/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _Users_fam_sihlen_develop_dojohub_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmZhbS5zaWhsZW4lMkZkZXZlbG9wJTJGZG9qb2h1YiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZmYW0uc2lobGVuJTJGZGV2ZWxvcCUyRmRvam9odWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlwLWZhc3QtY29kZS8/YjA5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZmFtLnNpaGxlbi9kZXZlbG9wL2Rvam9odWIvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2ZhbS5zaWhsZW4vZGV2ZWxvcC9kb2pvaHViL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Ffam.sihlen%2Fdevelop%2Fdojohub%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffam.sihlen%2Fdevelop%2Fdojohub&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/next-auth */ \"(rsc)/./libs/next-auth.js\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_libs_next_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNjO0FBRS9DLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyx3REFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXAtZmFzdC1jb2RlLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWJzL25leHQtYXV0aFwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var daisyui_src_theming_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! daisyui/src/theming/themes */ \"(rsc)/./node_modules/daisyui/src/theming/themes.js\");\n/* harmony import */ var daisyui_src_theming_themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(daisyui_src_theming_themes__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    // REQUIRED\n    appName: \"Dojo Hub\",\n    // REQUIRED: a short description of your app for SEO tags (can be overwritten)\n    appDescription: \"The hub for jiu jitsu practitioners and learners\",\n    // REQUIRED (no https://, not trialing slash at the end, just the naked domain)\n    domainName: \"makerhub.dev\",\n    crisp: {\n        // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.\n        id: \"\",\n        // Hide Crisp by default, except on route \"/\". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below\n        onlyShowOnRoutes: [\n            \"/\"\n        ]\n    },\n    stripe: {\n        // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId\n        plans: [\n            {\n                // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)\n                priceId:  true ? \"price_1Niyy5AxyNprDp7iZIqEyD2h\" : 0,\n                //  REQUIRED - Name of the plan, displayed on the pricing page\n                name: \"Starter\",\n                // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others\n                description: \"Perfect for small projects\",\n                // The price you want to display, the one user will be charged on Stripe.\n                price: 79,\n                // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty\n                priceAnchor: 99,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    }\n                ]\n            },\n            {\n                // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true\n                isFeatured: true,\n                priceId:  true ? \"price_1O5KtcAxyNprDp7iftKnrrpw\" : 0,\n                name: \"Advanced\",\n                description: \"You need more power\",\n                price: 99,\n                priceAnchor: 149,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    },\n                    {\n                        name: \"1 year of updates\"\n                    },\n                    {\n                        name: \"24/7 support\"\n                    }\n                ]\n            }\n        ]\n    },\n    aws: {\n        // If you use AWS S3/Cloudfront, put values in here\n        bucket: \"bucket-name\",\n        bucketUrl: `https://bucket-name.s3.amazonaws.com/`,\n        cdn: \"https://cdn-id.cloudfront.net/\"\n    },\n    mailgun: {\n        // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)\n        subdomain: \"mg\",\n        // REQUIRED — Email 'From' field to be used when sending magic login links\n        fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,\n        // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..\n        fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,\n        // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support.\"\n        supportEmail: \"marc@mg.shipfa.st\",\n        // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.\n        forwardRepliesTo: \"marc.louvion@gmail.com\"\n    },\n    colors: {\n        // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.\n        theme: \"dark\",\n        // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after \"data-theme=\")\n        // OR you can just do this to use a custom color: main: \"#f37055\". HEX only.\n        main: (daisyui_src_theming_themes__WEBPACK_IMPORTED_MODULE_0___default().dark)[\"primary\"]\n    },\n    auth: {\n        // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API\n        loginUrl: \"/api/auth/signin\",\n        // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js\n        callbackUrl: \"/dashboard\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEO0FBRWhELE1BQU1DLFNBQVM7SUFDYixXQUFXO0lBQ1hDLFNBQVM7SUFDVCw4RUFBOEU7SUFDOUVDLGdCQUNFO0lBQ0YsK0VBQStFO0lBQy9FQyxZQUFZO0lBQ1pDLE9BQU87UUFDTCwyS0FBMks7UUFDM0tDLElBQUk7UUFDSix3SkFBd0o7UUFDeEpDLGtCQUFrQjtZQUFDO1NBQUk7SUFDekI7SUFDQUMsUUFBUTtRQUNOLCtJQUErSTtRQUMvSUMsT0FBTztZQUNMO2dCQUNFLG1JQUFtSTtnQkFDbklDLFNBQ0VDLEtBQXNDLEdBQ2xDLG1DQUNBLENBQVc7Z0JBQ2pCLDhEQUE4RDtnQkFDOURDLE1BQU07Z0JBQ04sK0dBQStHO2dCQUMvR0MsYUFBYTtnQkFDYix5RUFBeUU7Z0JBQ3pFQyxPQUFPO2dCQUNQLHNIQUFzSDtnQkFDdEhDLGFBQWE7Z0JBQ2JDLFVBQVU7b0JBQ1I7d0JBQ0VKLE1BQU07b0JBQ1I7b0JBQ0E7d0JBQUVBLE1BQU07b0JBQWE7b0JBQ3JCO3dCQUFFQSxNQUFNO29CQUFXO29CQUNuQjt3QkFBRUEsTUFBTTtvQkFBUztpQkFDbEI7WUFDSDtZQUNBO2dCQUNFLDhIQUE4SDtnQkFDOUhLLFlBQVk7Z0JBQ1pQLFNBQ0VDLEtBQXNDLEdBQ2xDLG1DQUNBLENBQVc7Z0JBQ2pCQyxNQUFNO2dCQUNOQyxhQUFhO2dCQUNiQyxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxVQUFVO29CQUNSO3dCQUNFSixNQUFNO29CQUNSO29CQUNBO3dCQUFFQSxNQUFNO29CQUFhO29CQUNyQjt3QkFBRUEsTUFBTTtvQkFBVztvQkFDbkI7d0JBQUVBLE1BQU07b0JBQVM7b0JBQ2pCO3dCQUFFQSxNQUFNO29CQUFvQjtvQkFDNUI7d0JBQUVBLE1BQU07b0JBQWU7aUJBQ3hCO1lBQ0g7U0FDRDtJQUNIO0lBQ0FNLEtBQUs7UUFDSCxtREFBbUQ7UUFDbkRDLFFBQVE7UUFDUkMsV0FBVyxDQUFDLHFDQUFxQyxDQUFDO1FBQ2xEQyxLQUFLO0lBQ1A7SUFDQUMsU0FBUztRQUNQLHNLQUFzSztRQUN0S0MsV0FBVztRQUNYLDBFQUEwRTtRQUMxRUMsYUFBYSxDQUFDLCtCQUErQixDQUFDO1FBQzlDLDBHQUEwRztRQUMxR0MsV0FBVyxDQUFDLG9DQUFvQyxDQUFDO1FBQ2pELDhKQUE4SjtRQUM5SkMsY0FBYztRQUNkLHFLQUFxSztRQUNyS0Msa0JBQWtCO0lBQ3BCO0lBQ0FDLFFBQVE7UUFDTixzTkFBc047UUFDdE5DLE9BQU87UUFDUCxrUEFBa1A7UUFDbFAsNEVBQTRFO1FBQzVFQyxNQUFNOUIsd0VBQWMsQ0FBQyxVQUFVO0lBQ2pDO0lBQ0ErQixNQUFNO1FBQ0osZ0tBQWdLO1FBQ2hLQyxVQUFVO1FBQ1Ysa1FBQWtRO1FBQ2xRQyxhQUFhO0lBQ2Y7QUFDRjtBQUVBLGlFQUFlaEMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXAtZmFzdC1jb2RlLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lcyBmcm9tIFwiZGFpc3l1aS9zcmMvdGhlbWluZy90aGVtZXNcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICAvLyBSRVFVSVJFRFxuICBhcHBOYW1lOiBcIkRvam8gSHViXCIsXG4gIC8vIFJFUVVJUkVEOiBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHlvdXIgYXBwIGZvciBTRU8gdGFncyAoY2FuIGJlIG92ZXJ3cml0dGVuKVxuICBhcHBEZXNjcmlwdGlvbjpcbiAgICBcIlRoZSBodWIgZm9yIGppdSBqaXRzdSBwcmFjdGl0aW9uZXJzIGFuZCBsZWFybmVyc1wiLFxuICAvLyBSRVFVSVJFRCAobm8gaHR0cHM6Ly8sIG5vdCB0cmlhbGluZyBzbGFzaCBhdCB0aGUgZW5kLCBqdXN0IHRoZSBuYWtlZCBkb21haW4pXG4gIGRvbWFpbk5hbWU6IFwibWFrZXJodWIuZGV2XCIsXG4gIGNyaXNwOiB7XG4gICAgLy8gQ3Jpc3Agd2Vic2l0ZSBJRC4gSUYgWU9VIERPTidUIFVTRSBDUklTUDoganVzdCByZW1vdmUgdGhpcyA9PiBUaGVuIGFkZCBhIHN1cHBvcnQgZW1haWwgaW4gdGhpcyBjb25maWcgZmlsZSAobWFpbGd1bi5zdXBwb3J0RW1haWwpIG90aGVyd2lzZSBjdXN0b21lciBzdXBwb3J0IHdvbid0IHdvcmsuXG4gICAgaWQ6IFwiXCIsXG4gICAgLy8gSGlkZSBDcmlzcCBieSBkZWZhdWx0LCBleGNlcHQgb24gcm91dGUgXCIvXCIuIENyaXNwIGlzIHRvZ2dsZWQgd2l0aCA8QnV0dG9uU3VwcG9ydC8+LiBJZiB5b3Ugd2FudCB0byBzaG93IENyaXNwIG9uIGV2ZXJ5IHJvdXRlcywganVzdCByZW1vdmUgdGhpcyBiZWxvd1xuICAgIG9ubHlTaG93T25Sb3V0ZXM6IFtcIi9cIl0sXG4gIH0sXG4gIHN0cmlwZToge1xuICAgIC8vIENyZWF0ZSBtdWx0aXBsZSBwbGFucyBpbiB5b3VyIFN0cmlwZSBkYXNoYm9hcmQsIHRoZW4gYWRkIHRoZW0gaGVyZS4gWW91IGNhbiBhZGQgYXMgbWFueSBwbGFucyBhcyB5b3Ugd2FudCwganVzdCBtYWtlIHN1cmUgdG8gYWRkIHRoZSBwcmljZUlkXG4gICAgcGxhbnM6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gUkVRVUlSRUQg4oCUIHdlIHVzZSB0aGlzIHRvIGZpbmQgdGhlIHBsYW4gaW4gdGhlIHdlYmhvb2sgKGZvciBpbnN0YW5jZSBpZiB5b3Ugd2FudCB0byB1cGRhdGUgdGhlIHVzZXIncyBjcmVkaXRzIGJhc2VkIG9uIHRoZSBwbGFuKVxuICAgICAgICBwcmljZUlkOlxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCJcbiAgICAgICAgICAgID8gXCJwcmljZV8xTml5eTVBeHlOcHJEcDdpWklxRXlEMmhcIlxuICAgICAgICAgICAgOiBcInByaWNlXzQ1NlwiLFxuICAgICAgICAvLyAgUkVRVUlSRUQgLSBOYW1lIG9mIHRoZSBwbGFuLCBkaXNwbGF5ZWQgb24gdGhlIHByaWNpbmcgcGFnZVxuICAgICAgICBuYW1lOiBcIlN0YXJ0ZXJcIixcbiAgICAgICAgLy8gQSBmcmllbmRseSBkZXNjcmlwdGlvbiBvZiB0aGUgcGxhbiwgZGlzcGxheWVkIG9uIHRoZSBwcmljaW5nIHBhZ2UuIFRpcDogZXhwbGFpbiB3aHkgdGhpcyBwbGFuIGFuZCBub3Qgb3RoZXJzXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBlcmZlY3QgZm9yIHNtYWxsIHByb2plY3RzXCIsXG4gICAgICAgIC8vIFRoZSBwcmljZSB5b3Ugd2FudCB0byBkaXNwbGF5LCB0aGUgb25lIHVzZXIgd2lsbCBiZSBjaGFyZ2VkIG9uIFN0cmlwZS5cbiAgICAgICAgcHJpY2U6IDc5LFxuICAgICAgICAvLyBJZiB5b3UgaGF2ZSBhbiBhbmNob3IgcHJpY2UgKGkuZS4gJDI5KSB0aGF0IHlvdSB3YW50IHRvIGRpc3BsYXkgY3Jvc3NlZCBvdXQsIHB1dCBpdCBoZXJlLiBPdGhlcndpc2UsIGxlYXZlIGl0IGVtcHR5XG4gICAgICAgIHByaWNlQW5jaG9yOiA5OSxcbiAgICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk5leHRKUyBib2lsZXJwbGF0ZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlVzZXIgb2F1dGhcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJEYXRhYmFzZVwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkVtYWlsc1wiIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBUaGlzIHBsYW4gd2lsbCBsb29rIGRpZmZlcmVudCBvbiB0aGUgcHJpY2luZyBwYWdlLCBpdCB3aWxsIGJlIGhpZ2hsaWdodGVkLiBZb3UgY2FuIG9ubHkgaGF2ZSBvbmUgcGxhbiB3aXRoIGlzRmVhdHVyZWQ6IHRydWVcbiAgICAgICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgICAgICAgcHJpY2VJZDpcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgICAgICAgICA/IFwicHJpY2VfMU81S3RjQXh5TnByRHA3aWZ0S25ycnB3XCJcbiAgICAgICAgICAgIDogXCJwcmljZV80NTZcIixcbiAgICAgICAgbmFtZTogXCJBZHZhbmNlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJZb3UgbmVlZCBtb3JlIHBvd2VyXCIsXG4gICAgICAgIHByaWNlOiA5OSxcbiAgICAgICAgcHJpY2VBbmNob3I6IDE0OSxcbiAgICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk5leHRKUyBib2lsZXJwbGF0ZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIlVzZXIgb2F1dGhcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJEYXRhYmFzZVwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkVtYWlsc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIjEgeWVhciBvZiB1cGRhdGVzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiMjQvNyBzdXBwb3J0XCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYXdzOiB7XG4gICAgLy8gSWYgeW91IHVzZSBBV1MgUzMvQ2xvdWRmcm9udCwgcHV0IHZhbHVlcyBpbiBoZXJlXG4gICAgYnVja2V0OiBcImJ1Y2tldC1uYW1lXCIsXG4gICAgYnVja2V0VXJsOiBgaHR0cHM6Ly9idWNrZXQtbmFtZS5zMy5hbWF6b25hd3MuY29tL2AsXG4gICAgY2RuOiBcImh0dHBzOi8vY2RuLWlkLmNsb3VkZnJvbnQubmV0L1wiLFxuICB9LFxuICBtYWlsZ3VuOiB7XG4gICAgLy8gc3ViZG9tYWluIHRvIHVzZSB3aGVuIHNlbmRpbmcgZW1haWxzLCBpZiB5b3UgZG9uJ3QgaGF2ZSBhIHN1YmRvbWFpbiwganVzdCByZW1vdmUgaXQuIEhpZ2hseSByZWNvbW1lbmRlZCB0byBoYXZlIG9uZSAoaS5lLiBtZy55b3VyZG9tYWluLmNvbSBvciBtYWlsLnlvdXJkb21haW4uY29tKVxuICAgIHN1YmRvbWFpbjogXCJtZ1wiLFxuICAgIC8vIFJFUVVJUkVEIOKAlCBFbWFpbCAnRnJvbScgZmllbGQgdG8gYmUgdXNlZCB3aGVuIHNlbmRpbmcgbWFnaWMgbG9naW4gbGlua3NcbiAgICBmcm9tTm9SZXBseTogYFNoaXBGYXN0IDxub3JlcGx5QG1nLnNoaXBmYS5zdD5gLFxuICAgIC8vIFJFUVVJUkVEIOKAlCBFbWFpbCAnRnJvbScgZmllbGQgdG8gYmUgdXNlZCB3aGVuIHNlbmRpbmcgb3RoZXIgZW1haWxzLCBsaWtlIGFiYW5kb25lZCBjYXJ0cywgdXBkYXRlcyBldGMuLlxuICAgIGZyb21BZG1pbjogYE1hcmMgYXQgU2hpcEZhc3QgPG1hcmNAbWcuc2hpcGZhLnN0PmAsXG4gICAgLy8gRW1haWwgc2hvd24gdG8gY3VzdG9tZXIgaWYgbmVlZCBzdXBwb3J0LiBMZWF2ZSBlbXB0eSBpZiBub3QgbmVlZGVkID0+IGlmIGVtcHR5LCBzZXQgdXAgQ3Jpc3AgYWJvdmUsIG90aGVyd2lzZSB5b3Ugd29uJ3QgYmUgYWJsZSB0byBvZmZlciBjdXN0b21lciBzdXBwb3J0LlwiXG4gICAgc3VwcG9ydEVtYWlsOiBcIm1hcmNAbWcuc2hpcGZhLnN0XCIsXG4gICAgLy8gV2hlbiBzb21lb25lIHJlcGxpZXMgdG8gc3VwcG9ydEVtYWlsIHNlbnQgYnkgdGhlIGFwcCwgZm9yd2FyZCBpdCB0byB0aGUgZW1haWwgYmVsb3cgKG90aGVyd2lzZSBpdCdzIGxvc3QpLiBJZiB5b3Ugc2V0IHN1cHBvcnRFbWFpbCB0byBlbXB0eSwgdGhpcyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgZm9yd2FyZFJlcGxpZXNUbzogXCJtYXJjLmxvdXZpb25AZ21haWwuY29tXCIsXG4gIH0sXG4gIGNvbG9yczoge1xuICAgIC8vIFJFUVVJUkVEIOKAlCBUaGUgRGFpc3lVSSB0aGVtZSB0byB1c2UgKGFkZGVkIHRvIHRoZSBtYWluIGxheW91dC5qcykuIExlYXZlIGJsYW5rIGZvciBkZWZhdWx0IChsaWdodCAmIGRhcmsgbW9kZSkuIElmIHlvdSBhbnkgb3RoZXIgdGhlbWUgdGhhbiBsaWdodC9kYXJrLCB5b3UgbmVlZCB0byBhZGQgaXQgaW4gY29uZmlnLnRhaWx3aW5kLmpzIGluIGRhaXN5dWkudGhlbWVzLlxuICAgIHRoZW1lOiBcImRhcmtcIixcbiAgICAvLyBSRVFVSVJFRCDigJQgVGhpcyBjb2xvciB3aWxsIGJlIHJlZmxlY3RlZCBvbiB0aGUgd2hvbGUgYXBwIG91dHNpZGUgb2YgdGhlIGRvY3VtZW50IChsb2FkaW5nIGJhciwgQ2hyb21lIHRhYnMsIGV0Yy4uKS4gQnkgZGVmYXVsdCBpdCB0YWtlcyB0aGUgcHJpbWFyeSBjb2xvciBmcm9tIHlvdXIgRGFpc3lVSSB0aGVtZSAobWFrZSBzdXJlIHRvIHVwZGF0ZSB5b3VyIHRoZSB0aGVtZSBuYW1lIGFmdGVyIFwiZGF0YS10aGVtZT1cIilcbiAgICAvLyBPUiB5b3UgY2FuIGp1c3QgZG8gdGhpcyB0byB1c2UgYSBjdXN0b20gY29sb3I6IG1haW46IFwiI2YzNzA1NVwiLiBIRVggb25seS5cbiAgICBtYWluOiB0aGVtZXNbXCJkYXJrXCJdW1wicHJpbWFyeVwiXSxcbiAgfSxcbiAgYXV0aDoge1xuICAgIC8vIFJFUVVJUkVEIOKAlCB0aGUgcGF0aCB0byBsb2cgaW4gdXNlcnMuIEl0J3MgdXNlIHRvIHByb3RlY3QgcHJpdmF0ZSByb3V0ZXMgKGxpa2UgL2Rhc2hib2FyZCkuIEl0J3MgdXNlZCBpbiBhcGlDbGllbnQgKC9saWJzL2FwaS5qcykgdXBvbiA0MDEgZXJyb3JzIGZyb20gb3VyIEFQSVxuICAgIGxvZ2luVXJsOiBcIi9hcGkvYXV0aC9zaWduaW5cIixcbiAgICAvLyBSRVFVSVJFRCDigJQgdGhlIHBhdGggeW91IHdhbnQgdG8gcmVkaXJlY3QgdXNlcnMgYWZ0ZXIgc3VjY2Vzc2Z1bGwgbG9naW4gKGkuZS4gL2Rhc2hib2FyZCwgL3ByaXZhdGUpLiBUaGlzIGlzIG5vcm1hbGx5IGEgcHJpdmF0ZSBwYWdlIGZvciB1c2VycyB0byBtYW5hZ2UgdGhlaXIgYWNjb3VudHMuIEl0J3MgdXNlZCBpbiBhcGlDbGllbnQgKC9saWJzL2FwaS5qcykgdXBvbiA0MDEgZXJyb3JzIGZyb20gb3VyIEFQSSAmIGluIEJ1dHRvblNpZ25pbi5qc1xuICAgIGNhbGxiYWNrVXJsOiBcIi9kYXNoYm9hcmRcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLCJuYW1lcyI6WyJ0aGVtZXMiLCJjb25maWciLCJhcHBOYW1lIiwiYXBwRGVzY3JpcHRpb24iLCJkb21haW5OYW1lIiwiY3Jpc3AiLCJpZCIsIm9ubHlTaG93T25Sb3V0ZXMiLCJzdHJpcGUiLCJwbGFucyIsInByaWNlSWQiLCJwcm9jZXNzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwcmljZUFuY2hvciIsImZlYXR1cmVzIiwiaXNGZWF0dXJlZCIsImF3cyIsImJ1Y2tldCIsImJ1Y2tldFVybCIsImNkbiIsIm1haWxndW4iLCJzdWJkb21haW4iLCJmcm9tTm9SZXBseSIsImZyb21BZG1pbiIsInN1cHBvcnRFbWFpbCIsImZvcndhcmRSZXBsaWVzVG8iLCJjb2xvcnMiLCJ0aGVtZSIsIm1haW4iLCJhdXRoIiwibG9naW5VcmwiLCJjYWxsYmFja1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./config.js\n");

/***/ }),

/***/ "(rsc)/./libs/mongo.js":
/*!***********************!*\
  !*** ./libs/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// This lib is use just to connect to the database in next-auth.\n// We don't use it anywhere else in the API routes—we use mongoose.js instead (to be able to use models)\n// See /libs/nextauth.js file.\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!uri) {\n    console.group(\"⚠️ MONGODB_URI missing from .env\");\n    console.error(\"It's not mandatory but a database is required for Magic Links.\");\n    console.error(\"If you don't need it, remove the code from /libs/next-auth.js (see connectMongo())\");\n    console.groupEnd();\n} else if (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxnRUFBZ0U7QUFDaEUsd0dBQXdHO0FBQ3hHLDhCQUE4QjtBQUU5QixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNOLEtBQUs7SUFDUk8sUUFBUUMsS0FBSyxDQUFDO0lBQ2RELFFBQVFFLEtBQUssQ0FDWDtJQUVGRixRQUFRRSxLQUFLLENBQ1g7SUFFRkYsUUFBUUcsUUFBUTtBQUNsQixPQUFPLElBQUlULElBQXNDLEVBQUU7SUFDakQsSUFBSSxDQUFDVSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQlAsU0FBUyxJQUFJTixnREFBV0EsQ0FBQ0MsS0FBS0k7UUFDOUJPLE9BQU9DLG1CQUFtQixHQUFHUCxPQUFPUSxPQUFPO0lBQzdDO0lBQ0FQLGdCQUFnQkssT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFHTjtBQUVELGlFQUFlTixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcC1mYXN0LWNvZGUvLi9saWJzL21vbmdvLmpzP2FlZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vLyBUaGlzIGxpYiBpcyB1c2UganVzdCB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZSBpbiBuZXh0LWF1dGguXG4vLyBXZSBkb24ndCB1c2UgaXQgYW55d2hlcmUgZWxzZSBpbiB0aGUgQVBJIHJvdXRlc+KAlHdlIHVzZSBtb25nb29zZS5qcyBpbnN0ZWFkICh0byBiZSBhYmxlIHRvIHVzZSBtb2RlbHMpXG4vLyBTZWUgL2xpYnMvbmV4dGF1dGguanMgZmlsZS5cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge307XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKCF1cmkpIHsgIFxuICBjb25zb2xlLmdyb3VwKFwi4pqg77iPIE1PTkdPREJfVVJJIG1pc3NpbmcgZnJvbSAuZW52XCIpO1xuICBjb25zb2xlLmVycm9yKFxuICAgIFwiSXQncyBub3QgbWFuZGF0b3J5IGJ1dCBhIGRhdGFiYXNlIGlzIHJlcXVpcmVkIGZvciBNYWdpYyBMaW5rcy5cIlxuICApO1xuICBjb25zb2xlLmVycm9yKFxuICAgIFwiSWYgeW91IGRvbid0IG5lZWQgaXQsIHJlbW92ZSB0aGUgY29kZSBmcm9tIC9saWJzL25leHQtYXV0aC5qcyAoc2VlIGNvbm5lY3RNb25nbygpKVwiXG4gICk7XG4gIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbn0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiY29uc29sZSIsImdyb3VwIiwiZXJyb3IiLCJncm91cEVuZCIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongo.js\n");

/***/ }),

/***/ "(rsc)/./libs/next-auth.js":
/*!***************************!*\
  !*** ./libs/next-auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"(rsc)/./node_modules/next-auth/providers/email.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"(rsc)/./config.js\");\n/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mongo */ \"(rsc)/./libs/mongo.js\");\n\n\n\n\n\nconst authOptions = {\n    // Set any random key in .env.local\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            // Follow the \"Login with Google\" tutorial to get your credentials\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            async profile (profile) {\n                return {\n                    id: profile.sub,\n                    name: profile.given_name ? profile.given_name : profile.name,\n                    email: profile.email,\n                    image: profile.picture,\n                    createdAt: new Date()\n                };\n            }\n        }),\n        // Follow the \"Login with Email\" tutorial to set up your email server\n        // Requires a MongoDB database. Set MONOGODB_URI env variable.\n        ..._mongo__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? [\n            (0,next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n                server: process.env.EMAIL_SERVER,\n                from: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mailgun.fromNoReply\n            })\n        ] : []\n    ],\n    // New users will be saved in Database (MongoDB Atlas). Each user (model) has some fields like name, email, image, etc..\n    // Requires a MongoDB database. Set MONOGODB_URI env variable.\n    // Learn more about the model type: https://next-auth.js.org/v3/adapters/models\n    ..._mongo__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && {\n        adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_mongo__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n    },\n    callbacks: {\n        session: async ({ session, token })=>{\n            if (session?.user) {\n                session.user.id = token.sub;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    theme: {\n        brandColor: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.main,\n        // Add you own logo below. Recommended size is rectangle (i.e. 200x50px) and show your logo + name.\n        // It will be used in the login flow to display your logo. If you don't add it, it will look faded.\n        logo: `https://${_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].domainName}/logoAndName.png`\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL25leHQtYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDRjtBQUNDO0FBQ3pCO0FBQ0s7QUFFNUIsTUFBTUssY0FBYztJQUN6QixtQ0FBbUM7SUFDbkNDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUNuQ0MsV0FBVztRQUNUVixzRUFBY0EsQ0FBQztZQUNiLGtFQUFrRTtZQUNsRVcsVUFBVUosUUFBUUMsR0FBRyxDQUFDSSxTQUFTO1lBQy9CQyxjQUFjTixRQUFRQyxHQUFHLENBQUNNLGFBQWE7WUFDdkMsTUFBTUMsU0FBUUEsT0FBTztnQkFDbkIsT0FBTztvQkFDTEMsSUFBSUQsUUFBUUUsR0FBRztvQkFDZkMsTUFBTUgsUUFBUUksVUFBVSxHQUFHSixRQUFRSSxVQUFVLEdBQUdKLFFBQVFHLElBQUk7b0JBQzVERSxPQUFPTCxRQUFRSyxLQUFLO29CQUNwQkMsT0FBT04sUUFBUU8sT0FBTztvQkFDdEJDLFdBQVcsSUFBSUM7Z0JBQ2pCO1lBQ0Y7UUFDRjtRQUNBLHFFQUFxRTtRQUNyRSw4REFBOEQ7V0FDMURwQiw4Q0FBWUEsR0FDWjtZQUNFSCxxRUFBYUEsQ0FBQztnQkFDWndCLFFBQVFsQixRQUFRQyxHQUFHLENBQUNrQixZQUFZO2dCQUNoQ0MsTUFBTXhCLCtDQUFNQSxDQUFDeUIsT0FBTyxDQUFDQyxXQUFXO1lBQ2xDO1NBQ0QsR0FDRCxFQUFFO0tBQ1A7SUFDRCx3SEFBd0g7SUFDeEgsOERBQThEO0lBQzlELCtFQUErRTtJQUMvRSxHQUFJekIsOENBQVlBLElBQUk7UUFBRTBCLFNBQVM1QixxRUFBY0EsQ0FBQ0UsOENBQVlBO0lBQUUsQ0FBQztJQUU3RDJCLFdBQVc7UUFDVEMsU0FBUyxPQUFPLEVBQUVBLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQ2hDLElBQUlELFNBQVNFLE1BQU07Z0JBQ2pCRixRQUFRRSxJQUFJLENBQUNsQixFQUFFLEdBQUdpQixNQUFNaEIsR0FBRztZQUM3QjtZQUNBLE9BQU9lO1FBQ1Q7SUFDRjtJQUNBQSxTQUFTO1FBQ1BHLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xDLFlBQVlsQywrQ0FBTUEsQ0FBQ21DLE1BQU0sQ0FBQ0MsSUFBSTtRQUM5QixtR0FBbUc7UUFDbkcsbUdBQW1HO1FBQ25HQyxNQUFNLENBQUMsUUFBUSxFQUFFckMsK0NBQU1BLENBQUNzQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7SUFDdEQ7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcC1mYXN0LWNvZGUvLi9saWJzL25leHQtYXV0aC5qcz8zM2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCI7XG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIkAvY29uZmlnXCI7XG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuL21vbmdvXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgLy8gU2V0IGFueSByYW5kb20ga2V5IGluIC5lbnYubG9jYWxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIC8vIEZvbGxvdyB0aGUgXCJMb2dpbiB3aXRoIEdvb2dsZVwiIHR1dG9yaWFsIHRvIGdldCB5b3VyIGNyZWRlbnRpYWxzXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgICAgYXN5bmMgcHJvZmlsZShwcm9maWxlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHByb2ZpbGUuc3ViLFxuICAgICAgICAgIG5hbWU6IHByb2ZpbGUuZ2l2ZW5fbmFtZSA/IHByb2ZpbGUuZ2l2ZW5fbmFtZSA6IHByb2ZpbGUubmFtZSxcbiAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gRm9sbG93IHRoZSBcIkxvZ2luIHdpdGggRW1haWxcIiB0dXRvcmlhbCB0byBzZXQgdXAgeW91ciBlbWFpbCBzZXJ2ZXJcbiAgICAvLyBSZXF1aXJlcyBhIE1vbmdvREIgZGF0YWJhc2UuIFNldCBNT05PR09EQl9VUkkgZW52IHZhcmlhYmxlLlxuICAgIC4uLihjb25uZWN0TW9uZ29cbiAgICAgID8gW1xuICAgICAgICAgIEVtYWlsUHJvdmlkZXIoe1xuICAgICAgICAgICAgc2VydmVyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVIsXG4gICAgICAgICAgICBmcm9tOiBjb25maWcubWFpbGd1bi5mcm9tTm9SZXBseSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gIF0sXG4gIC8vIE5ldyB1c2VycyB3aWxsIGJlIHNhdmVkIGluIERhdGFiYXNlIChNb25nb0RCIEF0bGFzKS4gRWFjaCB1c2VyIChtb2RlbCkgaGFzIHNvbWUgZmllbGRzIGxpa2UgbmFtZSwgZW1haWwsIGltYWdlLCBldGMuLlxuICAvLyBSZXF1aXJlcyBhIE1vbmdvREIgZGF0YWJhc2UuIFNldCBNT05PR09EQl9VUkkgZW52IHZhcmlhYmxlLlxuICAvLyBMZWFybiBtb3JlIGFib3V0IHRoZSBtb2RlbCB0eXBlOiBodHRwczovL25leHQtYXV0aC5qcy5vcmcvdjMvYWRhcHRlcnMvbW9kZWxzXG4gIC4uLihjb25uZWN0TW9uZ28gJiYgeyBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjb25uZWN0TW9uZ28pIH0pLFxuXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcbiAgICAgIGlmIChzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgdGhlbWU6IHtcbiAgICBicmFuZENvbG9yOiBjb25maWcuY29sb3JzLm1haW4sXG4gICAgLy8gQWRkIHlvdSBvd24gbG9nbyBiZWxvdy4gUmVjb21tZW5kZWQgc2l6ZSBpcyByZWN0YW5nbGUgKGkuZS4gMjAweDUwcHgpIGFuZCBzaG93IHlvdXIgbG9nbyArIG5hbWUuXG4gICAgLy8gSXQgd2lsbCBiZSB1c2VkIGluIHRoZSBsb2dpbiBmbG93IHRvIGRpc3BsYXkgeW91ciBsb2dvLiBJZiB5b3UgZG9uJ3QgYWRkIGl0LCBpdCB3aWxsIGxvb2sgZmFkZWQuXG4gICAgbG9nbzogYGh0dHBzOi8vJHtjb25maWcuZG9tYWluTmFtZX0vbG9nb0FuZE5hbWUucG5nYCxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiR29vZ2xlUHJvdmlkZXIiLCJFbWFpbFByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjb25maWciLCJjb25uZWN0TW9uZ28iLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJwcm9maWxlIiwiaWQiLCJzdWIiLCJuYW1lIiwiZ2l2ZW5fbmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJwaWN0dXJlIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInNlcnZlciIsIkVNQUlMX1NFUlZFUiIsImZyb20iLCJtYWlsZ3VuIiwiZnJvbU5vUmVwbHkiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsInN0cmF0ZWd5IiwidGhlbWUiLCJicmFuZENvbG9yIiwiY29sb3JzIiwibWFpbiIsImxvZ28iLCJkb21haW5OYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/next-auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/daisyui","vendor-chunks/jose","vendor-chunks/nodemailer","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Ffam.sihlen%2Fdevelop%2Fdojohub%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffam.sihlen%2Fdevelop%2Fdojohub&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();