import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [101, 102, 103, 104, 105],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action) {
      const id = action.payload;

      state.ids = state.ids.includes(id)
        ? state.ids.filter((item) => item !== id)
        : [...state.ids, id];
    },

    removeFromWishlist(state, action) {
      state.ids = state.ids.filter((item) => item !== action.payload);
    },

    clearWishlist(state) {
      state.ids = [];
    },
  },
});

export const { toggleWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export const selectWishlistIds = (state) => state.wishlist.ids;

export const selectWishlistCount = (state) => state.wishlist.ids.length;

export default wishlistSlice.reducer;
