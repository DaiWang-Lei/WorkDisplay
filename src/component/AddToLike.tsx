import React, { useContext } from "react";
import { appSetStateContext } from "../appState";
import confetti from "canvas-confetti";
export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  const addToCart = (id, name) => {
    if (setState) {
      confetti({
        width: 300,
        height: 300,
        particleCount: 400,
        startVelocity: 50,
        spread: 300,
      });
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [
              ...state.shoppingCart.items,
              {
                id,
                name,
              },
            ],
          },
        };
      });
    }
  };
  return addToCart;
};
export default useAddToCart;
