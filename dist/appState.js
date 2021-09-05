import React, { useState } from "react";
var defaultContextValue = {
    authorName: "Robuta",
    shoppingCart: { items: [] }
};
export var appContext = React.createContext(defaultContextValue);
export var appSetStateContext = React.createContext(undefined);
export var AppStateProvider = function (_a) {
    var children = _a.children;
    var _b = useState(defaultContextValue), state = _b[0], setState = _b[1];
    return (React.createElement(appContext.Provider, { value: state },
        React.createElement(appSetStateContext.Provider, { value: setState }, children)));
};
export default AppStateProvider;
