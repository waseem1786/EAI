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
exports.id = "app/api/events/route";
exports.ids = ["app/api/events/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=D%3A%5CProjects%5Ctest%5CEAI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Ctest%5CEAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=D%3A%5CProjects%5Ctest%5CEAI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Ctest%5CEAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Projects_test_EAI_app_api_events_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/events/route.ts */ \"(rsc)/./app/api/events/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/events/route\",\n        pathname: \"/api/events\",\n        filename: \"route\",\n        bundlePath: \"app/api/events/route\"\n    },\n    resolvedPagePath: \"D:\\\\Projects\\\\test\\\\EAI\\\\app\\\\api\\\\events\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Projects_test_EAI_app_api_events_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/events/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZldmVudHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmV2ZW50cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmV2ZW50cyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUHJvamVjdHMlNUN0ZXN0JTVDRUFJJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDUHJvamVjdHMlNUN0ZXN0JTVDRUFJJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNHO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbGVhcm5pbmctdHJhY2tlci8/ZWY0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFx0ZXN0XFxcXEVBSVxcXFxhcHBcXFxcYXBpXFxcXGV2ZW50c1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZXZlbnRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZXZlbnRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ldmVudHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxQcm9qZWN0c1xcXFx0ZXN0XFxcXEVBSVxcXFxhcHBcXFxcYXBpXFxcXGV2ZW50c1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZXZlbnRzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=D%3A%5CProjects%5Ctest%5CEAI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Ctest%5CEAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/events/route.ts":
/*!*********************************!*\
  !*** ./app/api/events/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _models_TimelineEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/TimelineEvent */ \"(rsc)/./models/TimelineEvent.ts\");\n/* harmony import */ var _lib_auth_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/auth_server */ \"(rsc)/./lib/auth_server.ts\");\n\n\n\n\nasync function GET(req) {\n    const session = await (0,_lib_auth_server__WEBPACK_IMPORTED_MODULE_3__.getSession)();\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    if (!(0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.hasMongoConfigured)()) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"MongoDB not configured\"\n    }, {\n        status: 503\n    });\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.dbConnect)();\n    const url = new URL(req.url);\n    const limit = Math.min(500, Math.max(10, Number(url.searchParams.get(\"limit\") || 200)));\n    const items = await _models_TimelineEvent__WEBPACK_IMPORTED_MODULE_2__.TimelineEvent.find({\n        userId: session.sub\n    }).sort({\n        createdAt: -1\n    }).limit(limit).lean();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        events: items\n    });\n}\nasync function POST(req) {\n    const session = await (0,_lib_auth_server__WEBPACK_IMPORTED_MODULE_3__.getSession)();\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    if (!(0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.hasMongoConfigured)()) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"MongoDB not configured\"\n    }, {\n        status: 503\n    });\n    const body = await req.json().catch(()=>null);\n    const videoId = String(body?.videoId || \"\");\n    const taskId = String(body?.taskId || \"\");\n    const type = String(body?.type || \"\");\n    const data = body?.data;\n    if (!videoId || !taskId || !type) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"videoId, taskId, type required\"\n    }, {\n        status: 400\n    });\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.dbConnect)();\n    const created = await _models_TimelineEvent__WEBPACK_IMPORTED_MODULE_2__.TimelineEvent.create({\n        userId: session.sub,\n        videoId,\n        taskId,\n        type,\n        data\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        event: created\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2V2ZW50cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDcUI7QUFDRjtBQUNSO0FBRS9DLGVBQWVLLElBQUlDLEdBQVk7SUFDcEMsTUFBTUMsVUFBVSxNQUFNSCw0REFBVUE7SUFDaEMsSUFBSSxDQUFDRyxTQUFTLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUMsU0FBUztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQ2xGLElBQUksQ0FBQ1IsMkRBQWtCQSxJQUFJLE9BQU9GLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUMsU0FBUztJQUF5QixHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUV6RyxNQUFNVCxrREFBU0E7SUFDZixNQUFNVSxNQUFNLElBQUlDLElBQUlOLElBQUlLLEdBQUc7SUFDM0IsTUFBTUUsUUFBUUMsS0FBS0MsR0FBRyxDQUFDLEtBQUtELEtBQUtFLEdBQUcsQ0FBQyxJQUFJQyxPQUFPTixJQUFJTyxZQUFZLENBQUNDLEdBQUcsQ0FBQyxZQUFZO0lBQ2pGLE1BQU1DLFFBQVEsTUFBTWpCLGdFQUFhQSxDQUFDa0IsSUFBSSxDQUFDO1FBQUVDLFFBQVFmLFFBQVFnQixHQUFHO0lBQUMsR0FBR0MsSUFBSSxDQUFDO1FBQUVDLFdBQVcsQ0FBQztJQUFFLEdBQUdaLEtBQUssQ0FBQ0EsT0FBT2EsSUFBSTtJQUN6RyxPQUFPMUIscURBQVlBLENBQUNRLElBQUksQ0FBQztRQUFFbUIsUUFBUVA7SUFBTTtBQUMzQztBQUVPLGVBQWVRLEtBQUt0QixHQUFZO0lBQ3JDLE1BQU1DLFVBQVUsTUFBTUgsNERBQVVBO0lBQ2hDLElBQUksQ0FBQ0csU0FBUyxPQUFPUCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1FBQUVDLFNBQVM7SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUNsRixJQUFJLENBQUNSLDJEQUFrQkEsSUFBSSxPQUFPRixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1FBQUVDLFNBQVM7SUFBeUIsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFekcsTUFBTW1CLE9BQU8sTUFBTXZCLElBQUlFLElBQUksR0FBR3NCLEtBQUssQ0FBQyxJQUFNO0lBQzFDLE1BQU1DLFVBQVVDLE9BQU9ILE1BQU1FLFdBQVc7SUFDeEMsTUFBTUUsU0FBU0QsT0FBT0gsTUFBTUksVUFBVTtJQUN0QyxNQUFNQyxPQUFPRixPQUFPSCxNQUFNSyxRQUFRO0lBQ2xDLE1BQU1DLE9BQU9OLE1BQU1NO0lBRW5CLElBQUksQ0FBQ0osV0FBVyxDQUFDRSxVQUFVLENBQUNDLE1BQU0sT0FBT2xDLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUMsU0FBUztJQUFpQyxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUV4SCxNQUFNVCxrREFBU0E7SUFDZixNQUFNbUMsVUFBVSxNQUFNakMsZ0VBQWFBLENBQUNrQyxNQUFNLENBQUM7UUFBRWYsUUFBUWYsUUFBUWdCLEdBQUc7UUFBRVE7UUFBU0U7UUFBUUM7UUFBTUM7SUFBSztJQUM5RixPQUFPbkMscURBQVlBLENBQUNRLElBQUksQ0FBQztRQUFFOEIsT0FBT0Y7SUFBUTtBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWxlYXJuaW5nLXRyYWNrZXIvLi9hcHAvYXBpL2V2ZW50cy9yb3V0ZS50cz80YWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZGJDb25uZWN0LCBoYXNNb25nb0NvbmZpZ3VyZWQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XG5pbXBvcnQgeyBUaW1lbGluZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9UaW1lbGluZUV2ZW50XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoX3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpO1xuICBpZiAoIXNlc3Npb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgaWYgKCFoYXNNb25nb0NvbmZpZ3VyZWQoKSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJNb25nb0RCIG5vdCBjb25maWd1cmVkXCIgfSwgeyBzdGF0dXM6IDUwMyB9KTtcblxuICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsKTtcbiAgY29uc3QgbGltaXQgPSBNYXRoLm1pbig1MDAsIE1hdGgubWF4KDEwLCBOdW1iZXIodXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKSB8fCAyMDApKSk7XG4gIGNvbnN0IGl0ZW1zID0gYXdhaXQgVGltZWxpbmVFdmVudC5maW5kKHsgdXNlcklkOiBzZXNzaW9uLnN1YiB9KS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KS5saW1pdChsaW1pdCkubGVhbigpO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBldmVudHM6IGl0ZW1zIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKTtcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIGlmICghaGFzTW9uZ29Db25maWd1cmVkKCkpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiTW9uZ29EQiBub3QgY29uZmlndXJlZFwiIH0sIHsgc3RhdHVzOiA1MDMgfSk7XG5cbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCkuY2F0Y2goKCkgPT4gbnVsbCk7XG4gIGNvbnN0IHZpZGVvSWQgPSBTdHJpbmcoYm9keT8udmlkZW9JZCB8fCBcIlwiKTtcbiAgY29uc3QgdGFza0lkID0gU3RyaW5nKGJvZHk/LnRhc2tJZCB8fCBcIlwiKTtcbiAgY29uc3QgdHlwZSA9IFN0cmluZyhib2R5Py50eXBlIHx8IFwiXCIpO1xuICBjb25zdCBkYXRhID0gYm9keT8uZGF0YTtcblxuICBpZiAoIXZpZGVvSWQgfHwgIXRhc2tJZCB8fCAhdHlwZSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJ2aWRlb0lkLCB0YXNrSWQsIHR5cGUgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuICBjb25zdCBjcmVhdGVkID0gYXdhaXQgVGltZWxpbmVFdmVudC5jcmVhdGUoeyB1c2VySWQ6IHNlc3Npb24uc3ViLCB2aWRlb0lkLCB0YXNrSWQsIHR5cGUsIGRhdGEgfSk7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGV2ZW50OiBjcmVhdGVkIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRiQ29ubmVjdCIsImhhc01vbmdvQ29uZmlndXJlZCIsIlRpbWVsaW5lRXZlbnQiLCJnZXRTZXNzaW9uIiwiR0VUIiwicmVxIiwic2Vzc2lvbiIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwidXJsIiwiVVJMIiwibGltaXQiLCJNYXRoIiwibWluIiwibWF4IiwiTnVtYmVyIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiaXRlbXMiLCJmaW5kIiwidXNlcklkIiwic3ViIiwic29ydCIsImNyZWF0ZWRBdCIsImxlYW4iLCJldmVudHMiLCJQT1NUIiwiYm9keSIsImNhdGNoIiwidmlkZW9JZCIsIlN0cmluZyIsInRhc2tJZCIsInR5cGUiLCJkYXRhIiwiY3JlYXRlZCIsImNyZWF0ZSIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/events/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth_server.ts":
/*!****************************!*\
  !*** ./lib/auth_server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SESSION_COOKIE: () => (/* binding */ SESSION_COOKIE),\n/* harmony export */   getSession: () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt */ \"(rsc)/./lib/jwt.ts\");\n\n\nconst SESSION_COOKIE = \"alt_session\";\nasync function getSession() {\n    const c = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(SESSION_COOKIE);\n    if (!c?.value) return null;\n    try {\n        return await (0,_jwt__WEBPACK_IMPORTED_MODULE_1__.verifySession)(c.value);\n    } catch  {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aF9zZXJ2ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNEO0FBQy9CLE1BQU1FLGlCQUFpQixjQUFjO0FBRXJDLGVBQWVDO0lBQ3BCLE1BQU1DLElBQUlKLHFEQUFPQSxHQUFHSyxHQUFHLENBQUNIO0lBQ3hCLElBQUksQ0FBQ0UsR0FBR0UsT0FBTyxPQUFPO0lBQ3RCLElBQUk7UUFBRSxPQUFPLE1BQU1MLG1EQUFhQSxDQUFDRyxFQUFFRSxLQUFLO0lBQUcsRUFBRSxPQUFNO1FBQUUsT0FBTztJQUFNO0FBQ3BFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbGVhcm5pbmctdHJhY2tlci8uL2xpYi9hdXRoX3NlcnZlci50cz83ZjAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgeyB2ZXJpZnlTZXNzaW9uIH0gZnJvbSBcIi4vand0XCI7XG5leHBvcnQgY29uc3QgU0VTU0lPTl9DT09LSUUgPSBcImFsdF9zZXNzaW9uXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uKCkge1xuICBjb25zdCBjID0gY29va2llcygpLmdldChTRVNTSU9OX0NPT0tJRSk7XG4gIGlmICghYz8udmFsdWUpIHJldHVybiBudWxsO1xuICB0cnkgeyByZXR1cm4gYXdhaXQgdmVyaWZ5U2Vzc2lvbihjLnZhbHVlKTsgfSBjYXRjaCB7IHJldHVybiBudWxsOyB9XG59XG4iXSwibmFtZXMiOlsiY29va2llcyIsInZlcmlmeVNlc3Npb24iLCJTRVNTSU9OX0NPT0tJRSIsImdldFNlc3Npb24iLCJjIiwiZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth_server.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dbConnect: () => (/* binding */ dbConnect),\n/* harmony export */   hasMongoConfigured: () => (/* binding */ hasMongoConfigured)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst g = global;\nconst cached = g.__mongoose_cache || (g.__mongoose_cache = {\n    conn: null,\n    promise: null\n});\nfunction hasMongoConfigured() {\n    return Boolean(process.env.MONGODB_URI);\n}\nasync function dbConnect() {\n    const uri = process.env.MONGODB_URI || \"\";\n    if (!uri) throw new Error(\"Missing MONGODB_URI. Add it to .env.local (MongoDB Atlas).\");\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri, {\n            dbName: \"AI_Learning_Tracker\"\n        }).then((m)=>m);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUdoQyxNQUFNQyxJQUFJQztBQUNWLE1BQU1DLFNBQWdCRixFQUFFRyxnQkFBZ0IsSUFBS0gsQ0FBQUEsRUFBRUcsZ0JBQWdCLEdBQUc7SUFBRUMsTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFdkYsU0FBU0M7SUFDZCxPQUFPQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDeEM7QUFFTyxlQUFlQztJQUNwQixNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVcsSUFBSTtJQUN2QyxJQUFJLENBQUNFLEtBQUssTUFBTSxJQUFJQyxNQUFNO0lBQzFCLElBQUlYLE9BQU9FLElBQUksRUFBRSxPQUFPRixPQUFPRSxJQUFJO0lBQ25DLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CSCxPQUFPRyxPQUFPLEdBQUdOLHVEQUFnQixDQUFDYSxLQUFLO1lBQUVHLFFBQVE7UUFBc0IsR0FBR0MsSUFBSSxDQUFDLENBQUNDLElBQU1BO0lBQ3hGO0lBQ0FmLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1sZWFybmluZy10cmFja2VyLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG50eXBlIENhY2hlID0geyBjb25uOiB0eXBlb2YgbW9uZ29vc2UgfCBudWxsOyBwcm9taXNlOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gfCBudWxsIH07XG5jb25zdCBnID0gZ2xvYmFsIGFzIGFueTtcbmNvbnN0IGNhY2hlZDogQ2FjaGUgPSBnLl9fbW9uZ29vc2VfY2FjaGUgfHwgKGcuX19tb25nb29zZV9jYWNoZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc01vbmdvQ29uZmlndXJlZCgpIHtcbiAgcmV0dXJuIEJvb2xlYW4ocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCBcIlwiO1xuICBpZiAoIXVyaSkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBNT05HT0RCX1VSSS4gQWRkIGl0IHRvIC5lbnYubG9jYWwgKE1vbmdvREIgQXRsYXMpLlwiKTtcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm47XG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QodXJpLCB7IGRiTmFtZTogXCJBSV9MZWFybmluZ19UcmFja2VyXCIgfSkudGhlbigobSkgPT4gbSk7XG4gIH1cbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiZyIsImdsb2JhbCIsImNhY2hlZCIsIl9fbW9uZ29vc2VfY2FjaGUiLCJjb25uIiwicHJvbWlzZSIsImhhc01vbmdvQ29uZmlndXJlZCIsIkJvb2xlYW4iLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJkYkNvbm5lY3QiLCJ1cmkiLCJFcnJvciIsImNvbm5lY3QiLCJkYk5hbWUiLCJ0aGVuIiwibSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/jwt.ts":
