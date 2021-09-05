var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { useContext } from "react";
import { appSetStateContext } from "../appState";
import confetti from "canvas-confetti";
export var useAddToCart = function () {
    var setState = useContext(appSetStateContext);
    var addToCart = function (id, name) {
        if (setState) {
            confetti({
                width: 300,
                height: 300,
                particleCount: 400,
                startVelocity: 50,
                spread: 300,
            });
            setState(function (state) {
                return __assign(__assign({}, state), { shoppingCart: {
                        items: __spreadArray(__spreadArray([], state.shoppingCart.items), [
                            {
                                id: id,
                                name: name,
                            },
                        ]),
                    } });
            });
        }
    };
    return addToCart;
};
export default useAddToCart;
