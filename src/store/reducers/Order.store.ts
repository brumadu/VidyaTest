import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {RootState} from '..';
import {Client} from './Client.store';

export interface ProductOrder {
  productId: string;
  quantity: string;
}

export interface Order {
  id: string;
  totalCost: string;
}

export interface orderProps {
  order: Order;
}

export interface OrderState {
  selectedClient: Client;
  productOrder: ProductOrder;

  orders: Order[];
  loading: boolean;
  error: boolean;
}

const initialState: OrderState = {
  orders: [
    {
      totalCost: '19.50',
      id: `1`,
    },
  ],
  loading: false,
  error: false,
  productOrder: {
    productId: ``,
    quantity: '0',
  },
  selectedClient: {
    id: 0,
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
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    setOrderData: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    setOrderSelectedClient: (state, action) => {
      state.selectedClient = action.payload;
    },
  },
});

export const useOrderSelect = () =>
  useSelector((state: RootState) => state.slice.order);

export const {setOrderData, setOrderSelectedClient} = orderSlice.actions;
export default orderSlice.reducer;
