
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
}

const slice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    updateProducts: (state,action) => {
      state.products = action.payload;
    },
    addToCart: (state,action) => {
      state.cartOpen = true;
      state.cart.push(action.payload);
    },
    addMultipleToCart: (state,action) => {
      state.cart.push(...action.payload);
    },
    updateCartQuantity: (state,action) => {
      const item = state.cart.find(product => product._id === action.payload._id);
      if (item) {
        item.purchaseQuantity = action.payload.purchaseQuantity;
      }
    },
    removeFromCart: (state,action) => {
      state.cart = state.cart.filter(product => product._id !== action.payload);
      state.cartOpen = state.cart.length > 0;
    },
    clearCart: (state) => {
      state.cartOpen = false;
      state.cart = [];
    },
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    updateCategories: (state,action)  => {
      state.categories = action.payload;
    },
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    }  
  },
});
export const {
  updateProducts,
  addToCart,
  addMultipleToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  toggleCart,
  updateCategories,
  updateCurrentCategory,
} = slice.actions;
export default slice.reducer;

