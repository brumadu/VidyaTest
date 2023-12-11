import {createSlice} from '@reduxjs/toolkit';
import Client from '../../screens/Client/Client';

export interface Client {
  name: string;
  cnpj: number;
  phone: number;
  cep: number;
  addressState: string;
  addressCity: string;
  addressDistrict: string;
  addressStreet: string;
  addressNumber: string;
}

export interface ClientState {
  clients: Client[];
  loading: boolean;
  error: boolean;
}

const initialState: ClientState = {
  clients: [],
  loading: false,
  error: false,
};

const clientSlice = createSlice({
  name: 'client',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.clients = [];
    },

    decrement(state) {
      state.clients.pop();
    },
  },
});

export const {increment, decrement} = clientSlice.actions;
export default clientSlice.reducer;
