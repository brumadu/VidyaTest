import {createSlice} from '@reduxjs/toolkit';
import {Client} from './Client.store';
import {Product} from './Product.store';
import {useSelector} from 'react-redux';
import {RootState} from '..';

export interface Order {
  id: string;
  client: Client;
  product: Product[];
  totalCost: string;
  productQuantity: string;
}

export interface orderData {
  order: Order;
}

export interface OrderState {
  orders: Order[];
  loading: boolean;
  error: boolean;
}

const initialState: OrderState = {
  orders: [
    {
      client: {
        id: 'number',
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
      product: [],
      totalCost: '19.50',
      productQuantity: '15',
      id: `1`,
    },
  ],
  loading: false,
  error: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
  },
});
export const useOrderSelect = () =>
  useSelector((state: RootState) => state.slice.order);

export const {addOrder} = orderSlice.actions;
export default orderSlice.reducer;
