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
  order: [
    {
      productId: 0,
      selectedClient: {
        id: '0',
        name: 'string',
        cnpj: 'string',
        phone: 'string',
        cep: 'string',
        state: 'string',
        city: 'string',
        district: 'string',
        address: 'string',
        number: 'string',
      },
      totalPrice: 0,
      totalProducts: 0,
      products: [
        {
          quantity: 0,
          price: 0,
        },
      ],
    },
  ],
  loading: false,
  error: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    setOrderData: (state, action) => {
      (state.orderId = state.orderId + 1),
        (state.order = [...state.order, action.payload]);
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
    increaseOrderProductValue: (state, action) => {
      (state.order[state.orderId].products[
        state.order[state.orderId].productId
      ].price =
        state.order[state.orderId].products[
          state.order[state.orderId].productId
        ].price +
        action.payload * 100) / 100,
        (state.order[state.orderId].products[
          state.order[state.orderId].productId
        ].quantity =
          state.order[state.orderId].products[
            state.order[state.orderId].productId
          ].quantity + 1);
    },
    decreaseOrderProductValue: (state, action) => {
      (state.order[state.orderId].products[
        state.order[state.orderId].productId
      ].price =
        state.order[state.orderId].products[
          state.order[state.orderId].productId
        ].price +
        action.payload * 100) / 100,
        (state.order[state.orderId].products[
          state.order[state.orderId].productId
        ].quantity =
          state.order[state.orderId].products[
            state.order[state.orderId].productId
          ].quantity + 1);
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
  increaseOrderProductValue,
  decreaseOrderProductValue,
} = orderSlice.actions;
export default orderSlice.reducer;
