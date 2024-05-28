"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-plausible";
exports.ids = ["vendor-chunks/next-plausible"];
exports.modules = {

/***/ "(rsc)/./node_modules/next-plausible/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-plausible/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlausibleProvider),\n/* harmony export */   usePlausible: () => (/* binding */ usePlausible),\n/* harmony export */   withPlausibleProxy: () => (/* binding */ withPlausibleProxy)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"(rsc)/./node_modules/next/dist/api/script.js\");\n\n\n\nfunction usePlausible() {\r\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (eventName, ...rest) {\r\n        var _a, _b;\r\n        return (_b = (_a = window).plausible) === null || _b === void 0 ? void 0 : _b.call(_a, eventName, rest[0]);\r\n    }, []);\r\n}\n\n/******************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\n\nfunction getCombinations(elements) {\r\n    const combinations = [];\r\n    for (let i = 0; i < elements.length; i++) {\r\n        combinations.push([elements[i]]);\r\n        if (i < elements.length - 1) {\r\n            getCombinations(elements.slice(i + 1)).forEach((combination) => {\r\n                combinations.push([elements[i], ...combination]);\r\n            });\r\n        }\r\n    }\r\n    return combinations;\r\n}\n\nconst allModifiers = [\r\n    'exclusions',\r\n    'local',\r\n    'manual',\r\n    'outbound-links',\r\n    'file-downloads',\r\n    'tagged-events',\r\n    'pageview-props',\r\n    'revenue',\r\n    'hash',\r\n];\r\nconst getScriptPath = (options, ...modifiers) => {\r\n    var _a, _b;\r\n    let basePath = (_a = options.basePath) !== null && _a !== void 0 ? _a : '';\r\n    if (options.subdirectory) {\r\n        basePath += `/${options.subdirectory}`;\r\n    }\r\n    return `${basePath}/js/${[\r\n        (_b = options.scriptName) !== null && _b !== void 0 ? _b : 'script',\r\n        ...modifiers.sort().filter((modifier) => modifier !== null),\r\n    ].join('.')}.js`;\r\n};\r\nconst plausibleDomain = 'https://plausible.io';\r\nconst getRemoteScriptName = (selfHosted) => selfHosted ? 'plausible' : 'script';\r\nconst getDomain = (options) => { var _a; return (_a = options.customDomain) !== null && _a !== void 0 ? _a : plausibleDomain; };\r\nconst getApiEndpoint = (options) => {\r\n    var _a, _b;\r\n    return `${(_a = options.basePath) !== null && _a !== void 0 ? _a : ''}/${(_b = options.subdirectory) !== null && _b !== void 0 ? _b : 'proxy'}/api/event${options.trailingSlash ? '/' : ''}`;\r\n};\n\nfunction withPlausibleProxy(options = {}) {\r\n    return (nextConfig) => {\r\n        const nextPlausiblePublicProxyOptions = Object.assign(Object.assign({}, options), { trailingSlash: !!nextConfig.trailingSlash, basePath: nextConfig.basePath });\r\n        const nextPlausibleEnv = {\r\n            next_plausible_proxy: 'true',\r\n            next_plausible_trailingSlash: nextPlausiblePublicProxyOptions.trailingSlash ? 'true' : undefined,\r\n            next_plausible_basePath: nextPlausiblePublicProxyOptions.basePath,\r\n            next_plausible_customDomain: nextPlausiblePublicProxyOptions.customDomain,\r\n            next_plausible_scriptName: nextPlausiblePublicProxyOptions.scriptName,\r\n            next_plausible_subdirectory: nextPlausiblePublicProxyOptions.subdirectory,\r\n        };\r\n        return Object.assign(Object.assign({}, nextConfig), { env: Object.assign(Object.assign({}, nextConfig.env), Object.fromEntries(Object.entries(nextPlausibleEnv).filter(([_, value]) => value !== undefined))), rewrites: () => __awaiter(this, void 0, void 0, function* () {\r\n                var _a;\r\n                const domain = getDomain(options);\r\n                const getRemoteScript = (...modifiers) => {\r\n                    var _a;\r\n                    return ((_a = process.env.NEXT_PLAUSIBLE_TEST_DOMAIN) !== null && _a !== void 0 ? _a : domain) +\r\n                        getScriptPath({\r\n                            scriptName: getRemoteScriptName(domain !== plausibleDomain),\r\n                        }, ...modifiers);\r\n                };\r\n                const plausibleRewrites = [\r\n                    {\r\n                        source: getScriptPath(options),\r\n                        destination: getRemoteScript(),\r\n                    },\r\n                    ...getCombinations(allModifiers).map((modifiers) => ({\r\n                        source: getScriptPath(options, ...modifiers),\r\n                        destination: getRemoteScript(...modifiers),\r\n                    })),\r\n                    {\r\n                        source: getApiEndpoint(Object.assign(Object.assign({}, nextPlausiblePublicProxyOptions), { basePath: '' })),\r\n                        destination: `${domain}/api/event`,\r\n                    },\r\n                ];\r\n                if (process.env.NEXT_PLAUSIBLE_DEBUG) {\r\n                    console.log('plausibleRewrites = ', plausibleRewrites);\r\n                }\r\n                const rewrites = yield ((_a = nextConfig.rewrites) === null || _a === void 0 ? void 0 : _a.call(nextConfig));\r\n                if (!rewrites) {\r\n                    return plausibleRewrites;\r\n                }\r\n                else if (Array.isArray(rewrites)) {\r\n                    return rewrites.concat(plausibleRewrites);\r\n                }\r\n                else if (rewrites.afterFiles) {\r\n                    rewrites.afterFiles = rewrites.afterFiles.concat(plausibleRewrites);\r\n                    return rewrites;\r\n                }\r\n                else {\r\n                    rewrites.afterFiles = plausibleRewrites;\r\n                    return rewrites;\r\n                }\r\n            }) });\r\n    };\r\n}\n\nfunction PlausibleProvider(props) {\r\n    var _a;\r\n    const { enabled =  false &&\r\n        (0), } = props;\r\n    const proxyOptions = process.env.next_plausible_proxy\r\n        ? {\r\n            trailingSlash: process.env.next_plausible_trailingSlash === 'true',\r\n            basePath: process.env.next_plausible_basePath,\r\n            customDomain: process.env.next_plausible_customDomain,\r\n            scriptName: process.env.next_plausible_scriptName,\r\n            subdirectory: process.env.next_plausible_subdirectory,\r\n        }\r\n        : undefined;\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\r\n        enabled && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_script__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object.assign({ async: true, defer: true, \"data-api\": proxyOptions ? getApiEndpoint(proxyOptions) : undefined, \"data-domain\": props.domain, \"data-exclude\": props.exclude, src: (proxyOptions ? '' : getDomain(props)) +\r\n                getScriptPath(Object.assign(Object.assign({}, proxyOptions), { scriptName: proxyOptions\r\n                        ? proxyOptions.scriptName\r\n                        : getRemoteScriptName(props.selfHosted) }), props.trackLocalhost ? 'local' : null, props.manualPageviews ? 'manual' : null, props.pageviewProps ? 'pageview-props' : null, props.trackOutboundLinks ? 'outbound-links' : null, props.exclude ? 'exclusions' : null, props.revenue ? 'revenue' : null, props.trackFileDownloads ? 'file-downloads' : null, props.taggedEvents ? 'tagged-events' : null, props.hash ? 'hash' : null), integrity: props.integrity, crossOrigin: props.integrity ? 'anonymous' : undefined }, (typeof props.pageviewProps === 'object'\r\n            ? Object.fromEntries(Object.entries(props.pageviewProps).map(([k, v]) => [\r\n                `event-${k}`,\r\n                v,\r\n            ]))\r\n            : undefined), props.scriptProps))),\r\n        enabled && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_script__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { id: \"next-plausible-init\", dangerouslySetInnerHTML: {\r\n                __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,\r\n            }, nonce: (_a = props.scriptProps) === null || _a === void 0 ? void 0 : _a.nonce })),\r\n        props.children));\r\n}\n\n\n//# sourceMappingURL=index.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1wbGF1c2libGUvZGlzdC9pbmRleC5lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ1Y7O0FBRWpDO0FBQ0EsV0FBVyxrREFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBLGNBQWMsU0FBUyxNQUFNO0FBQzdCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBLGNBQWMsNERBQTRELEdBQUcscUVBQXFFLFlBQVksaUNBQWlDO0FBQy9MOztBQUVBLHdDQUF3QztBQUN4QztBQUNBLDhFQUE4RSxjQUFjLDBFQUEwRTtBQUN0SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQixtQ0FBbUM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSw2RUFBNkUsc0NBQXNDLGNBQWM7QUFDakksd0NBQXdDLE9BQU87QUFDL0MscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksVUFBVSxNQUFxQztBQUMzRCxTQUFTLENBQ3NELEtBQUs7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBbUIsQ0FBQyx1REFBYztBQUM5QyxvQkFBb0IsMERBQW1CLENBQUMsbURBQU0sa0JBQWtCO0FBQ2hFLDREQUE0RCxtQkFBbUI7QUFDL0U7QUFDQSxpRUFBaUUsK2NBQStjO0FBQ2hoQjtBQUNBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwREFBbUIsQ0FBQyxtREFBTSxJQUFJO0FBQ2xELDZFQUE2RSxpRUFBaUU7QUFDOUksYUFBYSxpRkFBaUY7QUFDOUY7QUFDQTs7QUFFMEU7QUFDMUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlwLWZhc3QtY29kZS8uL25vZGVfbW9kdWxlcy9uZXh0LXBsYXVzaWJsZS9kaXN0L2luZGV4LmVzbS5qcz8zODA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xuXG5mdW5jdGlvbiB1c2VQbGF1c2libGUoKSB7XHJcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50TmFtZSwgLi4ucmVzdCkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHdpbmRvdykucGxhdXNpYmxlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgZXZlbnROYW1lLCByZXN0WzBdKTtcclxuICAgIH0sIFtdKTtcclxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cblxuZnVuY3Rpb24gZ2V0Q29tYmluYXRpb25zKGVsZW1lbnRzKSB7XHJcbiAgICBjb25zdCBjb21iaW5hdGlvbnMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb21iaW5hdGlvbnMucHVzaChbZWxlbWVudHNbaV1dKTtcclxuICAgICAgICBpZiAoaSA8IGVsZW1lbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgZ2V0Q29tYmluYXRpb25zKGVsZW1lbnRzLnNsaWNlKGkgKyAxKSkuZm9yRWFjaCgoY29tYmluYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbWJpbmF0aW9ucy5wdXNoKFtlbGVtZW50c1tpXSwgLi4uY29tYmluYXRpb25dKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbWJpbmF0aW9ucztcclxufVxuXG5jb25zdCBhbGxNb2RpZmllcnMgPSBbXHJcbiAgICAnZXhjbHVzaW9ucycsXHJcbiAgICAnbG9jYWwnLFxyXG4gICAgJ21hbnVhbCcsXHJcbiAgICAnb3V0Ym91bmQtbGlua3MnLFxyXG4gICAgJ2ZpbGUtZG93bmxvYWRzJyxcclxuICAgICd0YWdnZWQtZXZlbnRzJyxcclxuICAgICdwYWdldmlldy1wcm9wcycsXHJcbiAgICAncmV2ZW51ZScsXHJcbiAgICAnaGFzaCcsXHJcbl07XHJcbmNvbnN0IGdldFNjcmlwdFBhdGggPSAob3B0aW9ucywgLi4ubW9kaWZpZXJzKSA9PiB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgbGV0IGJhc2VQYXRoID0gKF9hID0gb3B0aW9ucy5iYXNlUGF0aCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XHJcbiAgICBpZiAob3B0aW9ucy5zdWJkaXJlY3RvcnkpIHtcclxuICAgICAgICBiYXNlUGF0aCArPSBgLyR7b3B0aW9ucy5zdWJkaXJlY3Rvcnl9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBgJHtiYXNlUGF0aH0vanMvJHtbXHJcbiAgICAgICAgKF9iID0gb3B0aW9ucy5zY3JpcHROYW1lKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnc2NyaXB0JyxcclxuICAgICAgICAuLi5tb2RpZmllcnMuc29ydCgpLmZpbHRlcigobW9kaWZpZXIpID0+IG1vZGlmaWVyICE9PSBudWxsKSxcclxuICAgIF0uam9pbignLicpfS5qc2A7XHJcbn07XHJcbmNvbnN0IHBsYXVzaWJsZURvbWFpbiA9ICdodHRwczovL3BsYXVzaWJsZS5pbyc7XHJcbmNvbnN0IGdldFJlbW90ZVNjcmlwdE5hbWUgPSAoc2VsZkhvc3RlZCkgPT4gc2VsZkhvc3RlZCA/ICdwbGF1c2libGUnIDogJ3NjcmlwdCc7XHJcbmNvbnN0IGdldERvbWFpbiA9IChvcHRpb25zKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IG9wdGlvbnMuY3VzdG9tRG9tYWluKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBwbGF1c2libGVEb21haW47IH07XHJcbmNvbnN0IGdldEFwaUVuZHBvaW50ID0gKG9wdGlvbnMpID0+IHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICByZXR1cm4gYCR7KF9hID0gb3B0aW9ucy5iYXNlUGF0aCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyd9LyR7KF9iID0gb3B0aW9ucy5zdWJkaXJlY3RvcnkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICdwcm94eSd9L2FwaS9ldmVudCR7b3B0aW9ucy50cmFpbGluZ1NsYXNoID8gJy8nIDogJyd9YDtcclxufTtcblxuZnVuY3Rpb24gd2l0aFBsYXVzaWJsZVByb3h5KG9wdGlvbnMgPSB7fSkge1xyXG4gICAgcmV0dXJuIChuZXh0Q29uZmlnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV4dFBsYXVzaWJsZVB1YmxpY1Byb3h5T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyksIHsgdHJhaWxpbmdTbGFzaDogISFuZXh0Q29uZmlnLnRyYWlsaW5nU2xhc2gsIGJhc2VQYXRoOiBuZXh0Q29uZmlnLmJhc2VQYXRoIH0pO1xyXG4gICAgICAgIGNvbnN0IG5leHRQbGF1c2libGVFbnYgPSB7XHJcbiAgICAgICAgICAgIG5leHRfcGxhdXNpYmxlX3Byb3h5OiAndHJ1ZScsXHJcbiAgICAgICAgICAgIG5leHRfcGxhdXNpYmxlX3RyYWlsaW5nU2xhc2g6IG5leHRQbGF1c2libGVQdWJsaWNQcm94eU9wdGlvbnMudHJhaWxpbmdTbGFzaCA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgbmV4dF9wbGF1c2libGVfYmFzZVBhdGg6IG5leHRQbGF1c2libGVQdWJsaWNQcm94eU9wdGlvbnMuYmFzZVBhdGgsXHJcbiAgICAgICAgICAgIG5leHRfcGxhdXNpYmxlX2N1c3RvbURvbWFpbjogbmV4dFBsYXVzaWJsZVB1YmxpY1Byb3h5T3B0aW9ucy5jdXN0b21Eb21haW4sXHJcbiAgICAgICAgICAgIG5leHRfcGxhdXNpYmxlX3NjcmlwdE5hbWU6IG5leHRQbGF1c2libGVQdWJsaWNQcm94eU9wdGlvbnMuc2NyaXB0TmFtZSxcclxuICAgICAgICAgICAgbmV4dF9wbGF1c2libGVfc3ViZGlyZWN0b3J5OiBuZXh0UGxhdXNpYmxlUHVibGljUHJveHlPcHRpb25zLnN1YmRpcmVjdG9yeSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG5leHRDb25maWcpLCB7IGVudjogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBuZXh0Q29uZmlnLmVudiksIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhuZXh0UGxhdXNpYmxlRW52KS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB1bmRlZmluZWQpKSksIHJld3JpdGVzOiAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb21haW4gPSBnZXREb21haW4ob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRSZW1vdGVTY3JpcHQgPSAoLi4ubW9kaWZpZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKF9hID0gcHJvY2Vzcy5lbnYuTkVYVF9QTEFVU0lCTEVfVEVTVF9ET01BSU4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGRvbWFpbikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRTY3JpcHRQYXRoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdE5hbWU6IGdldFJlbW90ZVNjcmlwdE5hbWUoZG9tYWluICE9PSBwbGF1c2libGVEb21haW4pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAuLi5tb2RpZmllcnMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXVzaWJsZVJld3JpdGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBnZXRTY3JpcHRQYXRoKG9wdGlvbnMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogZ2V0UmVtb3RlU2NyaXB0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5nZXRDb21iaW5hdGlvbnMoYWxsTW9kaWZpZXJzKS5tYXAoKG1vZGlmaWVycykgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBnZXRTY3JpcHRQYXRoKG9wdGlvbnMsIC4uLm1vZGlmaWVycyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBnZXRSZW1vdGVTY3JpcHQoLi4ubW9kaWZpZXJzKSxcclxuICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGdldEFwaUVuZHBvaW50KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbmV4dFBsYXVzaWJsZVB1YmxpY1Byb3h5T3B0aW9ucyksIHsgYmFzZVBhdGg6ICcnIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IGAke2RvbWFpbn0vYXBpL2V2ZW50YCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5ORVhUX1BMQVVTSUJMRV9ERUJVRykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF1c2libGVSZXdyaXRlcyA9ICcsIHBsYXVzaWJsZVJld3JpdGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzID0geWllbGQgKChfYSA9IG5leHRDb25maWcucmV3cml0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKG5leHRDb25maWcpKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmV3cml0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGxhdXNpYmxlUmV3cml0ZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJld3JpdGVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXdyaXRlcy5jb25jYXQocGxhdXNpYmxlUmV3cml0ZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmV3cml0ZXMuYWZ0ZXJGaWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJld3JpdGVzLmFmdGVyRmlsZXMgPSByZXdyaXRlcy5hZnRlckZpbGVzLmNvbmNhdChwbGF1c2libGVSZXdyaXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV3cml0ZXMuYWZ0ZXJGaWxlcyA9IHBsYXVzaWJsZVJld3JpdGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXdyaXRlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgfSk7XHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIFBsYXVzaWJsZVByb3ZpZGVyKHByb3BzKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBjb25zdCB7IGVuYWJsZWQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXHJcbiAgICAgICAgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WRVJDRUxfRU5WIHx8XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1ZFUkNFTF9FTlYgPT09ICdwcm9kdWN0aW9uJyksIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHByb3h5T3B0aW9ucyA9IHByb2Nlc3MuZW52Lm5leHRfcGxhdXNpYmxlX3Byb3h5XHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIHRyYWlsaW5nU2xhc2g6IHByb2Nlc3MuZW52Lm5leHRfcGxhdXNpYmxlX3RyYWlsaW5nU2xhc2ggPT09ICd0cnVlJyxcclxuICAgICAgICAgICAgYmFzZVBhdGg6IHByb2Nlc3MuZW52Lm5leHRfcGxhdXNpYmxlX2Jhc2VQYXRoLFxyXG4gICAgICAgICAgICBjdXN0b21Eb21haW46IHByb2Nlc3MuZW52Lm5leHRfcGxhdXNpYmxlX2N1c3RvbURvbWFpbixcclxuICAgICAgICAgICAgc2NyaXB0TmFtZTogcHJvY2Vzcy5lbnYubmV4dF9wbGF1c2libGVfc2NyaXB0TmFtZSxcclxuICAgICAgICAgICAgc3ViZGlyZWN0b3J5OiBwcm9jZXNzLmVudi5uZXh0X3BsYXVzaWJsZV9zdWJkaXJlY3RvcnksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIGVuYWJsZWQgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2NyaXB0LCBPYmplY3QuYXNzaWduKHsgYXN5bmM6IHRydWUsIGRlZmVyOiB0cnVlLCBcImRhdGEtYXBpXCI6IHByb3h5T3B0aW9ucyA/IGdldEFwaUVuZHBvaW50KHByb3h5T3B0aW9ucykgOiB1bmRlZmluZWQsIFwiZGF0YS1kb21haW5cIjogcHJvcHMuZG9tYWluLCBcImRhdGEtZXhjbHVkZVwiOiBwcm9wcy5leGNsdWRlLCBzcmM6IChwcm94eU9wdGlvbnMgPyAnJyA6IGdldERvbWFpbihwcm9wcykpICtcclxuICAgICAgICAgICAgICAgIGdldFNjcmlwdFBhdGgoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm94eU9wdGlvbnMpLCB7IHNjcmlwdE5hbWU6IHByb3h5T3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByb3h5T3B0aW9ucy5zY3JpcHROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZ2V0UmVtb3RlU2NyaXB0TmFtZShwcm9wcy5zZWxmSG9zdGVkKSB9KSwgcHJvcHMudHJhY2tMb2NhbGhvc3QgPyAnbG9jYWwnIDogbnVsbCwgcHJvcHMubWFudWFsUGFnZXZpZXdzID8gJ21hbnVhbCcgOiBudWxsLCBwcm9wcy5wYWdldmlld1Byb3BzID8gJ3BhZ2V2aWV3LXByb3BzJyA6IG51bGwsIHByb3BzLnRyYWNrT3V0Ym91bmRMaW5rcyA/ICdvdXRib3VuZC1saW5rcycgOiBudWxsLCBwcm9wcy5leGNsdWRlID8gJ2V4Y2x1c2lvbnMnIDogbnVsbCwgcHJvcHMucmV2ZW51ZSA/ICdyZXZlbnVlJyA6IG51bGwsIHByb3BzLnRyYWNrRmlsZURvd25sb2FkcyA/ICdmaWxlLWRvd25sb2FkcycgOiBudWxsLCBwcm9wcy50YWdnZWRFdmVudHMgPyAndGFnZ2VkLWV2ZW50cycgOiBudWxsLCBwcm9wcy5oYXNoID8gJ2hhc2gnIDogbnVsbCksIGludGVncml0eTogcHJvcHMuaW50ZWdyaXR5LCBjcm9zc09yaWdpbjogcHJvcHMuaW50ZWdyaXR5ID8gJ2Fub255bW91cycgOiB1bmRlZmluZWQgfSwgKHR5cGVvZiBwcm9wcy5wYWdldmlld1Byb3BzID09PSAnb2JqZWN0J1xyXG4gICAgICAgICAgICA/IE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhwcm9wcy5wYWdldmlld1Byb3BzKS5tYXAoKFtrLCB2XSkgPT4gW1xyXG4gICAgICAgICAgICAgICAgYGV2ZW50LSR7a31gLFxyXG4gICAgICAgICAgICAgICAgdixcclxuICAgICAgICAgICAgXSkpXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkKSwgcHJvcHMuc2NyaXB0UHJvcHMpKSksXHJcbiAgICAgICAgZW5hYmxlZCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChTY3JpcHQsIHsgaWQ6IFwibmV4dC1wbGF1c2libGUtaW5pdFwiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xyXG4gICAgICAgICAgICAgICAgX19odG1sOiBgd2luZG93LnBsYXVzaWJsZSA9IHdpbmRvdy5wbGF1c2libGUgfHwgZnVuY3Rpb24oKSB7ICh3aW5kb3cucGxhdXNpYmxlLnEgPSB3aW5kb3cucGxhdXNpYmxlLnEgfHwgW10pLnB1c2goYXJndW1lbnRzKSB9YCxcclxuICAgICAgICAgICAgfSwgbm9uY2U6IChfYSA9IHByb3BzLnNjcmlwdFByb3BzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9uY2UgfSkpLFxyXG4gICAgICAgIHByb3BzLmNoaWxkcmVuKSk7XHJcbn1cblxuZXhwb3J0IHsgUGxhdXNpYmxlUHJvdmlkZXIgYXMgZGVmYXVsdCwgdXNlUGxhdXNpYmxlLCB3aXRoUGxhdXNpYmxlUHJveHkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-plausible/dist/index.esm.js\n");

/***/ })

};
;