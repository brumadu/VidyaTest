import {createSlice} from '@reduxjs/toolkit';
import {Client} from './Client.store';
import {Product} from './Product.store';
import {useSelector} from 'react-redux';
import {RootState} from '..';

export interface Order {
  id: string;
  totalCost: string;
  productQuantity: string;
}

export interface orderProps {
  order: Order;
}

export interface OrderState {
  orders: Order[];
  selectedProduct: string;
  loading: boolean;
  error: boolean;
}

const initialState: OrderState = {
  orders: [
    {
      totalCost: '19.50',
      productQuantity: '15',
      id: `1`,
    },
  ],
  selectedProduct: '0',
  loading: false,
  error: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    setOrderData: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    setSelectedClient: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const useOrderSelect = () =>
  useSelector((state: RootState) => state.slice.order);

export const {setOrderData, setSelectedClient} = orderSlice.actions;
export default orderSlice.reducer;
