"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 6444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fproduct_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2Fproduct_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fproduct_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/product/[id].tsx
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (_id_),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
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
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./store/Cart.tsx
var Cart = __webpack_require__(533);
;// CONCATENATED MODULE: ./components/ProductSummary/AddToCart.tsx




// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = ()=>new Promise((resolve, reject)=>{
        window.setTimeout(resolve, 600);
    });
const validate = (quantity)=>{
    let error = "";
    if (quantity < 1) error = "Can't be blank";
    return error;
};
const AddToCart = ({ product })=>{
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [error, setError] = (0,external_react_.useState)("");
    const [quantity, setQuantity] = (0,external_react_.useState)(1);
    const [visible, setVisible] = (0,external_react_.useState)(false);
    const { addToCart } = (0,Cart/* useCartMutations */.mS)();
    const toggleMessage = ()=>{
        setTimeout(()=>{
            setVisible(false);
        }, 1000);
    };
    const handleSubmit = async ()=>{
        const error = validate(quantity);
        setError(error);
        if (!error) {
            setLoading(true);
            addToCartRequest().then(()=>{
                addToCart(product, quantity);
                setLoading(false);
                setQuantity(quantity);
                setVisible(true);
                toggleMessage();
            }).catch((err)=>{
                setError(`Error: ${err}` || "Something went wrong");
                setLoading(false);
            });
        }
    };
    const handleChange = ({ target })=>setQuantity(parseInt(target.value, 10));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Input, {
                type: "number",
                placeholder: "Quantity",
                value: quantity,
                min: 1,
                step: 1,
                error: !!error,
                onChange: handleChange,
                action: {
                    color: "green",
                    content: "Add to Cart",
                    icon: "plus cart",
                    onClick: handleSubmit,
                    loading,
                    disabled: loading
                }
            }),
            error && /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    color: "red",
                    position: "absolute"
                },
                children: error
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Transition, {
                duration: {
                    hide: 500,
                    show: 500
                },
                visible: visible,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        color: "green",
                        position: "absolute"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Icon, {
                            name: "check"
                        }),
                        "Added to cart"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const ProductSummary_AddToCart = (AddToCart);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/ProductSummary/ProductAttributes.tsx




const ProductAttributes = ({ description, ...otherAttributes })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "jsx-acd9185d52a95830" + " " + "container",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Header, {
                as: "h3",
                children: "About this avocado"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "jsx-acd9185d52a95830",
                children: description
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Divider, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_semantic_ui_react_.Table, {
                celled: true,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Table.Header, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Table.Row, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Table.HeaderCell, {
                                colSpan: "2",
                                children: "Attributes"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Table.Body, {
                        children: Object.keys(otherAttributes).map((key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(external_semantic_ui_react_.Table.Row, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Table.Cell, {
                                        className: "attr-name",
                                        children: key
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Table.Cell, {
                                        children: otherAttributes[key]
                                    })
                                ]
                            }, key))
                    })
                ]
            }),
            jsx_runtime.jsx((style_default()), {
                id: "acd9185d52a95830",
                children: ".container.jsx-acd9185d52a95830 .attr-name{text-transform:capitalize}"
            })
        ]
    });
/* harmony default export */ const ProductSummary_ProductAttributes = (ProductAttributes);

;// CONCATENATED MODULE: ./components/ProductSummary/ProductSummary.tsx





const ProductSummary = ({ product })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Item.Group, {
                as: "section",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_semantic_ui_react_.Item, {
                    style: {
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Item.Image, {
                            size: "medium",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: product.image,
                                alt: product.name
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_semantic_ui_react_.Item.Content, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Item.Header, {
                                    as: "h1",
                                    children: product.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_semantic_ui_react_.Item.Description, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: product.price
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Label, {
                                            children: `SKU: ${product.sku}`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_semantic_ui_react_.Item.Extra, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(ProductSummary_AddToCart, {
                                        product: product
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ProductSummary_ProductAttributes, {
                ...product.attributes
            })
        ]
    });
/* harmony default export */ const ProductSummary_ProductSummary = (ProductSummary);

;// CONCATENATED MODULE: ./pages/product/[id].tsx




const getStaticPaths = async ()=>{
    const response = await fetch("https://avo-ecommerce-next.vercel.app/api/avo");
    const { data: productList } = await response.json();
    const paths = productList.map(({ id })=>({
            params: {
                id: id
            }
        }));
    return {
        paths: paths,
        fallback: false
    };
};
const getStaticProps = async ({ params })=>{
    const id = params?.id;
    const response = await fetch(`https://avo-ecommerce-next.vercel.app/api/avo/${id}`);
    const product = await response.json();
    return {
        props: {
            product
        }
    };
};
const ProductPage = ({ product })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(Layout/* default */.Z, {
        children: product == null ? null : /*#__PURE__*/ jsx_runtime.jsx(ProductSummary_ProductSummary, {
            product: product
        })
    });
};
/* harmony default export */ const _id_ = (ProductPage);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fproduct%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fproduct%2F%5Bid%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fproduct_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fproduct_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2Fproduct_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/product/[id]","pathname":"/product/[id]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: _id_namespaceObject,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [380,664,163,458], () => (__webpack_exec__(6444)));
module.exports = __webpack_exports__;

})();