/*!********************!*\
  !*** ./lib/jwt.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signSession: () => (/* binding */ signSession),\n/* harmony export */   verifySession: () => (/* binding */ verifySession)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n\nconst raw = process.env.JWT_SECRET || \"dev_only_change_me\";\nconst secret = new TextEncoder().encode(raw);\nasync function signSession(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"30d\").sign(secret);\n}\nasync function verifySession(token) {\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(token, secret);\n    return payload;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvand0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDMUMsTUFBTUUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLElBQUk7QUFDdEMsTUFBTUMsU0FBUyxJQUFJQyxjQUFjQyxNQUFNLENBQUNOO0FBSWpDLGVBQWVPLFlBQVlDLE9BQXVCO0lBQ3ZELE9BQU8sTUFBTSxJQUFJVix5Q0FBT0EsQ0FBQ1UsU0FDdEJDLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7SUFBUSxHQUNsQ0MsV0FBVyxHQUNYQyxpQkFBaUIsQ0FBQyxPQUNsQkMsSUFBSSxDQUFDVDtBQUNWO0FBRU8sZUFBZVUsY0FBY0MsS0FBYTtJQUMvQyxNQUFNLEVBQUVQLE9BQU8sRUFBRSxHQUFHLE1BQU1ULCtDQUFTQSxDQUFDZ0IsT0FBT1g7SUFDM0MsT0FBT0k7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWxlYXJuaW5nLXRyYWNrZXIvLi9saWIvand0LnRzP2VhMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSBcImpvc2VcIjtcbmNvbnN0IHJhdyA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJkZXZfb25seV9jaGFuZ2VfbWVcIjtcbmNvbnN0IHNlY3JldCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShyYXcpO1xuXG5leHBvcnQgdHlwZSBTZXNzaW9uUGF5bG9hZCA9IHsgc3ViOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25TZXNzaW9uKHBheWxvYWQ6IFNlc3Npb25QYXlsb2FkKSB7XG4gIHJldHVybiBhd2FpdCBuZXcgU2lnbkpXVChwYXlsb2FkKVxuICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6IFwiSFMyNTZcIiB9KVxuICAgIC5zZXRJc3N1ZWRBdCgpXG4gICAgLnNldEV4cGlyYXRpb25UaW1lKFwiMzBkXCIpXG4gICAgLnNpZ24oc2VjcmV0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVNlc3Npb24odG9rZW46IHN0cmluZykge1xuICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbiwgc2VjcmV0KTtcbiAgcmV0dXJuIHBheWxvYWQgYXMgYW55IGFzIFNlc3Npb25QYXlsb2FkO1xufVxuIl0sIm5hbWVzIjpbIlNpZ25KV1QiLCJqd3RWZXJpZnkiLCJyYXciLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInNlY3JldCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwic2lnblNlc3Npb24iLCJwYXlsb2FkIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0SXNzdWVkQXQiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJ2ZXJpZnlTZXNzaW9uIiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/jwt.ts\n");

