import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

const initialState = {
  cart: {
    items: JSON.parse(localStorage.getItem("cart") || "[]"),
  },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: initialState,
});

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart.items));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;