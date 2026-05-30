import type { ActionType, CartItemType } from "../../../types/dataTypes";
import { ADD_TO_CART , REMOVE_FROM_CART } from "./Actions";

export const reducer = (state : { cartItems : CartItemType[] }, action : ActionType) =>
{
  switch(action.type) 
  {
    case ADD_TO_CART :
        return {
            cartItems : [...state.cartItems , action.payload]
        }
    ;
    case REMOVE_FROM_CART : 
        return {
            cartItems : state.cartItems.filter((item) => item.id !== action.payload.id)
        }
    default:
        return state;
  }
};