/***/ }),

/***/ "(rsc)/./models/TimelineEvent.ts":
/*!*********************************!*\
  !*** ./models/TimelineEvent.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TimelineEvent: () => (/* binding */ TimelineEvent)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TimelineEventSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    userId: {\n        type: String,\n        required: true,\n        index: true\n    },\n    videoId: {\n        type: String,\n        required: true,\n        index: true\n    },\n    taskId: {\n        type: String,\n        required: true\n    },\n    type: {\n        type: String,\n        required: true\n    },\n    data: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.Mixed\n    }\n}, {\n    timestamps: true\n});\nconst TimelineEvent = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).TimelineEvent || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"TimelineEvent\", TimelineEventSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVGltZWxpbmVFdmVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFHNUMsTUFBTUUsc0JBQXNCLElBQUlELDRDQUFNQSxDQUNwQztJQUNFRSxRQUFRO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsT0FBTztJQUFLO0lBQ3BEQyxTQUFTO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsT0FBTztJQUFLO0lBQ3JERSxRQUFRO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN2Q0YsTUFBTTtRQUFFQSxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNJLE1BQU07UUFBRU4sTUFBTUgsNENBQU1BLENBQUNVLEtBQUssQ0FBQ0MsS0FBSztJQUFDO0FBQ25DLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR2QsTUFBTUMsZ0JBQWdCZCx3REFBZSxDQUFDYyxhQUFhLElBQUlkLHFEQUFjLENBQW1CLGlCQUFpQkUscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbGVhcm5pbmctdHJhY2tlci8uL21vZGVscy9UaW1lbGluZUV2ZW50LnRzPzQxNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuZXhwb3J0IHR5cGUgVGltZWxpbmVFdmVudERvYyA9IHsgdXNlcklkOiBzdHJpbmc7IHZpZGVvSWQ6IHN0cmluZzsgdGFza0lkOiBzdHJpbmc7IHR5cGU6IHN0cmluZzsgZGF0YT86IGFueTsgY3JlYXRlZEF0OiBEYXRlOyB9O1xuXG5jb25zdCBUaW1lbGluZUV2ZW50U2NoZW1hID0gbmV3IFNjaGVtYTxUaW1lbGluZUV2ZW50RG9jPihcbiAge1xuICAgIHVzZXJJZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBpbmRleDogdHJ1ZSB9LFxuICAgIHZpZGVvSWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgaW5kZXg6IHRydWUgfSxcbiAgICB0YXNrSWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHR5cGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGRhdGE6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk1peGVkIH1cbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBjb25zdCBUaW1lbGluZUV2ZW50ID0gbW9uZ29vc2UubW9kZWxzLlRpbWVsaW5lRXZlbnQgfHwgbW9uZ29vc2UubW9kZWw8VGltZWxpbmVFdmVudERvYz4oXCJUaW1lbGluZUV2ZW50XCIsIFRpbWVsaW5lRXZlbnRTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiVGltZWxpbmVFdmVudFNjaGVtYSIsInVzZXJJZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImluZGV4IiwidmlkZW9JZCIsInRhc2tJZCIsImRhdGEiLCJUeXBlcyIsIk1peGVkIiwidGltZXN0YW1wcyIsIlRpbWVsaW5lRXZlbnQiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/TimelineEvent.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fevents%2Froute&page=%2Fapi%2Fevents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fevents%2Froute.ts&appDir=D%3A%5CProjects%5Ctest%5CEAI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Ctest%5CEAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();