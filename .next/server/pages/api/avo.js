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
exports.id = "pages/api/avo";
exports.ids = ["pages/api/avo"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "(api)/./cors-middleware.ts":
/*!****************************!*\
  !*** ./cors-middleware.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Hey there you curious :)\n *\n * By default, NextJS APIs are same-site origin only.\n * But since *I needed the main project*\n * to have public API access, I had to configure CORS.\n *\n * @see https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors\n * @see https://github.com/expressjs/cors#configuration-options\n */ const CORS_OPTIONS = {\n    methods: [\n        \"GET\",\n        \"OPTIONS\"\n    ]\n};\nfunction promisifyMiddleware(middleware) {\n    return (req, res)=>new Promise((resolve, reject)=>{\n            middleware(req, res, (result)=>{\n                if (result instanceof Error) {\n                    return reject(result);\n                }\n                return resolve(result);\n            });\n        });\n}\n// Initialize the cors middleware\nconst cors = promisifyMiddleware(cors__WEBPACK_IMPORTED_MODULE_0___default()(CORS_OPTIONS));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb3JzLW1pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBSTlCOzs7Ozs7Ozs7Q0FTQyxHQUNELE1BQU1DLGVBQWU7SUFDbkJDLFNBQVM7UUFBQztRQUFPO0tBQVU7QUFDN0I7QUFFQSxTQUFTQyxvQkFBb0JDLFVBQTBCO0lBQ3JELE9BQU8sQ0FBQ0MsS0FBVUMsTUFDaEIsSUFBSUMsUUFBUSxDQUFDQyxTQUFTQztZQUNwQkwsV0FBV0MsS0FBS0MsS0FBSyxDQUFDSTtnQkFDcEIsSUFBSUEsa0JBQWtCQyxPQUFPO29CQUMzQixPQUFPRixPQUFPQztnQkFDaEI7Z0JBQ0EsT0FBT0YsUUFBUUU7WUFDakI7UUFDRjtBQUNKO0FBRUEsaUNBQWlDO0FBQ2pDLE1BQU1FLE9BQU9ULG9CQUFvQkgsMkNBQVdBLENBQUNDO0FBRTdDLGlFQUFlVyxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdHppLW5leHQtYXBwLy4vY29ycy1taWRkbGV3YXJlLnRzP2ZiNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvcnNXcmFwcGVyIGZyb20gJ2NvcnMnXG5pbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJleHByZXNzXCJcblxuXG4vKipcbiAqIEhleSB0aGVyZSB5b3UgY3VyaW91cyA6KVxuICpcbiAqIEJ5IGRlZmF1bHQsIE5leHRKUyBBUElzIGFyZSBzYW1lLXNpdGUgb3JpZ2luIG9ubHkuXG4gKiBCdXQgc2luY2UgKkkgbmVlZGVkIHRoZSBtYWluIHByb2plY3QqXG4gKiB0byBoYXZlIHB1YmxpYyBBUEkgYWNjZXNzLCBJIGhhZCB0byBjb25maWd1cmUgQ09SUy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy9hcGktcm91dGVzLWNvcnNcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9jb3JzI2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xuICovXG5jb25zdCBDT1JTX09QVElPTlMgPSB7XG4gIG1ldGhvZHM6IFsnR0VUJywgJ09QVElPTlMnXSxcbn1cblxuZnVuY3Rpb24gcHJvbWlzaWZ5TWlkZGxld2FyZShtaWRkbGV3YXJlOiBSZXF1ZXN0SGFuZGxlcikge1xuICByZXR1cm4gKHJlcTogYW55LCByZXM6IGFueSkgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBtaWRkbGV3YXJlKHJlcSwgcmVzLCAocmVzdWx0OiBFcnJvciB8IHVua25vd24pID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxufVxuXG4vLyBJbml0aWFsaXplIHRoZSBjb3JzIG1pZGRsZXdhcmVcbmNvbnN0IGNvcnMgPSBwcm9taXNpZnlNaWRkbGV3YXJlKGNvcnNXcmFwcGVyKENPUlNfT1BUSU9OUykpXG5cbmV4cG9ydCBkZWZhdWx0IGNvcnNcbiJdLCJuYW1lcyI6WyJjb3JzV3JhcHBlciIsIkNPUlNfT1BUSU9OUyIsIm1ldGhvZHMiLCJwcm9taXNpZnlNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJjb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./cors-middleware.ts\n");

/***/ }),

