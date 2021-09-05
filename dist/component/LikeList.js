var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import styles from "./LikeList.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../appState";
var LikeList = /** @class */ (function (_super) {
    __extends(LikeList, _super);
    function LikeList(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            if (e.target.nodeName === "SPAN") {
                _this.setState({ isOpen: !_this.state.isOpen });
            }
        };
        _this.state = {
            isOpen: false,
        };
        return _this;
    }
    LikeList.prototype.render = function () {
        var _this = this;
        var isOpen = this.state.isOpen;
        return (React.createElement(appContext.Consumer, null, function (value) {
            return (React.createElement("div", { className: styles.cartContainer },
                React.createElement("button", { className: styles.button, onClick: _this.handleClick },
                    React.createElement(FiShoppingCart, null),
                    React.createElement("span", null,
                        " \u559C\u6B22\u7684\u4F5C\u54C1 ",
                        value.shoppingCart.items.length,
                        " (\u4EF6)")),
                React.createElement("div", { className: styles.cartDropDown, style: { display: isOpen ? "block" : "none" } },
                    React.createElement("ul", null, value.shoppingCart.items.map(function (item) {
                        return React.createElement("li", null, item.name);
                    })))));
        }));
    };
    return LikeList;
}(React.Component));
export default LikeList;
