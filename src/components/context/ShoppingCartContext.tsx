import { createContext, useContext, useReducer } from "react";
import type { CartItemType, childrenType, contextData } from "../../../types/dataTypes";
import { reducer } from "./ReducerFunction";

const ShoppingCartContext = createContext<contextData>({} as contextData);

const initialState: { cartItems: CartItemType[] } = {
  cartItems: [],
};

export default function ShoppingCartProvider({ children }: childrenType) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingCartContext.Provider
        value={{ cartItems: state.cartItems, ActionTrigger: dispatch}}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export const useAction = () => {
  return useContext(ShoppingCartContext);
};