/***/ "(api)/./database/data.ts":
/*!**************************!*\
  !*** ./database/data.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = {\n    \"2zd33b8c\": {\n        name: \"Maluma Hass Avocado\",\n        id: \"2zd33b8c\",\n        sku: \"NUR72KCM\",\n        price: 1.15,\n        image: \"/images/maluma.jpg\",\n        attributes: {\n            description: \"A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage\",\n            shape: \"Oval\",\n            hardiness: \"1 \\xb0C\",\n            taste: \"Catchy, is an avocado\"\n        }\n    },\n    \"6trfgkkj\": {\n        name: \"Fuerte Avocado\",\n        id: \"6trfgkkj\",\n        sku: \"AX4M8SJV\",\n        price: 1.21,\n        image: \"/images/fuerte.jpg\",\n        attributes: {\n            description: \"The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.\",\n            shape: \"Pear\",\n            hardiness: \"-1 \\xb0C\",\n            taste: \"Magnificent, is a strong avocado\"\n        }\n    },\n    \"7bcr49em\": {\n        name: \"Gwen Hass Avocado\",\n        id: \"7bcr49em\",\n        sku: \"HYA78F6J\",\n        price: 1.25,\n        image: \"/images/gwen.jpg\",\n        attributes: {\n            description: \"A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 \\xb0C (30 \\xb0F)\",\n            shape: \"Plump\",\n            hardiness: \"−1 \\xb0C\",\n            taste: \"Superb, is an avocado\"\n        }\n    },\n    \"098323ks\": {\n        name: \"Bacon Avocado\",\n        id: \"098323ks\",\n        sku: \"BXD100BLK\",\n        price: 1.51,\n        image: \"/images/bacon.jpg\",\n        attributes: {\n            description: \"Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 \\xb0C (23 \\xb0F)\",\n            shape: \"Oval\",\n            hardiness: \"−5 \\xb0C\",\n            taste: \"Creamy, is an avocado\"\n        }\n    },\n    b8uthe2y: {\n        name: \"Hass Avocado\",\n        id: \"b8uthe2y\",\n        sku: \"RMRCZN7E\",\n        price: 1.39,\n        image: \"/images/hass.jpg\",\n        attributes: {\n            description: \"The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 \\xb0C (30 \\xb0F)\",\n            shape: \"Oval\",\n            hardiness: \"−1 \\xb0C\",\n            taste: \"Gorgeous, is an avocado\"\n        }\n    },\n    ewxsd6xb: {\n        name: \"Lamb Hass Avocado\",\n        id: \"ewxsd6xb\",\n        sku: \"N55229ZA\",\n        price: 1.34,\n        image: \"/images/lamb.jpg\",\n        attributes: {\n            description: \"The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.\",\n            shape: \"Obovate\",\n            hardiness: \"-2 \\xb0C\",\n            taste: \"Great, is an avocado\"\n        }\n    },\n    fpr72m9k: {\n        name: \"Pinkerton Avocado\",\n        id: \"fpr72m9k\",\n        sku: \"B4HZ42TM\",\n        price: 1.27,\n        image: \"/images/pinkerton.jpg\",\n        attributes: {\n            description: \"First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 \\xb0C (30 \\xb0F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics\",\n            shape: \"Long pear\",\n            hardiness: \"−1 \\xb0C\",\n            taste: \"Marvelous, is an avocado\"\n        }\n    },\n    t9dv25gs: {\n        name: \"Reed Avocado\",\n        id: \"t9dv25gs\",\n        sku: \"ZY3T9XXC\",\n        price: 1.18,\n        image: \"/images/reed.jpg\",\n        attributes: {\n            description: \"Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 \\xb0C (30 \\xb0F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)\",\n            shape: \"Round\",\n            hardiness: \"−1 \\xb0C\",\n            taste: \"Exquisite, is an avocado\"\n        }\n    },\n    t345w48y: {\n        name: \"Zutano Avocado\",\n        id: \"t345w48y\",\n        sku: \"MW79ZZ6Y\",\n        price: 1.25,\n        image: \"/images/zutano.jpg\",\n        attributes: {\n            description: \"The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.\",\n            shape: \"Pear\",\n            hardiness: \"-5 \\xb0C\",\n            taste: \"Splendid, is an avocado\"\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9kYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxPQUFxQztJQUN6QyxZQUFZO1FBQ1ZDLE1BQU07UUFDTkMsSUFBSTtRQUNKQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxZQUFZO1lBQ1ZDLGFBQ0U7WUFDRkMsT0FBTztZQUNQQyxXQUFXO1lBQ1hDLE9BQU87UUFDVDtJQUNGO0lBQ0EsWUFBWTtRQUNWVCxNQUFNO1FBQ05DLElBQUk7UUFDSkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsWUFBWTtZQUNWQyxhQUNFO1lBQ0ZDLE9BQU87WUFDUEMsV0FBVztZQUNYQyxPQUFPO1FBQ1Q7SUFDRjtJQUNBLFlBQVk7UUFDVlQsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFlBQVk7WUFDVkMsYUFDRTtZQUNGQyxPQUFPO1lBQ1BDLFdBQVc7WUFDWEMsT0FBTztRQUNUO0lBQ0Y7SUFDQSxZQUFZO1FBQ1ZULE1BQU07UUFDTkMsSUFBSTtRQUNKQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxZQUFZO1lBQ1ZDLGFBQ0U7WUFDRkMsT0FBTztZQUNQQyxXQUFXO1lBQ1hDLE9BQU87UUFDVDtJQUNGO0lBQ0FDLFVBQVU7UUFDUlYsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFlBQVk7WUFDVkMsYUFDRTtZQUNGQyxPQUFPO1lBQ1BDLFdBQVc7WUFDWEMsT0FBTztRQUNUO0lBQ0Y7SUFDQUUsVUFBVTtRQUNSWCxNQUFNO1FBQ05DLElBQUk7UUFDSkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsWUFBWTtZQUNWQyxhQUNFO1lBQ0ZDLE9BQU87WUFDUEMsV0FBVztZQUNYQyxPQUFPO1FBQ1Q7SUFDRjtJQUNBRyxVQUFVO1FBQ1JaLE1BQU07UUFDTkMsSUFBSTtRQUNKQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxZQUFZO1lBQ1ZDLGFBQ0U7WUFDRkMsT0FBTztZQUNQQyxXQUFXO1lBQ1hDLE9BQU87UUFDVDtJQUNGO0lBQ0FJLFVBQVU7UUFDUmIsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFlBQVk7WUFDVkMsYUFDRTtZQUNGQyxPQUFPO1lBQ1BDLFdBQVc7WUFDWEMsT0FBTztRQUNUO0lBQ0Y7SUFDQUssVUFBVTtRQUNSZCxNQUFNO1FBQ05DLElBQUk7UUFDSkMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsWUFBWTtZQUNWQyxhQUNFO1lBQ0ZDLE9BQU87WUFDUEMsV0FBVztZQUNYQyxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsaUVBQWVWLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0emktbmV4dC1hcHAvLi9kYXRhYmFzZS9kYXRhLnRzP2Y1ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YTogUmVjb3JkPFRQcm9kdWN0SWQsIFRQcm9kdWN0PiA9IHtcbiAgJzJ6ZDMzYjhjJzoge1xuICAgIG5hbWU6ICdNYWx1bWEgSGFzcyBBdm9jYWRvJyxcbiAgICBpZDogJzJ6ZDMzYjhjJyxcbiAgICBza3U6ICdOVVI3MktDTScsXG4gICAgcHJpY2U6IDEuMTUsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21hbHVtYS5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQSByZWxhdGl2ZWx5IG5ldyBjdWx0aXZhciwgaXQgd2FzLCB0aGUgcHJldHR5IGJveSBiYWJ5LCBkaXNjb3ZlcmVkIGluIFNvdXRoIEFmcmljYSBpbiB0aGUgZWFybHkgMTk5MHMgYnkgTXIuIEEuRy4gKERyaWVzKSBKb3ViZXJ0LiBNYWx1bWEgQmFieXkuIEl0IGlzIGEgY2hhbmNlIHNlZWRsaW5nIG9mIHVua25vd24gcGFyZW50YWdlJyxcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXG4gICAgICBoYXJkaW5lc3M6ICcxIMKwQycsXG4gICAgICB0YXN0ZTogJ0NhdGNoeSwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgJzZ0cmZna2tqJzoge1xuICAgIG5hbWU6ICdGdWVydGUgQXZvY2FkbycsXG4gICAgaWQ6ICc2dHJmZ2traicsXG4gICAgc2t1OiAnQVg0TThTSlYnLFxuICAgIHByaWNlOiAxLjIxLFxuICAgIGltYWdlOiAnL2ltYWdlcy9mdWVydGUuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBGdWVydGUgYXZvY2FkbyBpcyB0aGUgc2Vjb25kIGxhcmdlc3QgY29tbWVyY2lhbCB2YXJpZXR5IGJlaGluZCBIYXNzLiBJdCBpcyBhIGxvbmcgdGltZSBDYWxpZm9ybmlhIGNvbW1lcmNpYWwgdmFyaWV0eSB2YWx1ZWQgZm9yIGl0cyB3aW50ZXIgc2Vhc29uIHJpcGVuaW5nIGFuZCBpdHMgQi1UeXBlIGJsb3Nzb20gdHlwZSB3aGljaCBtb3N0IGdyb3dlcnMgcGxhbnQgYWRqYWNlbnQgdG8gdGhlIEhhc3MgZm9yIGEgbW9yZSBjb25zaXN0ZW50IHByb2R1Y3Rpb24gY3ljbGUuIFRoaXMgYXZvY2FkbyB0ZW5kcyB0byBwcm9kdWNlIGhlYXZpbHkgaW4gYWx0ZXJuYXRlIHllYXJzLicsXG4gICAgICBzaGFwZTogJ1BlYXInLFxuICAgICAgaGFyZGluZXNzOiAnLTEgwrBDJyxcbiAgICAgIHRhc3RlOiAnTWFnbmlmaWNlbnQsIGlzIGEgc3Ryb25nIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gICc3YmNyNDllbSc6IHtcbiAgICBuYW1lOiAnR3dlbiBIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnN2JjcjQ5ZW0nLFxuICAgIHNrdTogJ0hZQTc4RjZKJyxcbiAgICBwcmljZTogMS4yNSxcbiAgICBpbWFnZTogJy9pbWFnZXMvZ3dlbi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkEgc2VlZGxpbmcgYnJlZCBmcm9tICdIYXNzJyB4ICdUaGlsbGUnIGluIDE5ODIsICdHd2VuJyBpcyBoaWdoZXIgeWllbGRpbmcgYW5kIG1vcmUgZHdhcmZpbmcgdGhhbiAnSGFzcycgaW4gQ2FsaWZvcm5pYS4gVGhlIGZydWl0IGhhcyBhbiBvdmFsIHNoYXBlLCBzbGlnaHRseSBzbWFsbGVyIHRoYW4gJ0hhc3MnICgxMDDigJMyMDAgZyBvciAzLjXigJM3LjEgb3opLCB3aXRoIGEgcmljaCwgbnV0dHkgZmxhdm9yLiBUaGUgc2tpbiB0ZXh0dXJlIGlzIG1vcmUgZmluZWx5IHBlYmJsZWQgdGhhbiAnSGFzcycsIGFuZCBpcyBkdWxsIGdyZWVuIHdoZW4gcmlwZS4gSXQgaXMgZnJvc3QtaGFyZHkgZG93biB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxuICAgICAgc2hhcGU6ICdQbHVtcCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ1N1cGVyYiwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgJzA5ODMyM2tzJzoge1xuICAgIG5hbWU6ICdCYWNvbiBBdm9jYWRvJyxcbiAgICBpZDogJzA5ODMyM2tzJyxcbiAgICBza3U6ICdCWEQxMDBCTEsnLFxuICAgIHByaWNlOiAxLjUxLFxuICAgIGltYWdlOiAnL2ltYWdlcy9iYWNvbi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnRGV2ZWxvcGVkIGJ5IGEgZmFybWVyLCBKYW1lcyBCYWNvbiwgaW4gMTk1NCwgQmFjb24gaGFzIG1lZGl1bS1zaXplZCBmcnVpdCB3aXRoIHNtb290aCwgZ3JlZW4gc2tpbiB3aXRoIHllbGxvdy1ncmVlbiwgbGlnaHQtdGFzdGluZyBmbGVzaC4gV2hlbiByaXBlLCB0aGUgc2tpbiByZW1haW5zIGdyZWVuLCBidXQgZGFya2VucyBzbGlnaHRseSwgYW5kIGZydWl0IHlpZWxkcyB0byBnZW50bGUgcHJlc3N1cmUuIEl0IGlzIGNvbGQtaGFyZHkgZG93biB0byDiiJI1IMKwQyAoMjMgwrBGKScsXG4gICAgICBzaGFwZTogJ092YWwnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSNSDCsEMnLFxuICAgICAgdGFzdGU6ICdDcmVhbXksIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIGI4dXRoZTJ5OiB7XG4gICAgbmFtZTogJ0hhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICdiOHV0aGUyeScsXG4gICAgc2t1OiAnUk1SQ1pON0UnLFxuICAgIHByaWNlOiAxLjM5LFxuICAgIGltYWdlOiAnL2ltYWdlcy9oYXNzLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlICdIYXNzJyBpcyB0aGUgbW9zdCBjb21tb24gY3VsdGl2YXIgb2YgYXZvY2Fkby4gSXQgcHJvZHVjZXMgZnJ1aXQgeWVhci1yb3VuZCBhbmQgYWNjb3VudHMgZm9yIDgwJSBvZiBjdWx0aXZhdGVkIGF2b2NhZG9zIGluIHRoZSB3b3JsZC5bMjFdWzU1XSBBbGwgJ0hhc3MnIHRyZWVzIGFyZSBkZXNjZW5kZWQgZnJvbSBhIHNpbmdsZSAnbW90aGVyIHRyZWUnIHJhaXNlZCBieSBhIG1haWwgY2FycmllciBuYW1lZCBSdWRvbHBoIEhhc3MsIG9mIExhIEhhYnJhIEhlaWdodHMsIENhbGlmb3JuaWEuWzIwXVs1NV0gSGFzcyBwYXRlbnRlZCB0aGUgcHJvZHVjdGl2ZSB0cmVlIGluIDE5MzUuIFRoZSAnbW90aGVyIHRyZWUnLCBvZiB1bmNlcnRhaW4gc3Vic3BlY2llcywgZGllZCBvZiByb290IHJvdCBhbmQgd2FzIGN1dCBkb3duIGluIFNlcHRlbWJlciAyMDAyLlsyMV1bNTVdWzU2XSAnSGFzcycgdHJlZXMgaGF2ZSBtZWRpdW0tc2l6ZWQgKDE1MOKAkzI1MCBnIG9yIDUuM+KAkzguOCBveiksIG92YXRlIGZydWl0IHdpdGggYSBibGFjaywgcGViYmxlZCBza2luLiBUaGUgZmxlc2ggaGFzIGEgbnV0dHksIHJpY2ggZmxhdm9yIHdpdGggMTklIG9pbC4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlIGNhbiB3aXRoc3RhbmQgdGVtcGVyYXR1cmVzIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXG4gICAgICBzaGFwZTogJ092YWwnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdHb3JnZW91cywgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgZXd4c2Q2eGI6IHtcbiAgICBuYW1lOiAnTGFtYiBIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnZXd4c2Q2eGInLFxuICAgIHNrdTogJ041NTIyOVpBJyxcbiAgICBwcmljZTogMS4zNCxcbiAgICBpbWFnZTogJy9pbWFnZXMvbGFtYi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIExhbWIgSGFzcyBhdm9jYWRvIGlzIGEgY3Jvc3MgYmV0d2VlbiBhIEhhc3MgYW5kIEd3ZW4gYXZvY2Fkby4gVGhlIGZydWl0cyBhcmUgbGFyZ2VyIGluIHNpemUgYW5kIGxhdGVyIG1hdHVyaW5nIHRoYW4gSGFzcy4gSXQgaXMgZ2FpbmluZyBpbiBwb3B1bGFyaXR5IGFzIGEgY29tbWVyY2lhbCBhbmQgYmFja3lhcmQgdmFyaWV0eSBkdWUgdG8gaXRzIGV4Y2VwdGlvbmFsIGZsYXZvciBhbmQgZWFzeSBwZWVsaW5nIHF1YWxpdGllcy4gVGhlIHRyZWUgaGFzIGFuIHVwcmlnaHQsIGNvbXBhY3QgaGFiaXQuJyxcbiAgICAgIHNoYXBlOiAnT2JvdmF0ZScsXG4gICAgICBoYXJkaW5lc3M6ICctMiDCsEMnLFxuICAgICAgdGFzdGU6ICdHcmVhdCwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgZnByNzJtOWs6IHtcbiAgICBuYW1lOiAnUGlua2VydG9uIEF2b2NhZG8nLFxuICAgIGlkOiAnZnByNzJtOWsnLFxuICAgIHNrdTogJ0I0SFo0MlRNJyxcbiAgICBwcmljZTogMS4yNyxcbiAgICBpbWFnZTogJy9pbWFnZXMvcGlua2VydG9uLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiRmlyc3QgZ3Jvd24gb24gdGhlIFBpbmtlcnRvbiBSYW5jaCBpbiBTYXRpY295LCBDYWxpZm9ybmlhLCBpbiB0aGUgZWFybHkgMTk3MHMsICdQaW5rZXJ0b24nIGlzIGEgc2VlZGxpbmcgb2YgJ0hhc3MnIHggJ1JpbmNvbicuIFRoZSBsYXJnZSBmcnVpdCBoYXMgYSBzbWFsbCBzZWVkLCBhbmQgaXRzIGdyZWVuIHNraW4gZGVlcGVucyBpbiBjb2xvciBhcyBpdCByaXBlbnMuIFRoZSB0aGljayBmbGVzaCBoYXMgYSBzbW9vdGgsIGNyZWFteSB0ZXh0dXJlLCBwYWxlIGdyZWVuIGNvbG9yLCBnb29kIGZsYXZvciwgYW5kIGhpZ2ggb2lsIGNvbnRlbnQuIEl0IHNob3dzIHNvbWUgY29sZCB0b2xlcmFuY2UsIHRvIOKIkjEgwrBDICgzMCDCsEYpIGFuZCBiZWFycyBjb25zaXN0ZW50bHkgaGVhdnkgY3JvcHMuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSwgaXQgaGFzIGV4Y2VsbGVudCBwZWVsaW5nIGNoYXJhY3RlcmlzdGljc1wiLFxuICAgICAgc2hhcGU6ICdMb25nIHBlYXInLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdNYXJ2ZWxvdXMsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIHQ5ZHYyNWdzOiB7XG4gICAgbmFtZTogJ1JlZWQgQXZvY2FkbycsXG4gICAgaWQ6ICd0OWR2MjVncycsXG4gICAgc2t1OiAnWlkzVDlYWEMnLFxuICAgIHByaWNlOiAxLjE4LFxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWVkLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdEZXZlbG9wZWQgZnJvbSBhIGNoYW5jZSBzZWVkbGluZyBmb3VuZCBpbiAxOTQ4IGJ5IEphbWVzIFMuIFJlZWQgaW4gQ2FsaWZvcm5pYSwgdGhpcyBjdWx0aXZhciBoYXMgbGFyZ2UsIHJvdW5kLCBncmVlbiBmcnVpdCB3aXRoIGEgc21vb3RoIHRleHR1cmUgYW5kIGRhcmssIHRoaWNrLCBnbG9zc3kgc2tpbi4gU21vb3RoIGFuZCBkZWxpY2F0ZSwgdGhlIGZsZXNoIGhhcyBhIHNsaWdodGx5IG51dHR5IGZsYXZvci4gVGhlIHNraW4gcmlwZW5zIGdyZWVuLiBBIEd1YXRlbWFsYW4gdHlwZSwgaXQgaXMgaGFyZHkgdG8g4oiSMSDCsEMgKDMwIMKwRikuIFRyZWUgc2l6ZSBpcyBhYm91dCA1IGJ5IDQgbSAoMTYuNCBieSAxMy4xIGZ0KScsXG4gICAgICBzaGFwZTogJ1JvdW5kJyxcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcbiAgICAgIHRhc3RlOiAnRXhxdWlzaXRlLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICB0MzQ1dzQ4eToge1xuICAgIG5hbWU6ICdadXRhbm8gQXZvY2FkbycsXG4gICAgaWQ6ICd0MzQ1dzQ4eScsXG4gICAgc2t1OiAnTVc3OVpaNlknLFxuICAgIHByaWNlOiAxLjI1LFxuICAgIGltYWdlOiAnL2ltYWdlcy96dXRhbm8uanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBadXRhbm8gYXZvY2FkbyBpcyBhIGNvbGQgaGFyZHksIGNvbnNpc3RlbnQgcHJvZHVjaW5nIGF2b2NhZG8gdmFyaWV0eS4gSXQgcmVzZW1ibGVzIHRoZSBGdWVydGUgaW4gYXBwZWFyYW5jZSBidXQgaXMgbGVzcyBmbGF2b3JmdWwgYnV0IG1vcmUgY29sZCBoYXJkeS4gVGhlIGdyZWVuIGZydWl0cyBhcmUgb2JvdmF0ZSBpbiBzaGFwZSB3aXRoIHdheHkgYnVtcHMgb24gdGhlIHNraW4uIFRoZSBmbGVzaCBoYXMgYSBsb3cgb2lsIGJ1dCBoaWdoIHdhdGVyIGNvbnRlbnQgd2hpY2ggY2F1c2VzIGl0IHRvIGhhdmUgYSBtb3JlIGZpYnJvdXMgdGV4dHVyZS4nLFxuICAgICAgc2hhcGU6ICdQZWFyJyxcbiAgICAgIGhhcmRpbmVzczogJy01IMKwQycsXG4gICAgICB0YXN0ZTogJ1NwbGVuZGlkLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRhXG4iXSwibmFtZXMiOlsiZGF0YSIsIm5hbWUiLCJpZCIsInNrdSIsInByaWNlIiwiaW1hZ2UiLCJhdHRyaWJ1dGVzIiwiZGVzY3JpcHRpb24iLCJzaGFwZSIsImhhcmRpbmVzcyIsInRhc3RlIiwiYjh1dGhlMnkiLCJld3hzZDZ4YiIsImZwcjcybTlrIiwidDlkdjI1Z3MiLCJ0MzQ1dzQ4eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./database/data.ts\n");

/***/ }),

