import {createSlice} from '@reduxjs/toolkit';
import Client from '../../screens/Client/Client';

export interface Client {
  id: string;
  name: string;
  cnpj: string;
  phone: string;
  cep: string;
  state: string;
  city: string;
  district: string;
  address: string;
  number: string;
}

export interface ClientState {
  clients: Client[];
  loading: boolean;
  error: boolean;
}

const initialState: ClientState = {
  clients: [
    {
      id: '0',
      name: 'test',
      cnpj: 'string',
      phone: 'string',
      cep: 'string',
      state: 'string',
      city: 'string',
      district: 'string',
      address: 'string',
      number: 'string',
    },
  ],
  loading: false,
  error: false,
};

const clientSlice = createSlice({
  name: 'client',
  initialState: initialState,
  reducers: {
    addClient: (state, action) => {
      state.clients = [...state.clients, action.payload];
    },
  },
});

export const {addClient} = clientSlice.actions;
export default clientSlice.reducer;
