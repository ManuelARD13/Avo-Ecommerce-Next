exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8158);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1359);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(533);




const MyApp = ({ Component, pageProps })=>{
    // Aditional props
    // Aditional layout
    // Manejar errores - componentDidCatch
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_store_Cart__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    className: "my-body-class",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   jD: () => (/* binding */ useCart),
/* harmony export */   mS: () => (/* binding */ useCartMutations)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const defaultState = {};
const CartItemsContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(defaultState);
const CartDispatchContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(()=>{});
const CartProvider = ({ children })=>{
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(cartReducers, defaultState);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartItemsContext.Provider, {
        value: state,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartDispatchContext.Provider, {
            value: dispatch,
            children: children
        })
    });
};
function cartReducers(state, { item, type, quantity: qtyToAdd = 1 }) {
    const existingCartItem = state[item.id];
    switch(type){
        case "add":
            {
                if (existingCartItem != undefined) {
                    const quantity = existingCartItem.quantity + qtyToAdd;
                    return {
                        ...state,
                        [item.id]: {
                            ...existingCartItem,
                            quantity
                        }
                    };
                }
                return {
                    ...state,
                    [item.id]: {
                        ...item,
                        quantity: qtyToAdd
                    }
                };
            }
        case "remove":
            {
                if (existingCartItem == undefined) {
                    return state;
                }
                const quantity = existingCartItem.quantity - 1;
                if (quantity > 0) {
                    return {
                        ...state,
                        [item.id]: {
                            ...existingCartItem,
                            quantity
                        }
                    };
                }
                const newCartItems = {
                    ...state
                };
                delete newCartItems[item.id];
                return newCartItems;
            }
        default:
            {
                throw new Error(`Unhandled action type: ${type}`);
            }
    }
}
const getCartSubTotal = (sum, item)=>{
    sum += item.price * item.quantity;
    return sum;
};
const getCartCount = (sum, item)=>sum + item.quantity;
/**
 * Hey there insatiably brain,
 * Are you interested in this pattern where the Context values are
 * exposed without actually provinding access to the Context itself :)
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */ const useCart = ()=>{
    const itemsById = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartItemsContext);
    const items = Object.values(itemsById);
    // Not familiar with Array.reduce? :)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const count = items.reduce(getCartCount, 0);
    const subTotal = items.reduce(getCartSubTotal, 0);
    return {
        items,
        itemsById,
        count,
        subTotal
    };
};
const useCartMutations = ()=>{
    const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext);
    const addToCart = (product, quantity)=>dispatch({
            type: "add",
            item: product,
            quantity
        });
    const removeFromCart = (product)=>dispatch({
            type: "remove",
            item: product
        });
    return {
        addToCart,
        removeFromCart
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartProvider);


/***/ }),

/***/ 1359:
/***/ (() => {



/***/ })

};
;