var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useContext } from "react";
import styles from "./Work.module.css";
import { appContext } from "../appState";
import { useAddToCart } from "./AddToLike";
var WorkCard = function (props) {
    var id = props.id, name = props.name, introduction = props.introduction, href = props.href, restProps = __rest(props, ["id", "name", "introduction", "href"]);
    var addToCart = useAddToCart();
    // hook 的useContext方式
    var value = useContext(appContext);
    return (React.createElement("div", { className: styles.cardContainer, onClick: function (e) {
            // @ts-ignore
            if (e.target.tagName !== "BUTTON") {
                debugger;
                window.open(href);
            }
        } },
        React.createElement("img", { src: "https://robohash.org/" + id, alt: "" }),
        React.createElement("h2", null, name),
        React.createElement("p", null, introduction),
        React.createElement("p", null,
            "author: ",
            value.authorName),
        React.createElement("button", { onClick: function () { return addToCart(id, name); } }, "(\u2764 \u03C9 \u2764)")));
};
export default WorkCard;
