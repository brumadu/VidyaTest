import {createSlice} from '@reduxjs/toolkit';
import {Client} from './Client.store';
import {Product} from './Product.store';

export interface Order {
  client: Client;
  totalCost: Float32Array;
  product: Product[];
  productQuantity: number;
}

export interface OrderState {
  orders: Order[];
  loading: boolean;
  error: boolean;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.orders = [];
    },

    decrement(state) {
      state.orders.pop();
    },
  },
});

export const {increment, decrement} = orderSlice.actions;
export default orderSlice.reducer;
