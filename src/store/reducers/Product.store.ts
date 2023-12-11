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
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const {addProduct} = productSlice.actions;
export default productSlice.reducer;
