"use strict";
(() => {
var exports = {};
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 4429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3054);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3587);


const allAvos = async (req, res)=>{
    try {
        // Generally, you would not want this in your apps.
        // See more in 'cors.js'
        await (0,_cors__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(req, res);
        const db = new _database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
        const allEntries = await db.getAll();
        const lenght = allEntries.length;
        // Notice: We're manually setting the response object
        // However Next.JS offers Express-like helpers :)
        // https://nextjs.org/docs/api-routes/response-helpers
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            lenght,
            data: allEntries
        }));
    } catch (e) {
        console.error(e);
        res.statusCode = 500;
        res.end(JSON.stringify({
            length: 0,
            data: [],
            error: "Something went wrong"
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allAvos);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [333], () => (__webpack_exec__(4429)));
module.exports = __webpack_exports__;

})();