import React from "react";
interface AppStateValue {
    authorName: string;
    shoppingCart: {
        items: {
            id: number;
            name: string;
        }[];
    };
}
export declare const appContext: React.Context<AppStateValue>;
export declare const appSetStateContext: React.Context<React.Dispatch<React.SetStateAction<AppStateValue>>>;
export declare const AppStateProvider: React.FC;
export default AppStateProvider;
