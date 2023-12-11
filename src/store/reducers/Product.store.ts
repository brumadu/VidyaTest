import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {RootState} from '..';
import {fetchProducts} from '../../services/realm/product/FetchProduct';

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

const products = fetchProducts();

const initialState: ProductState = {
  products: (products || []).map((product: Partial<Product>) => ({
    id: (product?.id || '') as string,
    name: (product?.name || '') as string,
    price: product?.price || 0,
    description: (product?.description || '') as string,
    productPhoto: (product?.productPhoto || '') as string,
  })),
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
