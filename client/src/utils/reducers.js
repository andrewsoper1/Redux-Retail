
import { createSlice } from '@reduxjs/toolkit';

const initialShopState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: '',
}

const shopSlice = createSlice({
  name: 'shop',
  initialState: initialShopState,
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

const intitialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: intitialAuthState,
  reducers: {
    loginSuccess: (state,action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

const initialUserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
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
} = shopSlice.actions;

export const { loginSuccess, logout } = authSlice.actions;
export const { setUser, clearUser } = userSlice.actions;
export const shopReducer = shopSlice.reducer;
export const authReducer = authSlice.reducer;
export const userReducer = userSlice.reducer;

