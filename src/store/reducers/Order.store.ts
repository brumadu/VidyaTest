import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {RootState} from '..';
import {Client} from './Client.store';

export interface productOrder {
  quantity: number;
  price: number;
}

export interface Order {
  selectedClient: Client;
  totalPrice: number;
  totalProducts: number;
  productId: number;
  products: productOrder[];
}

export interface orderProps {
  order: Order;
}

export interface OrderState {
  orderId: number;
  order: Order[];
  loading: boolean;
  error: boolean;
}

const initialState: OrderState = {
  orderId: 0,
  order: [],
  loading: false,
  error: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    setOrderData: (state, action) => {
      state.order = [...state.order, action.payload];
    },
    setOrderSelectedClient: (state, action) => {
      state.order[state.orderId].selectedClient = action.payload;
    },
    increaseTotalProduct: (state, action) => {
      (state.order[state.orderId].totalPrice = Number(
        Math.round(
          (state.order[state.orderId].totalPrice + action.payload) * 100,
        ) / 100,
      )),
        (state.order[state.orderId].totalProducts =
          state.order[state.orderId].totalProducts + 1);
    },
    decreaseTotalProduct: (state, action) => {
      (state.order[state.orderId].totalPrice = Number(
        Math.round(
          (state.order[state.orderId].totalPrice - action.payload) * 100,
        ) / 100,
      )),
        (state.order[state.orderId].totalProducts =
          state.order[state.orderId].totalProducts - 1);
    },
  },
});

export const useOrderSelect = () =>
  useSelector((state: RootState) => state.slice.order);

export const {
  setOrderData,
  increaseTotalProduct,
  setOrderSelectedClient,
  decreaseTotalProduct,
} = orderSlice.actions;
export default orderSlice.reducer;