/***/ "(api)/./database/db.ts":
/*!************************!*\
  !*** ./database/db.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"(api)/./database/data.ts\");\n// Oh you curious...\n// This is not a real database,\n// But let's imagine it is one :)\n\nclass Database {\n    constructor(){}\n    async getAll() {\n        const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n        await randomDelay();\n        return asArray;\n    }\n    async getById(id) {\n        if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"], id)) {\n            return null;\n        }\n        const entry = _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id];\n        await randomDelay();\n        return entry;\n    }\n}\n// Let's also add a delay to make it a bit closer to reality\nconst randomDelay = ()=>new Promise((resolve)=>{\n        const max = 350;\n        const min = 100;\n        const delay = Math.floor(Math.random() * (max - min + 1)) + min;\n        setTimeout(resolve, delay);\n    });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Database);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9kYi50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9CQUFvQjtBQUNwQiwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBQ0w7QUFFNUIsTUFBTUM7SUFDSkMsYUFBYyxDQUFDO0lBRWYsTUFBTUMsU0FBOEI7UUFDbEMsTUFBTUMsVUFBVUMsT0FBT0MsTUFBTSxDQUFDTiw2Q0FBT0E7UUFDckMsTUFBTU87UUFDTixPQUFPSDtJQUNUO0lBRUEsTUFBTUksUUFBUUMsRUFBVSxFQUE0QjtRQUNsRCxJQUFJLENBQUNKLE9BQU9LLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNaLDZDQUFPQSxFQUFFUyxLQUFLO1lBQ3RELE9BQU87UUFDVDtRQUVBLE1BQU1JLFFBQVFiLDZDQUFPLENBQUNTLEdBQUc7UUFDekIsTUFBTUY7UUFDTixPQUFPTTtJQUNUO0FBQ0Y7QUFFQSw0REFBNEQ7QUFDNUQsTUFBTU4sY0FBYyxJQUNsQixJQUFJTyxRQUFRLENBQUNDO1FBQ1gsTUFBTUMsTUFBTTtRQUNaLE1BQU1DLE1BQU07UUFDWixNQUFNQyxRQUFRQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBTUwsQ0FBQUEsTUFBTUMsTUFBTSxNQUFNQTtRQUU1REssV0FBV1AsU0FBU0c7SUFDdEI7QUFFRixpRUFBZWpCLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0emktbmV4dC1hcHAvLi9kYXRhYmFzZS9kYi50cz81ZmQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE9oIHlvdSBjdXJpb3VzLi4uXG4vLyBUaGlzIGlzIG5vdCBhIHJlYWwgZGF0YWJhc2UsXG4vLyBCdXQgbGV0J3MgaW1hZ2luZSBpdCBpcyBvbmUgOilcbmltcG9ydCBhbGxEYXRhIGZyb20gJy4vZGF0YSdcblxuY2xhc3MgRGF0YWJhc2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8VFByb2R1Y3RbXT4ge1xuICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKVxuICAgIHJldHVybiBhc0FycmF5XG4gIH1cblxuICBhc3luYyBnZXRCeUlkKGlkOiBzdHJpbmcpOiBQcm9taXNlPFRQcm9kdWN0IHwgbnVsbD4ge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFsbERhdGEsIGlkKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeSA9IGFsbERhdGFbaWRdXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKVxuICAgIHJldHVybiBlbnRyeVxuICB9XG59XG5cbi8vIExldCdzIGFsc28gYWRkIGEgZGVsYXkgdG8gbWFrZSBpdCBhIGJpdCBjbG9zZXIgdG8gcmVhbGl0eVxuY29uc3QgcmFuZG9tRGVsYXkgPSAoKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG1heCA9IDM1MFxuICAgIGNvbnN0IG1pbiA9IDEwMFxuICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuXG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSlcbiAgfSlcblxuZXhwb3J0IGRlZmF1bHQgRGF0YWJhc2VcbiJdLCJuYW1lcyI6WyJhbGxEYXRhIiwiRGF0YWJhc2UiLCJjb25zdHJ1Y3RvciIsImdldEFsbCIsImFzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyYW5kb21EZWxheSIsImdldEJ5SWQiLCJpZCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImVudHJ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJtYXgiLCJtaW4iLCJkZWxheSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./database/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/avo/index.ts":
/*!********************************!*\
  !*** ./pages/api/avo/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ \"(api)/./database/db.ts\");\n/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cors */ \"(api)/./cors-middleware.ts\");\n\n\nconst allAvos = async (req, res)=>{\n    try {\n        // Generally, you would not want this in your apps.\n        // See more in 'cors.js'\n        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        const db = new _database__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        const allEntries = await db.getAll();\n        const lenght = allEntries.length;\n        // Notice: We're manually setting the response object\n        // However Next.JS offers Express-like helpers :)\n        // https://nextjs.org/docs/api-routes/response-helpers\n        res.statusCode = 200;\n        res.setHeader(\"Content-Type\", \"application/json\");\n        res.end(JSON.stringify({\n            lenght,\n            data: allEntries\n        }));\n    } catch (e) {\n        console.error(e);\n        res.statusCode = 500;\n        res.end(JSON.stringify({\n            length: 0,\n            data: [],\n            error: \"Something went wrong\"\n        }));\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allAvos);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXZvL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMwQjtBQUNZO0FBRXRDLE1BQU1FLFVBQVUsT0FBT0MsS0FBc0JDO0lBQzNDLElBQUk7UUFDRixtREFBbUQ7UUFDbkQsd0JBQXdCO1FBQ3hCLE1BQU1ILGlEQUFrQkEsQ0FBQ0UsS0FBS0M7UUFFOUIsTUFBTUMsS0FBSyxJQUFJTCxpREFBRUE7UUFDakIsTUFBTU0sYUFBYSxNQUFNRCxHQUFHRSxNQUFNO1FBQ2xDLE1BQU1DLFNBQVNGLFdBQVdHLE1BQU07UUFFaEMscURBQXFEO1FBQ3JELGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdERMLElBQUlNLFVBQVUsR0FBRztRQUNqQk4sSUFBSU8sU0FBUyxDQUFDLGdCQUFnQjtRQUM5QlAsSUFBSVEsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUM7WUFBRU47WUFBUU8sTUFBTVQ7UUFBVztJQUNwRCxFQUFFLE9BQU9VLEdBQUc7UUFDVkMsUUFBUUMsS0FBSyxDQUFDRjtRQUNkWixJQUFJTSxVQUFVLEdBQUc7UUFDakJOLElBQUlRLEdBQUcsQ0FDTEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVMLFFBQVE7WUFBR00sTUFBTSxFQUFFO1lBQUVHLE9BQU87UUFBdUI7SUFFeEU7QUFDRjtBQUVBLGlFQUFlaEIsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXR6aS1uZXh0LWFwcC8uL3BhZ2VzL2FwaS9hdm8vaW5kZXgudHM/YmNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCBEQiBmcm9tICdAZGF0YWJhc2UnXG5pbXBvcnQgZW5hYmxlUHVibGljQWNjZXNzIGZyb20gJ0Bjb3JzJ1xuXG5jb25zdCBhbGxBdm9zID0gYXN5bmMgKHJlcTogSW5jb21pbmdNZXNzYWdlLCByZXM6IFNlcnZlclJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhbGx5LCB5b3Ugd291bGQgbm90IHdhbnQgdGhpcyBpbiB5b3VyIGFwcHMuXG4gICAgLy8gU2VlIG1vcmUgaW4gJ2NvcnMuanMnXG4gICAgYXdhaXQgZW5hYmxlUHVibGljQWNjZXNzKHJlcSwgcmVzKVxuXG4gICAgY29uc3QgZGIgPSBuZXcgREIoKVxuICAgIGNvbnN0IGFsbEVudHJpZXMgPSBhd2FpdCBkYi5nZXRBbGwoKVxuICAgIGNvbnN0IGxlbmdodCA9IGFsbEVudHJpZXMubGVuZ3RoXG5cbiAgICAvLyBOb3RpY2U6IFdlJ3JlIG1hbnVhbGx5IHNldHRpbmcgdGhlIHJlc3BvbnNlIG9iamVjdFxuICAgIC8vIEhvd2V2ZXIgTmV4dC5KUyBvZmZlcnMgRXhwcmVzcy1saWtlIGhlbHBlcnMgOilcbiAgICAvLyBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL3Jlc3BvbnNlLWhlbHBlcnNcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgbGVuZ2h0LCBkYXRhOiBhbGxFbnRyaWVzIH0pKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKVxuICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgcmVzLmVuZChcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbGVuZ3RoOiAwLCBkYXRhOiBbXSwgZXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSlcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxsQXZvc1xuIl0sIm5hbWVzIjpbIkRCIiwiZW5hYmxlUHVibGljQWNjZXNzIiwiYWxsQXZvcyIsInJlcSIsInJlcyIsImRiIiwiYWxsRW50cmllcyIsImdldEFsbCIsImxlbmdodCIsImxlbmd0aCIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/avo/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/avo/index.ts"));
module.exports = __webpack_exports__;

})();