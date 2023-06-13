import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./features/cart"
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
