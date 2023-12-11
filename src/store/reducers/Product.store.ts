import {createSlice} from '@reduxjs/toolkit';

export interface Product {
  name: string;
  price: Float32Array;
  description: string;
  productPhoto: '';
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.products = [];
    },

    decrement(state) {
      state.products.pop();
    },
  },
});

export const {increment, decrement} = productSlice.actions;
export default productSlice.reducer;
