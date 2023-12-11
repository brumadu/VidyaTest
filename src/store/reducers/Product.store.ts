import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {RootState} from '..';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  productPhoto: string;
}

export interface productProps {
  product: Product;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: boolean;
}

const initialState: ProductState = {
  products: [
    {
      id: 'string',
      name: 'string',
      price: 19.49,
      description: 'string',
      productPhoto: 'string',
    },
  ],
  loading: false,
  error: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProductData: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const useProductSelect = () =>
  useSelector((state: RootState) => state.slice.product);

export const {setProductData} = productSlice.actions;
export default productSlice.reducer;
