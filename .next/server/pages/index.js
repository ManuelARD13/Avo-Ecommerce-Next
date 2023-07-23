"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.tsx
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.tsx
var _document = __webpack_require__(3162);
// EXTERNAL MODULE: ./pages/_app.tsx
var _app = __webpack_require__(4178);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Layout/Layout.tsx + 3 modules
var Layout = __webpack_require__(5458);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./components/SVGIcons/index.ts + 3 modules
var SVGIcons = __webpack_require__(7317);
;// CONCATENATED MODULE: ./components/KawaiiHeader/AnimatedHeader.tsx




const AnimatedHeader = ({ visible, onClick, onComplete })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(external_semantic_ui_react_.Header, {
        size: "huge",
        as: "h1",
        onClick: onClick,
        children: [
            "Platzi",
            /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Transition, {
                animation: "jiggle",
                visible: visible,
                duration: 900,
                onComplete: onComplete,
                children: /*#__PURE__*/ jsx_runtime.jsx(SVGIcons/* Avocado */.dd, {
                    size: "58px"
                })
            }),
            "Avo"
        ]
    });
/* harmony default export */ const KawaiiHeader_AnimatedHeader = (AnimatedHeader);

;// CONCATENATED MODULE: ./components/KawaiiHeader/RottenHeader.tsx




const RottenHeader = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(external_semantic_ui_react_.Header, {
        size: "huge",
        as: "h1",
        children: [
            "Platzi",
            /*#__PURE__*/ jsx_runtime.jsx(SVGIcons/* PosMeMuero */.nw, {
                size: "58px"
            }),
            "Avo"
        ]
    });
/* harmony default export */ const KawaiiHeader_RottenHeader = (RottenHeader);

;// CONCATENATED MODULE: ./components/KawaiiHeader/ModalHeaderContent.tsx





const ModalHeaderContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-41ce3d84c82d85d5" + " " + "container",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Grid, {
                columns: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_semantic_ui_react_.Grid.Row, {
                    verticalAlign: "middle",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Grid.Column, {
                            width: "5",
                            children: /*#__PURE__*/ jsx_runtime.jsx(SVGIcons/* PosMeMuero */.nw, {
                                size: "154px"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_semantic_ui_react_.Grid.Column, {
                            width: "11",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Header, {
                                    as: "h2",
                                    children: "Mataste el aguacate"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "jsx-41ce3d84c82d85d5",
                                    children: "Lo tocaste tanto que lo mataste."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "jsx-41ce3d84c82d85d5",
                                    children: "Por otro lado, eres una persona muy curiosa y has descubierto esto. :)"
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime.jsx((style_default()), {
                id: "41ce3d84c82d85d5",
                children: ".container.jsx-41ce3d84c82d85d5{padding:2rem}"
            })
        ]
    });
};
/* harmony default export */ const KawaiiHeader_ModalHeaderContent = (ModalHeaderContent);

;// CONCATENATED MODULE: ./components/KawaiiHeader/KawaiiHeader.tsx







const KawaiiHeader = ()=>{
    const [visible, setVisible] = (0,external_react_.useState)(true);
    const [meMori, setMeMori] = (0,external_react_.useState)(false);
    const [modalOpen, setModalOpen] = (0,external_react_.useState)(false);
    const [count, setCount] = (0,external_react_.useState)(0);
    const closeModal = ()=>setModalOpen(false);
    const toggleVisible = ()=>setVisible((prevVisible)=>!prevVisible);
    (0,external_react_.useEffect)(()=>{
        window.setTimeout(toggleVisible, 350);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (count === 4) {
            setMeMori(true);
            setModalOpen(true);
        }
    }, [
        count
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "jsx-e10a9f433b62aa5b" + " " + "container",
        children: [
            meMori ? /*#__PURE__*/ jsx_runtime.jsx(KawaiiHeader_RottenHeader, {}) : /*#__PURE__*/ jsx_runtime.jsx(KawaiiHeader_AnimatedHeader, {
                visible: visible,
                onClick: toggleVisible,
                onComplete: ()=>setCount((prevCount)=>prevCount + 1)
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Confirm, {
                open: modalOpen,
                content: KawaiiHeader_ModalHeaderContent,
                onCancel: closeModal,
                onConfirm: closeModal,
                cancelButton: "Ay, lo siento",
                confirmButton: "OK",
                closeOnDimmerClick: false
            }),
            jsx_runtime.jsx((style_default()), {
                id: "e10a9f433b62aa5b",
                children: ".container.jsx-e10a9f433b62aa5b{margin:2rem 0 3rem}.container.jsx-e10a9f433b62aa5b .header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}"
            })
        ]
    });
};
/* harmony default export */ const KawaiiHeader_KawaiiHeader = (KawaiiHeader);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ProductList/ProductList.tsx




const mapProductsToCards = (products)=>products.map(({ name, id, price, image })=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            href: "/product/[id]",
            as: `/product/${id}`,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Card, {
                header: name,
                image: image,
                meta: /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Card.Meta, {
                    style: {
                        color: "dimgray"
                    },
                    children: price
                })
            })
        }, id));
const ProductList = ({ products })=>/*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Card.Group, {
        itemsPerRow: 2,
        stackable: true,
        className: "avo-product-list",
        children: mapProductsToCards(products)
    });
/* harmony default export */ const ProductList_ProductList = (ProductList);

;// CONCATENATED MODULE: external "isomorphic-unfetch"
const external_isomorphic_unfetch_namespaceObject = require("isomorphic-unfetch");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.tsx






const getServerSideProps = async ()=>{
    const response = await external_isomorphic_unfetch_default()("https://avo-ecommerce-next.vercel.app/api/avo");
    const { data: productList } = await response.json();
    return {
        props: {
            productList
        }
    };
};
const HomePage = ({ productList })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(KawaiiHeader_KawaiiHeader, {}),
            /*#__PURE__*/ jsx_runtime.jsx(ProductList_ProductList, {
                products: productList
            })
        ]
    });
};
/* harmony default export */ const pages = (HomePage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: pages_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [380,664,163,458], () => (__webpack_exec__(5607)));
module.exports = __webpack_exports__;

})();