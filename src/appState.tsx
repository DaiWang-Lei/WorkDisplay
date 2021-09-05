import React, { useState } from "react";


interface AppStateValue {
  authorName: string;
  shoppingCart: { items: { id: number, name: string }[] }
}
const defaultContextValue: AppStateValue = {
  authorName: "Robuta",
  shoppingCart: { items: [] }
};


export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(defaultContextValue)
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  )
}
export default AppStateProvider;