import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Oversized Denim Jacket",
      category: "Jackets",
      price: 89,
      quantity: 1,
      size: "M",
      color: "Blue",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: 2,
      name: "Minimal Cotton Shirt",
      category: "Shirts",
      price: 64,
      quantity: 2,
      size: "L",
      color: "White",
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=500&q=85",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        existing.quantity += 1;
        return;
      }

      state.items.push({ quantity: 1, ...action.payload });
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increaseQty(state, action) {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty(state, action) {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

export default cartSlice.reducer;
