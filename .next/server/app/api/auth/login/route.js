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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=D%3A%5CProjects%5Ctest%5CEAI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Ctest%5CEAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=D%3A%5CProjects%5Ctest%5CEAI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Ctest%5CEAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Projects_test_EAI_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/login/route.ts */ \"(rsc)/./app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"D:\\\\Projects\\\\test\\\\EAI\\\\app\\\\api\\\\auth\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Projects_test_EAI_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUHJvamVjdHMlNUN0ZXN0JTVDRUFJJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDUHJvamVjdHMlNUN0ZXN0JTVDRUFJJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNRO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbGVhcm5pbmctdHJhY2tlci8/ZTJiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFx0ZXN0XFxcXEVBSVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcUHJvamVjdHNcXFxcdGVzdFxcXFxFQUlcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGxvZ2luXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=D%3A%5CProjects%5Ctest%5CEAI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Ctest%5CEAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/login/route.ts":
/*!*************************************!*\
  !*** ./app/api/auth/login/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/User */ \"(rsc)/./models/User.ts\");\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../lib/jwt */ \"(rsc)/./lib/jwt.ts\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _lib_auth_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/auth_server */ \"(rsc)/./lib/auth_server.ts\");\n\n\n\n\n\n\n\nasync function POST(req) {\n    if (!(0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.hasMongoConfigured)()) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"MongoDB is not configured. Set MONGODB_URI in .env.local.\"\n    }, {\n        status: 503\n    });\n    const body = await req.json().catch(()=>null);\n    const email = String(body?.email || \"\").trim().toLowerCase();\n    const password = String(body?.password || \"\");\n    if (!email || !password) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Email and password are required.\"\n    }, {\n        status: 400\n    });\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.dbConnect)();\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n        email\n    });\n    if (!user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Invalid email or password.\"\n    }, {\n        status: 401\n    });\n    const ok = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.passwordHash);\n    if (!ok) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Invalid email or password.\"\n    }, {\n        status: 401\n    });\n    const token = await (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_4__.signSession)({\n        sub: String(user._id),\n        email: user.email\n    });\n    const secure = \"development\" === \"production\";\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_5__.cookies)().set(_lib_auth_server__WEBPACK_IMPORTED_MODULE_6__.SESSION_COOKIE, token, {\n        httpOnly: true,\n        sameSite: \"lax\",\n        secure,\n        path: \"/\",\n        maxAge: 60 * 60 * 24 * 30\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        user: {\n            id: String(user._id),\n            email: user.email\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2I7QUFDcUM7QUFDcEI7QUFDRztBQUNYO0FBQ3NCO0FBRXRELGVBQWVRLEtBQUtDLEdBQVk7SUFDckMsSUFBSSxDQUFDTiwyREFBa0JBLElBQUksT0FBT0gscURBQVlBLENBQUNVLElBQUksQ0FBQztRQUFFQyxTQUFTO0lBQTRELEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBRTVJLE1BQU1DLE9BQU8sTUFBTUosSUFBSUMsSUFBSSxHQUFHSSxLQUFLLENBQUMsSUFBTTtJQUMxQyxNQUFNQyxRQUFRQyxPQUFPSCxNQUFNRSxTQUFTLElBQUlFLElBQUksR0FBR0MsV0FBVztJQUMxRCxNQUFNQyxXQUFXSCxPQUFPSCxNQUFNTSxZQUFZO0lBRTFDLElBQUksQ0FBQ0osU0FBUyxDQUFDSSxVQUFVLE9BQU9uQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1FBQUVDLFNBQVM7SUFBbUMsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFakgsTUFBTVYsa0RBQVNBO0lBQ2YsTUFBTWtCLE9BQU8sTUFBTWhCLDhDQUFJQSxDQUFDaUIsT0FBTyxDQUFDO1FBQUVOO0lBQU07SUFDeEMsSUFBSSxDQUFDSyxNQUFNLE9BQU9wQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1FBQUVDLFNBQVM7SUFBNkIsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFN0YsTUFBTVUsS0FBSyxNQUFNckIsdURBQWMsQ0FBQ2tCLFVBQVVDLEtBQUtJLFlBQVk7SUFDM0QsSUFBSSxDQUFDRixJQUFJLE9BQU90QixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1FBQUVDLFNBQVM7SUFBNkIsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFM0YsTUFBTWEsUUFBUSxNQUFNcEIscURBQVdBLENBQUM7UUFBRXFCLEtBQUtWLE9BQU9JLEtBQUtPLEdBQUc7UUFBR1osT0FBT0ssS0FBS0wsS0FBSztJQUFDO0lBQzNFLE1BQU1hLFNBQVNDLGtCQUF5QjtJQUN4Q3ZCLHFEQUFPQSxHQUFHd0IsR0FBRyxDQUFDdkIsNERBQWNBLEVBQUVrQixPQUFPO1FBQUVNLFVBQVU7UUFBTUMsVUFBVTtRQUFPSjtRQUFRSyxNQUFNO1FBQUtDLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFBRztJQUVySCxPQUFPbEMscURBQVlBLENBQUNVLElBQUksQ0FBQztRQUFFVSxNQUFNO1lBQUVlLElBQUluQixPQUFPSSxLQUFLTyxHQUFHO1lBQUdaLE9BQU9LLEtBQUtMLEtBQUs7UUFBQztJQUFFO0FBQy9FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbGVhcm5pbmctdHJhY2tlci8uL2FwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZS50cz80ZjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGRiQ29ubmVjdCwgaGFzTW9uZ29Db25maWd1cmVkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9kYlwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IHsgc2lnblNlc3Npb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2p3dFwiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IFNFU1NJT05fQ09PS0lFIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9hdXRoX3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgaWYgKCFoYXNNb25nb0NvbmZpZ3VyZWQoKSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJNb25nb0RCIGlzIG5vdCBjb25maWd1cmVkLiBTZXQgTU9OR09EQl9VUkkgaW4gLmVudi5sb2NhbC5cIiB9LCB7IHN0YXR1czogNTAzIH0pO1xuXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpLmNhdGNoKCgpID0+IG51bGwpO1xuICBjb25zdCBlbWFpbCA9IFN0cmluZyhib2R5Py5lbWFpbCB8fCBcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBTdHJpbmcoYm9keT8ucGFzc3dvcmQgfHwgXCJcIik7XG5cbiAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZC5cIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG4gIGlmICghdXNlcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkLlwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG5cbiAgY29uc3Qgb2sgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICBpZiAoIW9rKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcblxuICBjb25zdCB0b2tlbiA9IGF3YWl0IHNpZ25TZXNzaW9uKHsgc3ViOiBTdHJpbmcodXNlci5faWQpLCBlbWFpbDogdXNlci5lbWFpbCB9KTtcbiAgY29uc3Qgc2VjdXJlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xuICBjb29raWVzKCkuc2V0KFNFU1NJT05fQ09PS0lFLCB0b2tlbiwgeyBodHRwT25seTogdHJ1ZSwgc2FtZVNpdGU6IFwibGF4XCIsIHNlY3VyZSwgcGF0aDogXCIvXCIsIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAgfSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdXNlcjogeyBpZDogU3RyaW5nKHVzZXIuX2lkKSwgZW1haWw6IHVzZXIuZW1haWwgfSB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJiY3J5cHQiLCJkYkNvbm5lY3QiLCJoYXNNb25nb0NvbmZpZ3VyZWQiLCJVc2VyIiwic2lnblNlc3Npb24iLCJjb29raWVzIiwiU0VTU0lPTl9DT09LSUUiLCJQT1NUIiwicmVxIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJib2R5IiwiY2F0Y2giLCJlbWFpbCIsIlN0cmluZyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInBhc3N3b3JkIiwidXNlciIsImZpbmRPbmUiLCJvayIsImNvbXBhcmUiLCJwYXNzd29yZEhhc2giLCJ0b2tlbiIsInN1YiIsIl9pZCIsInNlY3VyZSIsInByb2Nlc3MiLCJzZXQiLCJodHRwT25seSIsInNhbWVTaXRlIiwicGF0aCIsIm1heEFnZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/login/route.ts\n");

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

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        index: true\n    },\n    passwordHash: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFHNUMsTUFBTUUsYUFBYSxJQUFJRCw0Q0FBTUEsQ0FDM0I7SUFBRUUsT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLFFBQVE7UUFBTUMsT0FBTztJQUFLO0lBQUdDLGNBQWM7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0FBQUUsR0FDckg7SUFBRUksWUFBWTtBQUFLO0FBRWQsTUFBTUMsT0FBT1gsd0RBQWUsQ0FBQ1csSUFBSSxJQUFJWCxxREFBYyxDQUFVLFFBQVFFLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1sZWFybmluZy10cmFja2VyLy4vbW9kZWxzL1VzZXIudHM/NmRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5leHBvcnQgdHlwZSBVc2VyRG9jID0geyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZEhhc2g6IHN0cmluZzsgY3JlYXRlZEF0OiBEYXRlIH07XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hPFVzZXJEb2M+KFxuICB7IGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSwgaW5kZXg6IHRydWUgfSwgcGFzc3dvcmRIYXNoOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWw8VXNlckRvYz4oXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiVXNlclNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwiaW5kZXgiLCJwYXNzd29yZEhhc2giLCJ0aW1lc3RhbXBzIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=D%3A%5CProjects%5Ctest%5CEAI%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Ctest%5CEAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();